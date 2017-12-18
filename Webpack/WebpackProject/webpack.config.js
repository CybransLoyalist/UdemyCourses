var webpack = require('webpack');
var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = [
  "faker",
  "lodash",
  "react",
  "react-dom",
  "react-input-range",
  "react-redux",
  "react-router",
  "redux",
  "redux-form",
  "redux-thunk"
];

module.exports = {
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/ //dont apply babel to files from node_modules. It would work but it would be a waste of time, since these files are alreasy in ES5 format
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      }
    ]
  },
  plugins:[
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'] //if any modules are identical between vendor and bundle, include tem only in vendor
    }),
    new htmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new webpack.DefinePlugin({ //defines window scope variable available in bundle.js
      'process.env.NODE_ENV' : JSON.stringify(process.env.NODE_ENV)
    })
  ]
};
