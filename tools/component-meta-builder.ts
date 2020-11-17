import { logDebug } from './logging';
import { join, sep } from 'path';
import { lstatSync, readdirSync } from 'fs-extra';
import { ComponentReader } from './component-reader';
import { writeFileSync } from 'fs';
import * as he from 'he';
import { NavItem } from '../projects/sample/src/app/layout/navigation/state/sidenav-ui.model';
import { ComponentMetaData } from '../projects/sample/src/app/layout/components/state/components-ui.model';
import { ExampleReader } from './example-reader';

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

export class ComponentMetaBuilder {
  constructor(
    private componentReader: ComponentReader,
    private exampleReader: ExampleReader
  ) {}

  build(
    pathToLib: string,
    pathToAppTarget: string,
    pathToAssets: string
  ): void {
    const componentMetaDatas: ComponentMetaData[] = [];
    logDebug(`Building component Meta Data`);

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
      const componentMetaData = this.componentReader.readComponentTsFile(
        compDir,
        componentFileName
      );

      this.readExampleDirs(
        join(pathToAppTarget, componentNameKebab),
        componentMetaData
      );

      componentMetaDatas.push(componentMetaData);
    });

    const navItems = this.buildNavItems(componentMetaDatas);

    logDebug(`Writing component-data.json`);
    writeFileSync(
      join(pathToAssets, `component-data.json`),
      JSON.stringify(componentMetaDatas)
    );

    logDebug(`Writing nav-data.json`);
    writeFileSync(
      join(pathToAssets, `nav-data.json`),
      JSON.stringify(navItems)
    );
  }

  buildNavItems(componentMetaDatas: ComponentMetaData[]): NavItem[] {
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

    componentMetaDatas.forEach((componentParts) => {
      const componentNavItem = {
        text: componentParts.simpleName,
        level: 1,
        route: `/components/${componentParts.simpleName.toLowerCase()}`,
        expandable: true,
        path: `/components/${componentParts.simpleName.toLowerCase()}`,
        parentPath: '/components',
        children: [],
      };

      componentParts.examples.forEach((example) => {
        componentNavItem.children.push({
          text: `${example.simpleName} Example`,
          level: 2,
          route: `/components/${componentParts.simpleName.toLowerCase()}`,
          fragment: `${example.simpleName.toLowerCase()}`,
          path: `/components/${componentParts.simpleName.toLowerCase()}#${example.simpleName.toLowerCase()}`,
          parentPath: `/components/${componentParts.simpleName.toLowerCase()}`,
        });
      });

      navItems[0].children.push(componentNavItem);
    });

    return navItems;
  }

  readExampleDirs(compDir: string, componentParts: ComponentMetaData): void {
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
      componentParts.examples.push(
        this.exampleReader.readDir(exampleDir, compDir)
      );
    });
  }
}
