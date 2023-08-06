/* eslint-env node */

"use strict";

const path = require("path");
const webpack = require("webpack");
const getConfig = require("../../webpack.base.config");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = getConfig(webpack, {
  entry: {
    index: path.join(__dirname, "src", "index.ts"),
    result: path.join(__dirname, "src", "result-display.ts"),
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\/node_modules\/.*\.ts$/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
      {
        test: /.*\.css$/,
        use: [
          "style-loader",
          "css-loader",
        ],
      },
      {
        test: /.*\.svg$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'MIDI-XML Demo',
      template: 'src/index.html',
      excludeChunks: [
        'result',
      ],
      publicPath: '.',
    }),
    new HtmlWebpackPlugin({
      title: 'MIDI-XML Demo Results',
      template: 'src/result-display.html',
      filename: 'result-display.html',
      chunks: ['result'],
      publicPath: '.',
    }),
  ],
});
