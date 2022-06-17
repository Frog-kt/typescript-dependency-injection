/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  modulePaths: ['node_modules', '<rootDir>/src'],
  collectCoverage: true,
  collectCoverageFrom: ['**/*.ts', '!**/node_modules/**'],
  coverageDirectory: 'coverage_dir',
  coverageReporters: ['html'],
  moduleFileExtensions: ['js', 'json', 'ts'],
  testRegex: '.test.ts$',
  moduleNameMapper: {
    'src/(.*)': '<rootDir>/src/$1',
    '@config': '<rootDir>/src/config',
    '@prisma': '<rootDir>/src/helpers/utils/prisma',
    '@errors': '<rootDir>/src/helpers/utils/errors',
  },
}
