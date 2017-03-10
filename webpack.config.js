const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const webpack = require('webpack'); 
const path = require('path');

const config = {
  context: __dirname + "/src",
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {test: /\.(js|jsx)$/, use: 'babel-loader'}
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: "commons",
      filename: "commons.js",
      minChunks: 2,
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({template: './index.html'})
  ],
  devtool: "cheap-eval-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    host: '0.0.0.0',
    port: 8080,
  }
};

module.exports = config;