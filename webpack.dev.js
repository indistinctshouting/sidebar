const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');
const DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: DIST_DIR
  }
});