import { relative } from 'path';
import { ComponentMetaBuilder } from './component-meta-builder';
import { ComponentReader } from './component-reader';
import { ExampleReader } from './example-reader';

const cwd = process.cwd();
const pathToLib = relative(cwd, './projects/athenaeum');
const pathToAppTarget = relative(
  cwd,
  './projects/sample/src/app/layout/components'
);

const pathToAssets = relative(cwd, './projects/sample/src/assets');

new ComponentMetaBuilder(new ComponentReader(), new ExampleReader()).build(
  pathToLib,
  pathToAppTarget,
  pathToAssets
);
