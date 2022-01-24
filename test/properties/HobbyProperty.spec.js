import { TextType, DateTimeType } from '../../src/values/index.js';
import { LevelParameter } from '../../src/parameters/index.js';
import { HobbyProperty } from '../../src/properties/index.js';
import { assert } from 'chai';

describe('HobbyProperty tests', () => {
  it('Accepts valid input', () => {
    assert.doesNotThrow(() => new HobbyProperty(
      [],
      new TextType('golf')
    ));
  });

  it('Rejects invalid input', () => {
    assert.throws(() => new HobbyProperty(
      [
        new LevelParameter(
          new TextType('beginner'),
          'expertiseProperty'
        )
      ],
      new TextType('golf')
    ));
    assert.throws(() => new HobbyProperty(
      [],
      new DateTimeType('19960415', 'date')
    ));
    assert.throws(() => new HobbyProperty);
    assert.throws(() => new HobbyProperty(1));
    assert.throws(() => new HobbyProperty({}));
    assert.throws(() => new HobbyProperty('James Bond'));
  });

  it('Formats value properly', () => {
    assert.strictEqual(
      new HobbyProperty(
        [],
        new TextType('golf')
      ).repr(),
      "HOBBY:golf"
    );
    assert.strictEqual(
      new HobbyProperty(
        [],
        new TextType('golf')
      ).reprXML(),
      "<hobby><text>golf</text></hobby>"
    );
    assert.deepEqual(
      new HobbyProperty(
        [],
        new TextType('golf')
      ).reprJSON(),
      ["hobby", {}, "text", "golf"]
    );
  });
});
