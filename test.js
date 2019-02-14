const { expect } = require('chai');

describe('bundled babel', function() {
  console.time('load babel-core.bundle.js')
  const babel = require('.');
  console.timeEnd('load babel-core.bundle.js')

  console.time('load babel-core')
  require('babel-core');
  console.timeEnd('load babel-core')
  it('seems to work', function() {
    expect(babel.transform).to.be.a('function');
  });
});
