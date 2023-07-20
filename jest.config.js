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
  testMatch: [
    '**/**/*.test.{js,ts}',
  ],
  preset: 'ts-jest',
}
