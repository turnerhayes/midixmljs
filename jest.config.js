/* eslint-env node */
"use strict";

module.exports = {
  moduleFileExtensions: [
    "ts",
    "js"
  ],
  transform: {
    "^.+\\.ts$": "ts-jest"
  },
  globals: {
    "ts-jest": {
      tsConfigFile: "tsconfig.json"
    }
  },
  testMatch: [
    "**/**/*.test.{js,ts}",
  ],
};
