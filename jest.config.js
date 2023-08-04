module.exports = {
  moduleFileExtensions: [
    'js',
    'ts',
  ],
  transform: {
    '^.+\\.ts$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.json',
      },
    ],
  },
  transformIgnorePatterns: [
    'node_modules/(?!@thayes)',
  ],
  testMatch: [
    '**/**/*.test.{js,ts}',
  ],
  preset: 'ts-jest',
}
