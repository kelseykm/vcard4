import { IntegerType } from '../../src/values/index.js';
import { assert } from 'chai';

describe('IntegerType tests', () => {
  it('Accepts valid input', () => {
    assert.doesNotThrow(() => new IntegerType(1212));
    assert.doesNotThrow(() => new IntegerType(1212n));
    assert.doesNotThrow(() => new IntegerType(-12n));
    assert.doesNotThrow(() => new IntegerType(+3));
  });

  it('Rejects invalid input', () => {
    assert.throws(() => new IntegerType);
    assert.throws(() => new IntegerType(Number.MAX_SAFE_INTEGER + 1));
    assert.throws(() => new IntegerType(Number.MIN_SAFE_INTEGER - 1));
    assert.throws(() => new IntegerType(9223372036854775807n + 1n));
    assert.throws(() => new IntegerType(-9223372036854775808n - 1n));
    assert.throws(() => new IntegerType('55'));
    assert.throws(() => new IntegerType(5.5));
    assert.throws(() => new IntegerType([5, 6, 7]));
    assert.throws(() => new IntegerType({}));
  });

  it('Formats value properly', () => {
    assert.strictEqual(
      new IntegerType(30).repr(),
      "30"
    );
  });
});
