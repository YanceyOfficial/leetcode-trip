module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: '__tests__',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.j|tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  coverageDirectory: '../coverage',
}
