const Paths = require("../Paths");

const NodemonPlugin = require("nodemon-webpack-plugin");

module.exports = {
  entry: Paths.server.root,
  output: {
    filename: "server.bundle.js",
    path: Paths.server.dist
  },
  devtool: "source-map",
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
  mode: "development",
  watch: true,
  target: "node",
  plugins: [new NodemonPlugin()]
};
