import { FloatListType, FloatType } from '../../src/values/index.js';
import { assert } from 'chai';

describe('FloatListType tests', () => {
  it('Accepts valid input', () => {
    assert.doesNotThrow(() => {
      new FloatListType([
        new FloatType(1.45),
        new FloatType('434.1212100000'),
        new FloatType(3.3)
      ]);
    });
  });

  it('Rejects invalid input', () => {
    assert.throws(() => new FloatListType(1));
    assert.throws(() => new FloatListType);
    assert.throws(() => new FloatListType([
      new IntegerType(5n)
    ]));
    assert.throws(() => new FloatListType({}));
  });

  it('Formats value properly', () => {
    assert.strictEqual(
      new FloatListType([
        new FloatType(1.45),
        new FloatType('4.00'),
        new FloatType(3.3)
      ]).repr(),
      "1.45,4.00,3.3"
    );
  });
});
