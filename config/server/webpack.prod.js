const Paths = require("../Paths");
const WebpackCleanupPlugin = require("webpack-cleanup-plugin");

module.exports = {
  entry: [Paths.server.root, Paths.packageTemplate],
  output: {
    filename: "[name].js",
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
  plugins: [new WebpackCleanupPlugin()],
  mode: "production",
  target: "node"
};
