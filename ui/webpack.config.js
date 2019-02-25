const path = require('path');

module.exports = {
  entry: './assets/scripts/app.js',
  output: {
    path: path.resolve(__dirname, './temp/scripts'),
    filename: 'app.bundle.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env'],
        },
        test: /\.js$/,
        exclude: /node_modules/,
      },
    ],
  },
};
