const path = require('path');

module.exports = {
  entry: './src/App',

  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 9000
  },

  output: {
    filename: 'bundle.js',
    publicPath: '/assets/'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)?&/,
        loader: 'babel-loader'
      }
    ]

  },

  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src')
    ]
  }
};
