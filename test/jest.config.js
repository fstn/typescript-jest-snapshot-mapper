module.exports = {
  'moduleFileExtensions': ['js', 'json', 'ts'],
  'rootDir': '..',
  'testEnvironment': 'node',
  'testMatch': ['**/*.spec.ts'],
  'testTimeout': 50000,
  'transform': {
    '^.+\\.(t|j)s$': 'ts-jest'
  },
  'preset': 'ts-jest/presets/js-with-ts',
  'globals': {
    'ts-jest': {
      'diagnostics': false
    }
  }
};
