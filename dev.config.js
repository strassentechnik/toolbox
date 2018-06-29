const config = require('./webpack.config.js')
const StyleLintPlugin = require('stylelint-webpack-plugin')

config.devtool = 'inline-source-map'

config.devServer = {
  contentBase: './dist',
  hot: true,
}

// config.plugins.push(
//   new StyleLintPlugin({
//     configFile: '.stylelintrc',
//     context: 'src/toolbox/assets/styles',
//     syntax: 'scss',
//   })
// )

module.exports = config
