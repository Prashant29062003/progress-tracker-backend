export default {
    testEnvironment: 'node',
    transform: {},
    extensionsToTreatAsEsm: ['.mjs'],
    moduleNameMapper: {
      '^(\\.{1,2}/.*)\\.js$': '$1'
    },
    testMatch: ['**/tests/**/*.test.mjs'],
    coverageDirectory: 'coverage',
    collectCoverageFrom: [
      'src/**/*.mjs',
      '!src/app.mjs',
      '!src/constants.mjs'
    ]
  };