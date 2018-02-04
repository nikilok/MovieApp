const webpack = require('webpack');
const path = require('path');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');
require("babel-core/register");
require("babel-polyfill");

module.exports = Merge(CommonConfig, {
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    port: 9000,
    contentBase: path.join(process.cwd(), 'dist'), // static file location
    host: 'localhost', // Or use an IP address here.
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    noInfo: false,
    stats: 'minimal',
    hot: true  // hot module replacement. Depends on HotModuleReplacementPlugin
  }
});