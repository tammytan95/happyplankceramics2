const webpack = require("webpack");
const path = require("path");
const { CheckerPlugin } = require("awesome-typescript-loader");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const entry = path.resolve(__dirname, "./client/index.tsx");

const output = {
  //assume no need because it defaults
  path: path.resolve(__dirname, "dist"),
  // publicPath: "/dist/",
  filename: "bundle.js"
};

module.exports = {
  mode: "production",
  entry,
  output,
  devtool: "eval-source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  devServer: {
    port: 8080,
    proxy: { "/path": "http://localhost:3000" },
    contentBase: path.join(__dirname, "./dist")
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./client/index.html"
    }),

    new CheckerPlugin()
  ]
};
