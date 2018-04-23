const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  plugins: [
    new HtmlWebpackPlugin({
        title: 'Webpack App',
        template: path.join(__dirname, 'src', 'index.html')       
      })
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './dist'
  },
  watch: true,
  module: {
    rules: [
        { test: [/\.js$/], exclude: /node_modules/, loader: "babel-loader" },
        {
             test: /\.css$/,
             use: [
               'style-loader',
               'css-loader'
             ]
        },
        { test: /\.gif$/, use: [ "url-loader?mimetype=image/gif" ] }
    ]
   }
};