import { FloatType } from '../../src/values/index.js';
import { assert } from 'chai';

describe('FloatType tests', () => {
  it('Accepts valid input', () => {
    assert.doesNotThrow(() => new FloatType(-35.74));
    assert.doesNotThrow(() => new FloatType(90.234));
    assert.doesNotThrow(() => new FloatType('10.400'));
  });

  it('Rejects invalid input', () => {
    assert.throws(() => new FloatType);
    assert.throws(() => new FloatType('55'));
    assert.throws(() => new FloatType(55));
    assert.throws(() => new FloatType(5n));
    assert.throws(() => new FloatType({}));
  });

  it('Formats value properly', () => {
    assert.strictEqual(
      new FloatType(30.45).repr(),
      "30.45"
    );
    assert.strictEqual(
      new FloatType(30.45).reprXML(),
      "<float>30.45</float>"
    );
    assert.deepEqual(
      new FloatType(30.45).reprJSON(),
      ["float", 30.45]
    );
  });
});
