module.exports = {
  entry: require.resolve('@babel/core'),
  target: 'node',
  output: {
    filename: 'babel-core.bundle.js',
    libraryTarget: 'commonjs2'
  }
};
