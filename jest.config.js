module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['__tests__', 'src/data-structures', 'src/algorithm-design'],
  testRegex: ['.spec.ts$', '.e2e-spec.ts'],
  moduleFileExtensions: ['js', 'json', 'ts'],
  collectCoverage: true,
  coverageDirectory: './coverage',
  collectCoverageFrom: [
    'src/data-structures/**/*.ts',
    'src/algorithm-design/**/*.ts',
    '!**/node_modules/**',
  ],
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageReporters: ['text', 'lcov', 'json', 'clover', 'html'],
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  verbose: true,
}
