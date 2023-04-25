const webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core/,
      __dirname + '/src'
    )
  ]
};
