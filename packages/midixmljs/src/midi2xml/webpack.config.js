/* eslint-env node */

"use strict";

const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: path.resolve(__dirname, "index.ts"),
  output: {
    filename: "index.js",
    path: __dirname,
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
  
      {
        test: /\.(jpg|png|gif)$/,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              mozJpeg: {
                progressive: true,
              },
              optipng: {
                optimizationLevel: 7,
              },
              gifsicle: {
                interlaced: false,
              },
              pngquant: {
                quality: "65-90",
                speed: 4,
              },
            },
          },
        ],
      },
      
      {
        test: /\.html$/,
        use: "html-loader",
      },
      
      {
        test: /\.json$/,
        use: "json-loader",
      },
    ],
  },
  plugins: [
    // new webpack.EnvironmentPlugin({
    //   NODE_ENV: "development",
    // }),
    
    // new webpack.NamedModulesPlugin(),
  ],
  resolve: {
    extensions: [
      ".js",
      ".ts",
    ],
    mainFields: [
      "browser",
      "jsnext:main",
      "main",
    ],
  },
  devtool: "inline-sourcemap",
  target: "web",
  mode: process.env.NODE_ENV || "development",
};
