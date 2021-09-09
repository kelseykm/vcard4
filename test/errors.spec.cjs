const {
  MissingArgument,
  InvalidArgument
} = require('../src/cjs/errors');

const { expect } = require('chai');

describe('CJS custom errors tests', () => {
  describe('MissingArgument tests', () => {
    it('Should work as expected', () => {
      expect(() => {
        throw new MissingArgument('Testing...')
      }).to.throw(MissingArgument, 'Testing');
    });
  });

  describe('InvalidArgument tests', () => {
    it('Should work expected', () => {
      expect(() => {
        throw new InvalidArgument('Testing...')
      }).to.throw(InvalidArgument, 'Testing');
    })
  });
});
