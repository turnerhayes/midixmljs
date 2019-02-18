/* eslint-env node */

"use strict";

const path = require("path");
const webpack = require("webpack");
const getConfig = require("../../webpack.base.config");

module.exports = getConfig(webpack, {
  entry: path.join(__dirname, "index.ts"),
  output: {
    filename: "midi-tools.js",
    path: path.join(__dirname, "build"),
    library: "MIDITools",
    libraryTarget: "umd",
  },
});
