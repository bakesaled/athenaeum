const baseConfig = require('../../jest.base.config');

module.exports = {
  ...baseConfig,
  roots: ['<rootDir>/projects/athenaeum'],
  testMatch: ['<rootDir>/projects/athenaeum/**/*.spec.[jt]s'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/projects/athenaeum/tsconfig.spec.json',
      allowSyntheticDefaultImports: true,
    },
    stringifyContentPathRegex: true,
  },
};
