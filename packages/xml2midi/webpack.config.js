/* eslint-env node */

"use strict";

const path = require("path");
const webpack = require("webpack");
const getConfig = require("../../webpack.base.config");

module.exports = getConfig(webpack, {
  entry: path.join(__dirname, "src", "index.ts"),
  output: {
    filename: "xml2midi.js",
    path: path.join(__dirname, "build"),
    library: "XML2MIDI",
    libraryTarget: "umd",
  },
});
