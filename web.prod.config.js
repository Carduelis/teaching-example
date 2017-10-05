const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractLess = new ExtractTextPlugin({
    filename: '[name].css?[id]_[contenthash]',
    disable: process.env.NODE_ENV === 'development'
});

module.exports = {
  entry: [
    path.join(__dirname, './app/index'),
  ],
  output: {
    path: path.join(__dirname, './public/'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      // take all less files, compile them, and bundle them in with our js bundle
      {
        test: /\.less$/,
        use: extractLess.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                browsers: 'last 2 version',
                minimize: true
              }
            },
            { loader: 'less-loader' }
          ]
        })
        // use: [
        //   'style-loader',
        //   'css-loader',
        //   {
        //     loader: 'autoprefixer-loader',
        //     options: {
        //       browsers: 'last 2 version'
        //     }
        //   },
        //   'less-loader'
        // ],
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{

          loader: 'babel-loader',
          options: {
						plugins: ["transform-decorators-legacy"],
						presets: ["es2015", "stage-0"]
          }
        }]
      }, {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },
  plugins: [
    extractLess,
    new HtmlWebpackPlugin({
      title: 'My App',
      template: path.join(__dirname, './app/index.ejs'),
      filename: 'index.html',
      files: {
        css: ['main.css'],
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        // Useful to reduce the size of client-side libraries, e.g. react
        NODE_ENV: JSON.stringify('production'),
        PLATFORM_ENV: JSON.stringify('web'),
      },
    }),
    // optimizations
    // new webpack.optimize.DedupePlugin(),
    // new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ],
};
