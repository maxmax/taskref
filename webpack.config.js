//TODO: create dev pro etc.
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

const extractSass = new ExtractTextPlugin({
  //filename: "assets/[name].[contenthash].css",
  filename: "assets/[name].css",
  disable: process.env.NODE_ENV === "development"
});

const uglifyjs = new webpack.optimize.UglifyJsPlugin({
  beautify: false,
  comments: false,
  compress: {
    sequences     : true,
    booleans      : true,
    loops         : true,
    unused        : true,
    warnings      : false,
    drop_console  : false,
    unsafe        : true
  }
});

const extractAuto = new HtmlWebpackPlugin({
  title: 'Output Auto',
  filename: 'index.html',
  template: 'src/template/react.ejs',
  chunks:['app']
});

module.exports = {
  entry: {
    app: './src/client.js'
  },
  //devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: ''
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    extractAuto,
    new webpack.HotModuleReplacementPlugin(),
    extractSass
    //uglifyjs
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015'] },
        }],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [{
            loader: "css-loader"
          }, {
            loader: "sass-loader"
          }],
          // use style-loader in development
          fallback: "style-loader"
        })
      },
      {
        test: /\.(png|svg|jpg|gif|mp4)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      }
    ]
  },
};
