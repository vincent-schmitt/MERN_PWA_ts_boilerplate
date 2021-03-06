const Paths = require("../Paths");
const WebpackCleanupPlugin = require("webpack-cleanup-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: Paths.server.root,
  output: {
    filename: "server.bundle.js",
    path: Paths.dist,
    publicPath: Paths.server.dist
  },
  resolve: {
    extensions: [".ts", ".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: [/node_modules/],
        loader: "ts-loader",
        options: {
          configFile: Paths.config.tsConfig.server
        }
      }
    ]
  },
  plugins: [new WebpackCleanupPlugin({ exclude: [".git/", "package.json"] })],
  mode: "production",
  target: "node"
};
