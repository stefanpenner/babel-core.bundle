const { expect } = require('chai');

describe('bundled babel', function() {
  it('works', function() {
    console.time('load babel-core.bundle.js')
    require('.').transformSync('1+1');
    expect(eval(require('.').transformSync('1+1').code)).to.eql(2);

    console.timeEnd('load babel-core.bundle.js')

    console.time('load babel-core')
    expect(eval(require('@babel/core').transformSync('1+1').code)).to.eql(2);
    console.timeEnd('load babel-core')
  });
});
