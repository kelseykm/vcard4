import { TextType } from '../../src/values/index.js';
import { LevelParameter } from '../../src/parameters/index.js';
import { assert } from 'chai';

describe('LevelParameter tests', () => {
  it('Accepts valid input', () => {
    assert.doesNotThrow(() => new LevelParameter(
      new TextType('beginner'),
      'expertiseproperty'
    ));

    assert.doesNotThrow(() => new LevelParameter(
      new TextType('low'),
      'interestProperty'
    ));
  });

  it('Rejects invalid input', () => {
    assert.throws(() => new LevelParameter(
      new TextType('low'),
      'expertiseProperty'
    ));
    assert.throws(() => new LevelParameter(
      new IntegerType(-2)
    ));
    assert.throws(() => new LevelParameter(1));
    assert.throws(() => new LevelParameter({}));
  });

  it('Formats value properly', () => {
    assert.strictEqual(
      new LevelParameter(
        new TextType('beginner'),
        'expertiseproperty'
      ).repr(),
      'LEVEL=beginner'
    )
  });
});
