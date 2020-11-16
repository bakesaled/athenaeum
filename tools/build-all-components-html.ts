import { relative } from 'path';
import { ComponentHtmlBuilder } from './component-html-builder';
import { ComponentReader } from './component-reader';

const cwd = process.cwd();
const pathToLimestoneLib = relative(
  cwd,
  './projects/athenaeum/src/lib/components'
);
const pathToAppTarget = relative(
  cwd,
  './projects/sample/src/app/layout/components'
);

new ComponentHtmlBuilder(new ComponentReader()).build(
  pathToLimestoneLib,
  pathToAppTarget
);
