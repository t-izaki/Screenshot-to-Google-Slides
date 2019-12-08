const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    background: './src/javascripts/app.ts',
    popup: './src/javascripts/popup.ts'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist')
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      }
    ]
  },
  plugins: [
    new CopyPlugin([
      {
        from: 'src/html',
        to: ''
      }
    ]),
    new CopyPlugin([
      {
        from: 'src/manifest.json',
        to: ''
      }
    ]),
    new CopyPlugin([
      {
        from: 'src/images',
        to: ''
      }
    ])
  ]
}
