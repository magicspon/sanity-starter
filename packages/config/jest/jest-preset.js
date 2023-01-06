module.exports = {
  roots: ['<rootDir>'],
  transform: {
    '\\.tsx?$': [
      'babel-jest',
      {
        configFile: '@project/jest-config/.babelrc.jest.js',
      },
    ],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  modulePathIgnorePatterns: [
    '<rootDir>/test/__fixtures__',
    '<rootDir>/node_modules',
    '<rootDir>/dist',
  ],
  preset: 'ts-jest',
  setupFiles: ['dotenv/config'],
  setupFilesAfterEnv: ['@project/jest-config/jest-setup.ts'],
  moduleNameMapper: {
    '^~(.*)': '<rootDir>/src/$1',
    '^@ui/(.*)': '@project/ui/src/$1',
  },
}
