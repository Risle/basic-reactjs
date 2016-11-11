var webpack = require ("webpack");
var path = require("path");

//get code from src, compile it and deploy it from dir
var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
  //tell webpack where to start; it gets dependencies from this; multiple entries allowed
  entry: SRC_DIR + "/app/index.js",
  output: {
    path: DIST_DIR + "/app",
    filename: "bundle.js",
    publicPath:"/app/"
  },
  //optional
  module: {
    loaders: [
      {
        test: /\.js?/,
        include: SRC_DIR,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015", "stage-2"]
        }
      }
    ]
  }
};

module.exports = config;
