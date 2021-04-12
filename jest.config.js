module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['__tests__', 'src/DataStructures', 'src/AlgorithmDesign'],
  testRegex: ['.spec.ts$', '.e2e-spec.ts'],
  moduleFileExtensions: ['js', 'json', 'ts'],
  collectCoverage: true,
  coverageDirectory: './coverage',
  collectCoverageFrom: [
    'src/DataStructures/**/*.ts',
    'src/AlgorithmDesign/**/*.ts',
    '!**/node_modules/**',
  ],
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageReporters: ['text', 'lcov', 'json', 'clover', 'html'],
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  verbose: true,
}
