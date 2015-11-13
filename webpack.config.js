var webpack = require('webpack');

module.exports = {
  entry: './src/app.js',
  output: {
    path: '.',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel', query: { presets: ['react', 'es2015', 'stage-0'] } },
    ]
  },
  progress: true,
  resolve: {
    modulesDirectories: [
      'src',
      'node_modules'
    ],
    extensions: ['', '.json', '.js']
  }
};
