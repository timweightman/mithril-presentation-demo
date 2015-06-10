var webpack = require('webpack');

module.exports = {
  entry: {
    index: './src/index.js'
  },

  output: {
    filename: '[name].js',
    path: __dirname + '/dist',
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.msx$/, loader: 'msx-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style!css!' }
    ]
  },

  resolve: {
    modulesDirectories: ['node_modules']
  },

  plugins: [
    new webpack.ProvidePlugin({ m: "mithril" })
  ],

  node: {
    console: true,
    process: true
  },

  devServer: {
    contentBase: './dist',
    quiet: false,
    port: 3000,
    proxy: {
      '/sbos/*': 'http://localhost:8080'
    }
  }
};
