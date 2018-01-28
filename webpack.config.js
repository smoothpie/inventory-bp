'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  entry:  './src/index.js',
  context: path.resolve(__dirname),
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'lib'),
    filename: `index.js`,
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './www/index.html',
    })
  ],
  watch: true,
  resolve: {
    modules: ['node_modules'],
    extensions: ['.json', '.js']
  },
  resolveLoader: {
    moduleExtensions: ['-loader']
  },
  module: {
    rules: [
      {
        test   : /\.(png|jpg|jpeg|gif|ttf|eot|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        use : ['file-loader']
      },
      {
        test: /\.(md|svg)$/,
        use: [{
          loader: 'raw-loader'
        }]
      },
      {
        test: /\.(css|less)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
              config: path.resolve(__dirname, './config/postcss.config.js')
            }
          },
          { loader: 'less-loader', options: { sourceMap: true } }
        ],
        include: /\.module\.(css|less)$/
      },
      {
        test: /\.(css|less)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
              config: path.resolve(__dirname, './config/postcss.config.js')
            }
          },
          { loader: 'less-loader', options: { sourceMap: true } }
        ],
        exclude: /\.module\.(css|less)$/
      },
      {
        test: [/\.js$/, /\.jsx?$/],
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'stage-0', 'react'],
            plugins: [
              ["transform-runtime", {
                "polyfill": false,
                "regenerator": true
              }],
              'transform-decorators-legacy'
            ]
          }
        }],
        exclude: /node_modules/
      }
    ]
  }
};
