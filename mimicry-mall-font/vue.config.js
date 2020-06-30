const path = require('path');
const webpack = require('webpack');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const WebpackBar = require('webpackbar');
const manifest = require('./public/vendor/vendor-manifest.json');

// console.log(process.env)

module.exports = {
  // publicPath: './',
  // ignore aready exist
  configureWebpack: {
    plugins: [
      // new webpack.DllReferencePlugin({
      //   manifest: manifest,
      //   content: process.cwd()
      // }),
      // insert already exist file
      new AddAssetHtmlPlugin({
        filepath: path.resolve(__dirname, './public/vendor/*.js'),
        publicPath: './vendor',
        outputPath: './vendor'
      }),
      new WebpackBar()
    ]
  },
  // Proxy setting
  devServer: {
    // hot: true
    open: "Chrome",
    disableHostCheck:true
  }
}
