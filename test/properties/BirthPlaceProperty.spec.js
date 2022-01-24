import { TextType, DateTimeType } from '../../src/values/index.js';
import { ValueParameter  } from '../../src/parameters/index.js';
import { BirthPlaceProperty } from '../../src/properties/index.js';
import { assert } from 'chai';

describe('BirthPlaceProperty tests', () => {
  it('Accepts valid input', () => {
    assert.doesNotThrow(() => new BirthPlaceProperty(
      [],
      new TextType('The hospital')
    ));
  });

  it('Rejects invalid input', () => {
    assert.throws(() => new BirthPlaceProperty(
      [],
      new DateTimeType('19960415', 'date')
    ));
    assert.throws(() => new BirthPlaceProperty);
    assert.throws(() => new BirthPlaceProperty(1));
    assert.throws(() => new BirthPlaceProperty({}));
    assert.throws(() => new BirthPlaceProperty('James Bond'));
  });

  it('Formats value properly', () => {
    assert.strictEqual(
      new BirthPlaceProperty(
        [
          new ValueParameter(
            new TextType('The hospital')
          )
        ],
        new TextType('The hospital')
      ).repr(),
      "BIRTHPLACE;VALUE=text:The hospital"
    );
  });
});
