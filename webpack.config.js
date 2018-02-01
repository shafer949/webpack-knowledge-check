const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  plugins: [
    new HtmlWebpackPlugin({
        title: 'Output Management',
        filename: 'bundle.html'
      })
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
        {
             test: /\.css$/,
             use: [
               'style-loader',
               'css-loader'
             ]
        },
        {
            test: /\.(html)$/,
            use: {
              loader: 'html-loader'
            }
        }
    ]
   }
};