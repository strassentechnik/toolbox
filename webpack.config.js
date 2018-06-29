const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const rootPath = path.join(__dirname, 'src')
const toolboxPath = path.join(rootPath, 'toolbox')

module.exports = {
  entry: {
    tool: ['react-hot-loader/patch', './src/tool/index.js'],
    toolbox: [
      'react-hot-loader/patch',
      'babel-polyfill',
      './src/toolbox/index.js',
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/toolbox/',
    filename: '[name].js',
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.scss'],
    modules: [path.resolve(toolboxPath), 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          'css-hot-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '/toolbox',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin('dist/*', {}),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/index.html',
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/toolbox/index.html',
      filename: 'toolbox.html',
    }),
  ],
  // devtool: 'inline-source-map',
  // devServer: {
  //   contentBase: './dist',
  //   hot: true,
  // },
}
