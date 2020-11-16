import { logDebug } from './logging';
import { join, sep } from 'path';
import { lstatSync, readdirSync } from 'fs-extra';
import { ComponentParts, ComponentReader } from './component-reader';
import { readFileSync, writeFileSync } from 'fs';
import * as he from 'he';
import { NavItem } from '../projects/sample/src/app/layout/navigation/state/sidenav-ui.model';

declare global {
  interface String {
    appendLine(text: string): string;
    appendCodeLine(text: string): string;
    capitalize(): string;
  }
}
(String.prototype as any).appendLine = appendLine;

function appendLine(this: string, text: string): string {
  let s = this;
  s = s + `${text}\n`;
  return s;
}

(String.prototype as any).appendCodeLine = appendCodeLine;

function appendCodeLine(this: string, text: string): string {
  let s = this;
  s =
    s +
    `<pre><code>` +
    he.encode(text, { encodeEverything: true }) +
    `</code></pre>\n`;
  return s;
}

(String.prototype as any).capitalize = capitalize;

function capitalize(): string {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

export class ComponentHtmlBuilder {
  constructor(private componentReader: ComponentReader) {}

  build(
    pathToLib: string,
    pathToAppTarget: string,
    pathToAssets: string
  ): void {
    const componentPartsList: ComponentParts[] = [];
    logDebug(`Building component HTML`);

    logDebug(`Found path to lib:`, pathToLib);

    const getDirectories = (source) =>
      readdirSync(source)
        .map((name) => join(source, name))
        .filter((src) => lstatSync(src).isDirectory());

    const libComponents = getDirectories(pathToLib);
    logDebug(`Found path to lib components`);
    libComponents.forEach((compDir) => {
      const componentNameKebab = compDir.substring(
        compDir.lastIndexOf(sep) + 1
      );
      logDebug(componentNameKebab);

      const componentFileName = readdirSync(compDir).find((compFile) =>
        compFile.endsWith('component.ts')
      );
      const componentParts = this.componentReader.readComponentTsFile(
        compDir,
        componentFileName
      );

      let componentHtml = this.buildComponentHtml(componentParts);

      componentHtml = componentHtml.appendLine('');
      componentHtml += this.buildExampleHtml(
        join(pathToAppTarget, componentNameKebab),
        componentParts
      );

      logDebug(`Writing ${componentParts.name}.component.html`);
      writeFileSync(
        join(
          pathToAppTarget,
          componentNameKebab,
          `${componentNameKebab}.component.html`
        ),
        componentHtml
      );
      componentPartsList.push(componentParts);
    });

    const navItems = this.buildNavItems(componentPartsList);

    logDebug(`Writing nav-data.json`);
    writeFileSync(
      join(pathToAssets, `nav-data.json`),
      JSON.stringify(navItems)
    );
  }

  buildNavItems(componentPartsList: ComponentParts[]): NavItem[] {
    const navItems: NavItem[] = [
      {
        text: 'Components',
        level: 0,
        route: '/components',
        expandable: true,
        path: '/components',
        children: [],
      },
    ];

    componentPartsList.forEach((componentParts) => {
      const componentNavItem = {
        text: componentParts.simpleName.capitalize(),
        level: 1,
        route: `/components/${componentParts.simpleName}`,
        expandable: true,
        path: `/components/${componentParts.simpleName}`,
        parentPath: '/components',
        children: [],
      };

      componentParts.examples.forEach((exampleName) => {
        componentNavItem.children.push({
          text: `${exampleName.capitalize()} Example`,
          level: 2,
          route: `/components/${componentParts.simpleName}`,
          fragment: `${exampleName}`,
          path: `/components/${componentParts.simpleName}#${exampleName}`,
          parentPath: `/components/${componentParts.simpleName}`,
        });
      });

      navItems[0].children.push(componentNavItem);
    });

    return navItems;
  }

  buildComponentHtml(componentParts: ComponentParts): string {
    let htmlContent = ``;
    htmlContent = htmlContent.appendLine(
      `<h1>${componentParts.simpleName.capitalize()}</h1>`
    );

    htmlContent = htmlContent.appendLine(`<p>${componentParts.comment}</p>`);
    htmlContent = htmlContent.appendLine(`<h2>Import</h2>`);
    htmlContent = htmlContent.appendCodeLine(
      `import { ${componentParts.name}Module } from @athenaeum/${componentParts.name}Module;`
    );
    htmlContent = htmlContent.appendLine(`<h2>Usage</h2>`);

    htmlContent = htmlContent.appendCodeLine(
      `<${componentParts.selector}></${componentParts.selector}>`
    );

    htmlContent = htmlContent.appendLine(`<h2>Inputs</h2>`);
    htmlContent = htmlContent.appendLine(`<ul>`);
    componentParts.inputs.forEach((input) => {
      htmlContent = htmlContent.appendLine(
        `<li><code><strong>${input.name}</strong>: <i>${he.encode(input.type, {
          encodeEverything: true,
        })}</i></code></li>`
      );
    });
    htmlContent = htmlContent.appendLine(`</ul>`);

    return htmlContent;
  }

  buildExampleHtml(compDir: string, componentParts: ComponentParts): string {
    let exampleHtml = '';

    const getDirectories = (source) =>
      readdirSync(source)
        .map((name) => join(source, name))
        .filter((src) => lstatSync(src).isDirectory());
    const exampleDirs = getDirectories(join(compDir, 'examples'));

    if (!exampleDirs.length) {
      throw Error(`No example component dirs exist for '${compDir}'`);
    }

    logDebug(`Found path to example dirs`, exampleDirs);
    exampleDirs.forEach((exampleDir) => {
      const exampleFiles = readdirSync(exampleDir);

      if (!exampleFiles.length) {
        throw Error(`Folder 'examples' is empty for component '${compDir}'`);
      }
      logDebug(`Found path to example files`, exampleFiles);

      const exampleTitle = exampleFiles[0].split('.')[0].replace(/-/g, ' ');
      const exampleSimpleName = exampleTitle.split(' ')[0];
      componentParts.examples.push(exampleSimpleName);
      exampleHtml = exampleHtml.appendLine(
        `<section id="${exampleSimpleName}">`
      );
      exampleHtml = exampleHtml.appendLine(`<mat-expansion-panel>
    <mat-expansion-panel-header>
      <mat-panel-title>
        ${exampleTitle}
      </mat-panel-title>
      <mat-panel-description style="justify-content: flex-end;">
      view source
</mat-panel-description>
    </mat-expansion-panel-header>
      <mat-tab-group>`);

      exampleFiles.forEach((exampleFileName) => {
        logDebug(`Reading example file:`, exampleFileName);
        const content = readFileSync(join(exampleDir, exampleFileName), 'utf8');

        let tabLabel = '';
        if (exampleFileName.endsWith('.html')) {
          // write html
          tabLabel = 'HTML';
        } else if (exampleFileName.endsWith('.scss')) {
          // write css
          tabLabel = 'SCSS';
        } else if (exampleFileName.endsWith('.component.ts')) {
          // write ts
          tabLabel = 'TS';
        } else {
          // Ignore any other files
          return;
        }
        exampleHtml = exampleHtml.appendLine(`<mat-tab label="${tabLabel}">`);
        exampleHtml = exampleHtml.appendCodeLine(content);
        exampleHtml = exampleHtml.appendLine(`</mat-tab>`);
      });

      exampleHtml = exampleHtml.appendLine(`
        </mat-tab-group>
      </mat-expansion-panel>
      `);

      const exampleDirPathParts = exampleDir.split('/');
      const exampleComponentTagName =
        exampleDirPathParts[exampleDirPathParts.length - 1];
      exampleHtml = exampleHtml.appendLine(
        `<app-${exampleComponentTagName}></app-${exampleComponentTagName}>`
      );
      exampleHtml = exampleHtml.appendLine(`</section>`);
    });

    return exampleHtml;
  }
}
