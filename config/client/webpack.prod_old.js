const Paths = require("../Paths");

// Important modules this config uses
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const OfflinePlugin = require("offline-plugin");
const { HashedModuleIdsPlugin } = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const WebpackCleanupPlugin = require("webpack-cleanup-plugin");
module.exports = {
  mode: "production",

  entry: [Paths.client.root],

  output: {
    path: Paths.client.dist,
    filename: "[name].[chunkhash].js",
    chunkFilename: "[name].[chunkhash].chunk.js"
  },

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        exclude: /node_modules/,
        terserOptions: {
          warnings: false,
          compress: {
            comparisons: false
          },
          parse: {},
          mangle: true,
          output: {
            comments: false,
            ascii_only: true
          }
        },
        parallel: true,
        cache: true,
        sourceMap: false
      })
    ],
    nodeEnv: "production",
    sideEffects: false,
    concatenateModules: true,
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
      maxInitialRequests: 10,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1];
            return `npm.${packageName.replace("@", "")}`;
          }
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(tsx?|jsx?)$/,
        exclude: /node_modules/,
        loader: "ts-loader",
        options: {
          configFile: Paths.config.tsConfig.client
        }
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        exclude: /node_modules/,

        use: "file-loader"
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,

        use: [
          {
            loader: "svg-url-loader",
            options: {
              // Inline files smaller than 10 kB
              limit: 10 * 1024,
              noquotes: true
            }
          }
        ]
      },
      {
        test: /\.(jpg|png|gif)$/,
        exclude: /node_modules/,

        use: [
          {
            loader: "url-loader",
            options: {
              // Inline files smaller than 10 kB
              limit: 10 * 1024
            }
          },
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                enabled: true,
                progressive: true
              },
              gifsicle: {
                interlaced: false
              },
              optipng: {
                optimizationLevel: 7
              },
              pngquant: {
                quality: "65-90",
                speed: 4
              }
            }
          }
        ]
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,

        use: "html-loader"
      },
      {
        test: /\.(mp4|webm)$/,
        exclude: /node_modules/,

        use: {
          loader: "url-loader",
          options: {
            limit: 10000
          }
        }
      }
    ]
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".jsx"]
  },

  plugins: [
    // cleanup
    new WebpackCleanupPlugin(),
    // Minify and optimize the index.html
    new HtmlWebpackPlugin({
      template: Paths.client.templates.html,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true
    }),

    // Put it in the end to capture all the HtmlWebpackPlugin's
    // assets manipulations and do leak its manipulations to HtmlWebpackPlugin
    new OfflinePlugin({
      relativePaths: false,
      publicPath: "/",
      appShell: "/",

      // No need to cache .htaccess. See http://mxs.is/googmp,
      // this is applied before any match in `caches` section
      excludes: [".htaccess"],

      caches: {
        main: [":rest:"],

        // All chunks marked as `additional`, loaded after main section
        // and do not prevent SW to install. Change to `optional` if
        // do not want them to be preloaded at all (cached only when first loaded)
        additional: ["*.chunk.js"]
      },

      // Removes warning for about `additional` section usage
      safeToUseOptionalCaches: true
    }),

    new CompressionPlugin({
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    }),

    new WebpackPwaManifest({
      name: "MERN_PWA_boilerplate",
      short_name: "MERN_boilerplate",
      description: "My React Boilerplate-based project!",
      background_color: "#fafafa",
      theme_color: "#b1624d",
      inject: true,
      ios: true,
      icons: [
        {
          src: Paths.client.templates.faviconPNG,
          sizes: [72, 96, 128, 144, 192, 384, 512]
        },
        {
          src: Paths.client.templates.faviconPNG,
          sizes: [120, 152, 167, 180],
          ios: true
        }
      ]
    }),

    new HashedModuleIdsPlugin({
      hashFunction: "sha256",
      hashDigest: "hex",
      hashDigestLength: 20
    })
  ]
};
