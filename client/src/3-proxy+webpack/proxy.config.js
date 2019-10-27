let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: './src/3-proxy+webpack/proxy.js',
  output: {
    filename: 'bundle.min.js',
    path: path.resolve(__dirname, 'build')
  },
  devServer: {
    port: 8081,
    // progress: true,
    contentBase: './build',
    proxy: {
      '/': {
        target: 'http://127.0.0.1:3000',
        changeOrigin: true
      },
      '/other': {
        target: 'http://127.0.0.1:30000',
        changeOrigin: true,
        pathRewrite: {
          '^/other':'/'
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/3-proxy+webpack/proxy.html',
      filename: 'proxy.html'
    })
  ]
};
