const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  devServer: {
    static: path.resolve(__dirname, './build'),
    historyApiFallback: true,
  },
  entry: path.resolve(__dirname, './src/js/index.js'),
  mode: 'development',
  output: {
    path: `${__dirname}/build`,
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        resolve: {
          extensions: ['.js', '.jsx'],
        },
        use: {
          loader: ['babel-loader'],
          options: {
            presets: ['@babel/preset-env'],
          },
        },
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
      template: 'index.html',
      chunks: ['index'],
    }),
    new CleanWebpackPlugin(),
  ],
};
