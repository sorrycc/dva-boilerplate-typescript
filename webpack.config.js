const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.tsx',
  },
  output: {
    path: './dist',
    filename: '[name].js',
  },
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js'],
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'babel!ts',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract(
          'css-loader?sourceMap&modules&localIdentName=[local]___[hash:base64:5]'
        ),
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        loader: ExtractTextPlugin.extract(
          'css-loader?sourceMap'
        ),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('[name].css', {
      disable: false,
      allChunks: true,
    }),
  ],
};
