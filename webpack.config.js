
module.exports = {
  entry: './src/index.tsx',
  output: {
    path: './dist',
    filename: 'index.js',
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
    ],
  },
};
