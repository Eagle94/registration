'use strict';

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: path.join(__dirname, "frontend"),
  entry: { // --inline --hot
    main: "./main"
  },
  output: {
    path: path.join(__dirname, "public"),
    filename: "[name].js",
    library: "[name]"
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  devtool: "inline-source-map",

  plugins: [
    new ExtractTextPlugin('[name].css', {allChunks: true})
  ],

  module: {
    loaders: [{
      test:   /\.jsx?$/,
      include: path.join(__dirname, 'frontend'),
      loader: 'babel',
      query: {
        presets:['es2015','stage-0','react']
      }
    }, {
      test:   /\.scss$/,
      loader: 'style!css!autoprefixer?browsers=last 3 versions!resolve-url!sass-loader?sourceMap'
    }, {
      test:   /\.css/,
      loader: 'style!css!autoprefixer?browsers=last 3 versions'
    }, {
      test:   /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
      loader: 'file?name=[path][name].[ext]?[hash]'
    }]
  },

  devServer: {
    host: 'localhost',
    port: 8080,
    hot: true,
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'public')
  }
};


/*module.exports.plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings:     false,
      drop_console: true,
      unsafe:       true
    }
  })
);*/
