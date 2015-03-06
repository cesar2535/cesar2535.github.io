var extensions = ['', '.jsx'];

module.exports = {
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: "style!css"
    }, {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'jsx-loader'
    }]
  },
  resolve: {
    extensions: extensions
  }
};