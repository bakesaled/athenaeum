import { Example } from '../projects/sample/src/app/layout/components/state/components-ui.model';
import { readdirSync } from 'fs-extra';
import { logDebug } from './logging';
import { readFileSync } from 'fs';
import { join } from 'path';
import * as he from 'he';

export class ExampleReader {
  readDir(exampleDir: string, compDir: string): Example {
    const exampleFiles = readdirSync(exampleDir);

    if (!exampleFiles.length) {
      throw Error(`Folder 'examples' is empty for component '${compDir}'`);
    }
    logDebug(`Found path to example files`, exampleFiles);

    const exampleTitle = exampleFiles[0].split('.')[0].replace(/-/g, ' ');
    const exampleSimpleName = exampleTitle.split(' ')[0].capitalize();

    const example: Example = {
      name: exampleTitle,
      simpleName: exampleSimpleName,
    };

    exampleFiles.forEach((exampleFileName) => {
      logDebug(`Reading example file:`, exampleFileName);
      let content = readFileSync(join(exampleDir, exampleFileName), 'utf8');
      content = he.encode(content, { encodeEverything: true });

      if (exampleFileName.endsWith('.html')) {
        // write html
        example.html = content;
      } else if (exampleFileName.endsWith('.scss')) {
        // write css
        example.scss = content;
      } else if (exampleFileName.endsWith('.component.ts')) {
        // write ts
        example.ts = content;
      } else {
        // Ignore any other files
        return;
      }
    });

    return example;
  }
}
