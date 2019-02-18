/* eslint-env node */

"use strict";

module.exports = function(webpack, options = {}) {
  const {
    entry,
    output,
    module:moduleOptions,
    plugins = [],
    resolve,
    ...otherOptions
  } = options;

  const {
    rules = [],
    ...otherModuleOptions
  } = moduleOptions || {};

  return {
    entry,
    output: {
      filename: "index.js",
      publicPath: "/",
      ...output,
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

        ...rules,
      ],

      ...otherModuleOptions,
    },
    plugins: [
      new webpack.EnvironmentPlugin({
        NODE_ENV: "development",
      }),
      ...plugins,
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
      ...resolve
    },
    devtool: "inline-sourcemap",
    target: "web",
    mode: process.env.NODE_ENV || "development",
    ...otherOptions
  };
}
