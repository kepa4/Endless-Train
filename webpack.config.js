const path = require('path');

module.exports = {
  entry: './src/index.js',

  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 8080
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public')
  }
};