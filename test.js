const { expect } = require('chai');

describe('bundled babel', function() {
  console.time('load babel-core.bundle.js')
  require('.').transformSync('1+1');

  console.timeEnd('load babel-core.bundle.js')

  console.time('load babel-core')
  require('@babel/core').transformSync('1+1');
  console.timeEnd('load babel-core')
});
