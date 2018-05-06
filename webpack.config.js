var path = require('path');

module.exports = {
  entry: path.join(__dirname, 'example', 'src', 'index.jsx'),
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        include: [path.join(__dirname, 'example')]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'example')
  },
  mode: 'development'
};
