const baseConfig = require('../../jest.base.config');

module.exports = {
  ...baseConfig,
  roots: ['<rootDir>/projects/sample/src'],
  testMatch: ['<rootDir>/projects/sample/src/**/*.spec.[jt]s'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/projects/sample/tsconfig.spec.json',
      allowSyntheticDefaultImports: true,
    },
    stringifyContentPathRegex: true,
  },
};
