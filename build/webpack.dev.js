const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    'vant-docs': './docs_c/src/index.js',
    'vant-mobile': './docs_c/src/mobile.js'
  },
  output: {
    path: path.join(__dirname, '../docs'),
    publicPath: '/',
    chunkFilename: 'async_[name].js'
  },
  stats: {
    modules: false,
    children: false
  },
  serve: {
    open: true,
    host: '0.0.0.0',
    devMiddleware: {
      logLevel: 'warn'
    },
    hotClient: {
      logLevel: 'warn',
      allEntries: true
    }
  },
  resolve: {
    extensions: ['.js', '.vue', '.css'],
    alias: {
      packages: path.join(__dirname, '../packages')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false
              }
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(css|postcss)$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.md$/,
        use: [
          'vue-loader',
          'fast-vue-md-loader'
        ]
      },
      {
        test: /\.(ttf|svg)$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
      new CopyWebpackPlugin([
          {
              from: path.resolve(__dirname, '../docs_c/static'),
              to: 'static',
              ignore: ['.*']
          },
      ]),
    new VueLoaderPlugin(),
    new ProgressBarPlugin(),
    new HtmlWebpackPlugin({
      chunks: ['vant-docs'],
      template: 'docs_c/src/index.tpl',
      filename: 'index.html',
      inject: true
    }),
    new HtmlWebpackPlugin({
      chunks: ['vant-mobile'],
      template: 'docs_c/src/index.tpl',
      filename: 'mobile.html',
      inject: true
    })
  ]
};
