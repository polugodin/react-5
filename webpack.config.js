const { join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: join(__dirname, 'index.jsx'),
  output: {
    path: join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      sources: join(__dirname, 'sources'),
      utils: join(__dirname, 'utils')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /(node_modules)/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Пользователи',
      template: 'index.html'
    }),
  ]
};