import { MissingArgument } from '../../src/errors/index.js';
import { expect } from 'chai';

describe('MissingArgument tests', () => {
  it('Should work as expected', () => {
    expect(() => {
      throw new MissingArgument('Testing...')
    }).to.throw(MissingArgument, 'Testing...');
  });
});
