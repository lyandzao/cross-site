let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: './src/postMessage/father.js',
  output: {
    filename: 'father.min.js'
    // path: path.resolve(__dirname, 'build')
  },
  devServer: {
    port: 1001
    // progress: true,
    // contentBase: './build',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/postMessage/father.html',
      filename: 'father.html'
    })
  ]
};
