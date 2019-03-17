const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    "script.js": "./src/script.js",
    "style.css": "./src/style.scss"
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name]",
    chunkFilename: "[id]"
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loaders: {
            js: "babel-loader",
            scss: "vue-style-loader!css-loader!sass-loader"
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"]
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [{ loader: "css-loader" }, { loader: "sass-loader" }],
          fallback: "style-loader"
        })
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [{ loader: "file-loader" }]
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,
        loader: "url-loader?importLoaders=1&limit=100000"
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".vue"],
    alias: {
      vue$: "vue/dist/vue.common.js"
    }
  },
  plugins: [
    new ExtractTextPlugin("[name]"),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.LoaderOptionsPlugin({
      vue: {
        loaders: {
          scss: "style!css!sass"
        }
      }
    })
  ]
};
