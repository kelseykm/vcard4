import { TextType, DateTimeType } from '../../src/values/index.js';
import { LevelParameter } from '../../src/parameters/index.js';
import { ExpertiseProperty } from '../../src/properties/index.js';
import { assert } from 'chai';

describe('ExpertiseProperty tests', () => {
  it('Accepts valid input', () => {
    assert.doesNotThrow(() => new ExpertiseProperty(
      [],
      new TextType('golf')
    ));
  });

  it('Rejects invalid input', () => {
    assert.throws(() => new ExpertiseProperty(
      [
        new LevelParameter(
          new TextType('high'),
          'hobbyProperty'
        )
      ],
      new TextType('golf')
    ));
    assert.throws(() => new ExpertiseProperty(
      [],
      new DateTimeType('19960415', 'date')
    ));
    assert.throws(() => new ExpertiseProperty);
    assert.throws(() => new ExpertiseProperty(1));
    assert.throws(() => new ExpertiseProperty({}));
    assert.throws(() => new ExpertiseProperty('James Bond'));
  });

  it('Formats value properly', () => {
    assert.strictEqual(
      new ExpertiseProperty(
        [],
        new TextType('golf')
      ).repr(),
      "EXPERTISE:golf"
    );
  });
});
