import { BooleanType } from '../../src/values/index.js';
import { assert } from 'chai';

describe('BooleanType tests', () => {
  it('Accepts valid input', () => {
    assert.doesNotThrow(() => new BooleanType(true));
  });

  it('Rejects invalid input', () => {
    assert.throws(() => new BooleanType(1));
    assert.throws(() => new BooleanType);
    assert.throws(() => new BooleanType('false'));
    assert.throws(() => new BooleanType({}));
  });

  it('Formats value properly', () => {
    assert.strictEqual(
      new BooleanType(false).repr(),
      "false"
    );
  });
});
