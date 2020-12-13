import { logDebug } from './logging';
import { readFileSync } from 'fs-extra';
import { join } from 'path';
import { ComponentMetaData } from '../projects/sample/src/app/layout/components/state/components-ui.model';
import * as he from 'he';

export class ComponentReader {
  readComponentTsFile(
    componentDirPath: string,
    componentFileName: string
  ): ComponentMetaData {
    const componentMetaData: ComponentMetaData = {
      properties: [],
      examples: [],
    };

    logDebug('reading component file', componentDirPath, componentFileName);
    const content = readFileSync(
      join(componentDirPath, componentFileName),
      'utf8'
    );

    componentMetaData.simpleName = componentFileName
      .split('/')[0]
      .split('.')[0]
      .capitalize();

    const lines = content.split('\n');

    const isComponent = componentFileName.endsWith('component.ts');

    lines.forEach((line, idx) => {
      const trimmedLine = line.trim();
      if (trimmedLine.startsWith('import ')) {
        return;
      }

      // Get main component comment
      if (
        trimmedLine.startsWith('@Component(') ||
        trimmedLine.startsWith('@Directive(')
      ) {
        componentMetaData.comment = this.backupAndReadComment(
          lines,
          trimmedLine,
          idx,
          isComponent ? '@Component' : '@Directive'
        );

        if (lines[idx + 1].trim().startsWith('selector:')) {
          componentMetaData.selector = lines[idx + 1]
            .replace(`selector: '`, '')
            .replace(`',`, '')
            .trim();
        } else {
          throw Error('Selector not first property in Component decorator');
        }
        logDebug('Found selector', componentMetaData.selector);
        return;
      }

      // Get component name
      if (trimmedLine.startsWith('export class ')) {
        if (isComponent) {
          componentMetaData.name = trimmedLine
            .match(/[\s\S]*export class (.*Component)/)[1]
            .trim()
            .replace('Component', '');
          return;
        } else {
          componentMetaData.name = trimmedLine
            .match(/[\s\S]*export class (.*Directive)/)[1]
            .trim()
            .replace('Directive', '');
          return;
        }
      }

      componentMetaData.encodedImportText = he.encode(
        `import { ${
          componentMetaData.name
        }Module } from @bakesaled/athenaeum/${componentMetaData.simpleName.toLowerCase()};`,
        { encodeEverything: true }
      );

      if (componentMetaData.selector) {
        componentMetaData.encodedUsageText = '';
        if (isComponent) {
          componentMetaData.encodedUsageText = he.encode(
            `<${componentMetaData.selector}></${componentMetaData.selector}>`,
            { encodeEverything: true }
          );
        } else {
          let selectors: string[];
          if (componentMetaData.selector.indexOf(',')) {
            selectors = componentMetaData.selector.split(',');
          } else {
            selectors = [componentMetaData.selector];
          }

          selectors.forEach((selector) => {
            const selectorParts = selector.split('[');
            const selectorTargetElement = selectorParts[0].trim();
            const plainSelector = selectorParts[1].split(']')[0].trim();
            componentMetaData.encodedUsageText = componentMetaData.encodedUsageText.appendLine(
              he.encode(
                `<${selectorTargetElement} ${plainSelector}></${selectorTargetElement}>`,
                { encodeEverything: true }
              )
            );
          });
        }
      }

      // Get inputs and outputs
      if (
        trimmedLine.startsWith('@Input()') ||
        trimmedLine.startsWith('@Output()')
      ) {
        let linePieces;
        if (trimmedLine.length === 8 || trimmedLine.length === 9) {
          linePieces = lines[idx + 1].trim().split(':');

          if (linePieces[0].startsWith('get')) {
            linePieces[0] = linePieces[0].replace('get ', '').replace('()', '');
            linePieces[1] = linePieces[1].replace(' {', '');
          }
        } else {
          linePieces = lines[idx]
            .replace('@Input()', '')
            .replace('@Output()', '')
            .trim()
            .split(':');
        }

        logDebug('line pieces', trimmedLine, linePieces);

        if (linePieces[1].indexOf('=')) {
          linePieces[1] = linePieces[1].split('=')[0];
        }
        componentMetaData.properties.push({
          name: linePieces[0],
          type: linePieces[1].replace(';', '').trim(),
          encodedType: he.encode(linePieces[1].replace(';', '').trim(), {
            encodeEverything: true,
          }),
          comment: this.backupAndReadComment(lines, line, idx, linePieces[0]),
          decorator: trimmedLine.startsWith('@Input()') ? 'input' : 'output',
        });
      }
    });
    logDebug('component parts', componentMetaData);
    return componentMetaData;
  }

  backupAndReadComment(lines: string[], line, idx, targetName): string {
    let result = '';
    let cnt = 1;
    let prevLine = lines[idx - cnt].trim();
    while (!prevLine.startsWith('/**')) {
      cnt++;
      if (idx - cnt < 0) {
        throw Error(`No comment for target: ${targetName}`);
      }
      prevLine = lines[idx - cnt].trim();
    }

    // Read comment
    cnt--;
    let nextLine = lines[idx - cnt].trim();
    while (!nextLine.startsWith('*/')) {
      cnt--;
      result += `${nextLine.trim().substring(2)} `;

      if (cnt === 0) {
        throw Error(
          `Unending comment for target: ${targetName}, ${idx}, ${cnt}`
        );
      }
      nextLine = lines[idx - cnt].trim();
    }

    return result.trim();
  }
}
