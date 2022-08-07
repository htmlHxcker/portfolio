const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  devServer: {
    static: path.resolve(__dirname, './'),
    historyApiFallback: true,
  },
  entry: path.resolve(__dirname, './js/index.js'),
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        resolve: {
          extensions: ['.js'],
        },
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      filename: 'restry.html',
      template: './restry.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      filename: 'prepcards.html',
      template: './prepcards.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      filename: 'bibliohut.html',
      template: './bibliohut.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      filename: 'mozilla.html',
      template: './mozilla.html',
      chunks: ['main'],
    }),
    new CleanWebpackPlugin(),
  ],
};
