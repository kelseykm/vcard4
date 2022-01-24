import { TextType, IntegerType } from '../../src/values/index.js';
import { PrefParameter } from '../../src/parameters/index.js';
import { assert } from 'chai';

describe('PrefParameter tests', () => {
  it('Accepts valid input', () => {
    assert.doesNotThrow(() => new PrefParameter(
      new IntegerType(1)
    ));
  });

  it('Rejects invalid input', () => {
    assert.throws(() => new PrefParameter(1));
    assert.throws(() => new PrefParameter);
    assert.throws(() => new PrefParameter(new TextType('en-us')));
    assert.throws(() => new PrefParameter({}));
  });

  it('Formats value properly', () => {
    assert.strictEqual(
      new PrefParameter(
        new IntegerType(1)
      ).repr(),
      "PREF=1"
    )
  });
});
