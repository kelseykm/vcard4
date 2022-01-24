import { TextType, DateTimeType } from '../../src/values/index.js';
import { LevelParameter } from '../../src/parameters/index.js';
import { InterestProperty } from '../../src/properties/index.js';
import { assert } from 'chai';

describe('InterestProperty tests', () => {
  it('Accepts valid input', () => {
    assert.doesNotThrow(() => new InterestProperty(
      [],
      new TextType('golf')
    ));
  });

  it('Rejects invalid input', () => {
    assert.throws(() => new InterestProperty(
      [
        new LevelParameter(
          new TextType('beginner'),
          'expertiseProperty'
        )
      ],
      new TextType('golf')
    ));
    assert.throws(() => new InterestProperty(
      [],
      new DateTimeType('19960415', 'date')
    ));
    assert.throws(() => new InterestProperty);
    assert.throws(() => new InterestProperty(1));
    assert.throws(() => new InterestProperty({}));
    assert.throws(() => new InterestProperty('James Bond'));
  });

  it('Formats value properly', () => {
    assert.strictEqual(
      new InterestProperty(
        [],
        new TextType('golf')
      ).repr(),
      "INTEREST:golf"
    );
  });
});
