const Paths = require("../Paths");

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
  mode: "production",
  target: "node"
};
