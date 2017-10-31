const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')

const config = {
  // Tell webpack that the root file of our server app
  entry: './src/client/client.js',

  // Tell webpack where to put the output file..
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },

  stats: {
    colors: true,
    reasons: true,
    chunks: true
  }
}

module.exports = merge(baseConfig, config)
