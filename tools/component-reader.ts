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

    lines.forEach((line, idx) => {
      const trimmedLine = line.trim();

      // Get main component comment
      if (trimmedLine.startsWith('@Component(')) {
        componentMetaData.comment = this.backupAndReadComment(
          lines,
          trimmedLine,
          idx,
          '@Component'
        );

        if (lines[idx + 1].trim().startsWith('selector:')) {
          componentMetaData.selector = lines[idx + 1]
            .replace(`selector: '`, '')
            .replace(`',`, '')
            .trim();
        } else {
          throw Error('Selector not first property in Component decorator');
        }
        return;
      }

      // Get component name
      if (trimmedLine.startsWith('export class ')) {
        componentMetaData.name = trimmedLine
          .match(/[\s\S]*export class (.*Component)/)[1]
          .trim()
          .replace('Component', '');
        return;
      }

      componentMetaData.encodedImportText = he.encode(
        `import { ${
          componentMetaData.name
        }Module } from @bakesaled/athenaeum/${componentMetaData.simpleName.toLowerCase()};`,
        { encodeEverything: true }
      );

      componentMetaData.encodedUsageText = he.encode(
        `<${componentMetaData.selector}></${componentMetaData.selector}>`,
        { encodeEverything: true }
      );

      // Get inputs
      if (trimmedLine.startsWith('@Input()')) {
        if (trimmedLine.length === 8) {
          const linePieces = lines[idx + 1].trim().split(':');
          componentMetaData.properties.push({
            name: linePieces[0],
            type: linePieces[1].replace(';', '').trim(),
            encodedType: he.encode(linePieces[1].replace(';', '').trim(), {
              encodeEverything: true,
            }),
            comment: this.backupAndReadComment(lines, line, idx, linePieces[0]),
            decorator: 'input',
          });
        } else {
          const linePieces = lines[idx]
            .replace('@Input()', '')
            .trim()
            .split(':');
          componentMetaData.properties.push({
            name: linePieces[0],
            type: linePieces[1].replace(';', '').trim(),
            encodedType: he.encode(linePieces[1].replace(';', '').trim(), {
              encodeEverything: true,
            }),
            comment: this.backupAndReadComment(lines, line, idx, linePieces[0]),
            decorator: 'input',
          });
        }
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
