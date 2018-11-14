module.exports = {
  preset: 'jest-preset-angular',
  roots: [
    '<rootDir>/src',
  ],
  testMatch: [
    "<rootDir>/src/app/**/?(*.)+(spec|test).ts",
    "<rootDir>/src/app/?(*.)+(spec|test).ts"
  ],
  setupTestFrameworkScriptFile: '<rootDir>/src/setup-jest.ts',
  transformIgnorePatterns: [
    'node_modules/(?!(@ngrx|angularfire2))'
  ],
  verbose: true,
  coverageDirectory: 'coverage',
};
