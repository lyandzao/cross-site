let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: './src/postMessage/son.js',
  output: {
    filename: 'son.min.js'
    // path: path.resolve(__dirname, 'build')
  },
  devServer: {
    port: 1002
    // progress: true,
    // contentBase: './build',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/postMessage/son.html',
      filename: 'son.html'
    })
  ]
};
