const Paths = require("../Paths");
const WebpackCleanupPlugin = require("webpack-cleanup-plugin");
const GeneratePackageJson = require("generate-package-json-webpack-plugin");

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
  plugins: [
    new WebpackCleanupPlugin(),
    new GeneratePackageJson(
      { name: "mern_boilerplate", version: "0.0.1" },
      Paths.packageTemplate
    )
  ],
  mode: "production",
  target: "node"
};
