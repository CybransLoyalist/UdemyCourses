const path = require('path');
const extractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: './src/index.js', //relative path
  output: {
    path: path.resolve(__dirname, 'build'), //absolute path, thats why we use path module helper
    //resolve makes sure this path is correctly specified,
    // no matter of the system it runs on
    //_dirname means "current working directory"
    //so it says save the file bundle.js in
    // folder "build" in our working directory
    filename: 'bundle.js',
    publicPath: 'build/' //to tell url-loader where it can
    // find compressed files, because it changes path in "import
    //big from '../assets/big.jpg'" to
    //"import 94f7399b79ca46429d000f8cb4f1571c.jpg from ..."
    //and it must know where to look for this file
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/
      },
      // { //this attaches css to index.html header
      //   use: ['style-loader', 'css-loader'],
      //   //first css loader gets applied, and then its output goes to style-loader
      //   test: /\.css$/
      // }
      {
        loader: extractTextPlugin.extract({ //loader is the same as use, but it must be used here because extractTextPlugin requires it (it's a legacy issue)
          loader: 'css-loader'
        }),
        test: /\.css$/
      },
      {
        use: [
          {
            loader: 'url-loader',
            options: {limit: 40000} //bytes
          },
          'image-webpack-loader'
         ],
        test: /\.(jpe?g|png|gif|svg)$/
      }
    ]
  },
  plugins: [
    new extractTextPlugin('style.css') //find any files transformed by
    //extractTextPlugin loader and save them to style.css
  ]
};

module.exports = config;
