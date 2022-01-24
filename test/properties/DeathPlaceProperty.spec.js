import { DateTimeType, TextType } from '../../src/values/index.js';
import { ValueParameter } from '../../src/parameters/index.js';
import { DeathPlaceProperty } from '../../src/properties/index.js';
import { assert } from 'chai';

describe('DeathPlaceProperty tests', () => {
  it('Accepts valid input', () => {
    assert.doesNotThrow(() => new DeathPlaceProperty(
      [],
      new TextType('The hospital')
    ));
  });

  it('Rejects invalid input', () => {
    assert.throws(() => new DeathPlaceProperty(
      [],
      new DateTimeType('19960415', 'date')
    ));
    assert.throws(() => new DeathPlaceProperty);
    assert.throws(() => new DeathPlaceProperty(1));
    assert.throws(() => new DeathPlaceProperty({}));
    assert.throws(() => new DeathPlaceProperty('James Bond'));
  });

  it('Formats value properly', () => {
    assert.strictEqual(
      new DeathPlaceProperty(
        [
          new ValueParameter(
            new TextType('The hospital')
          )
        ],
        new TextType('The hospital')
      ).repr(),
      "DEATHPLACE;VALUE=text:The hospital"
    );
  });
});
