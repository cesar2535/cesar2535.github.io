var extensions = ['', '.jsx'];

module.exports = {
  entry: './entry.js',
  output: {
    path: './build',
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
    }, {
      test: /\.(png|jpg|jpeg|gif|svg)$/,
      loader: 'file-loader'
    }]
  },
  resolve: {
    extensions: extensions
  }
};