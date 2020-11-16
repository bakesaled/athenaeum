import { logDebug } from './logging';
import { readFileSync } from 'fs-extra';
import { join } from 'path';

export interface Input {
  name?: string;
  type?: string;
  comment?: string;
}

export interface ComponentParts {
  name?: string;
  simpleName?: string;
  selector?: string;
  comment?: string;
  inputs: Input[];
}

export class ComponentReader {
  readComponentTsFile(
    componentDirPath: string,
    componentFileName: string
  ): ComponentParts {
    const componentParts: ComponentParts = {
      inputs: [],
    };

    logDebug('reading component file', componentDirPath, componentFileName);
    const content = readFileSync(
      join(componentDirPath, componentFileName),
      'utf8'
    );

    componentParts.simpleName = componentFileName
      .split('/')[0]
      .split('.')[0]
      .capitalize();

    const lines = content.split('\n');

    lines.forEach((line, idx) => {
      const trimmedLine = line.trim();

      // Get main component comment
      if (trimmedLine.startsWith('@Component(')) {
        componentParts.comment = this.backupAndReadComment(
          lines,
          trimmedLine,
          idx,
          '@Component'
        );

        if (lines[idx + 1].trim().startsWith('selector:')) {
          componentParts.selector = lines[idx + 1]
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
        componentParts.name = trimmedLine
          .match(/[\s\S]*export class (.*Component)/)[1]
          .trim()
          .replace('Component', '');
        return;
      }

      // Get inputs
      if (trimmedLine.startsWith('@Input()')) {
        if (trimmedLine.length === 8) {
          const linePieces = lines[idx + 1].trim().split(':');
          componentParts.inputs.push({
            name: linePieces[0],
            type: linePieces[1].replace(';', '').trim(),
            comment: this.backupAndReadComment(lines, line, idx, linePieces[0]),
          });
        } else {
          const linePieces = lines[idx]
            .replace('@Input()', '')
            .trim()
            .split(':');
          componentParts.inputs.push({
            name: linePieces[0],
            type: linePieces[1].replace(';', '').trim(),
            comment: this.backupAndReadComment(lines, line, idx, linePieces[0]),
          });
        }
      }
    });
    logDebug('component parts', componentParts);
    return componentParts;
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
