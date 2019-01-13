const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [path.join(__dirname, '../src/components/web/index')],
  output: {
    path: path.join(__dirname, '../build/'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  mode: 'production',
  module: {
    rules: [
      // Take all sass files, compile them, and bundle them in with our js bundle
      {
        test: /\.scss$/,
        loader:
          'style-loader!css-loader!autoprefixer-loader?browsers=last 2 version!sass-loader',
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        PLATFORM_ENV: JSON.stringify('web'),
      },
    }),
    // optimizations
    new webpack.optimize.OccurrenceOrderPlugin(),
  ],
};
