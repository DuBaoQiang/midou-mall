const path = require('path');
const webpack = require('webpack');
const AddAssetWebpackPlugin = require('add-asset-html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const dllPath = 'public/vendor';

function resolvePath(filePath) {
  return path.join(__dirname, filePath)
}

module.exports = {
  entry: {
    vendor: ['vue', 'vue-router', 'vuex', 'axios']
  },
  output: {
    path: resolvePath(dllPath),
    filename: '[name].dll.js',
    library: '[name]_[hash]'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: 'production'
      }
    }),
    new webpack.DllPlugin({
      path: path.join(__dirname, dllPath, '[name]-manifest.json'),
      name: '[name]_[hash]',
    })
  ]
}
