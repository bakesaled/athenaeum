module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  setupFiles: ['<rootDir>/global-test.ts'],
  coveragePathIgnorePatterns: [
    'node_modules',
    'jest-setup.ts',
    'src/environments',
    'src/polyfills.ts',
    '.mock.ts',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png)$': `${__dirname}/mock-module.js`,
    '^@bakesaled/athenaeum/(.*)$': '<rootDir>/projects/athenaeum/$1',
  },
};
