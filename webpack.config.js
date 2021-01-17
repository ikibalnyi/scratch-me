const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname),
  entry: './src/index.ts',
  devServer: {
    compress: true,
    hot: true, // enable HMR on the server
    port: 8080,
  },
  devtool: 'inline-source-map',
  optimization: {
    moduleIds: 'named',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: require.resolve('ts-loader'),
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // enable HMR globally
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html'),
    }),
  ],
};
