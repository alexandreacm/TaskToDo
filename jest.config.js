module.exports = {
  preset: 'react-native',
  setupFiles: ['./__tests__/jest.setup.js'],
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node'
  ],
  testMatch: ['**/__tests__/**/*.(test|spec).(js|tsx)'],
  testPathIgnorePatterns: [
    './node_modules',
    './android',
    './ios',
    '<rootDir>/__tests__/jest.setup.js',
  ],
}
