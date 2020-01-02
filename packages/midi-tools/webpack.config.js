/* eslint-env node */

"use strict";

const path = require("path");
const webpack = require("webpack");
const TypedocWebpackPlugin = require("typedoc-webpack-plugin");
const getConfig = require("../../webpack.base.config");

module.exports = getConfig(webpack, {
  entry: path.join(__dirname, "src", "index.ts"),
  output: {
    filename: "midi-tools.js",
    path: path.join(__dirname, "build"),
    library: "MIDITools",
    libraryTarget: "umd",
  },
  plugins: [
    new TypedocWebpackPlugin({
      out: path.resolve(__dirname, "docs"),
    }, "src"),
  ],
});
