import { TextType, IntegerType } from '../../src/values/index.js';
import { GeoParameter } from '../../src/parameters/index.js';
import { FNProperty } from '../../src/properties/index.js';
import { assert } from 'chai';

describe('FNProperty tests', () => {
  it('Accepts valid input', () => {
    assert.doesNotThrow(() => new FNProperty(
      [],
      new TextType('James Bond')
    ));
  });

  it('Rejects invalid input', () => {
    assert.throws(() => new FNProperty(
      [],
      new IntegerType(55)
    ));
    assert.throws(() => new FNProperty(
      [
        new GeoParameter('geo:123,456')
      ],
      new TextType('James Bond')
    ));
    assert.throws(() => new FNProperty);
    assert.throws(() => new FNProperty(1));
    assert.throws(() => new FNProperty({}));
    assert.throws(() => new FNProperty('James Bond'));
  });

  it('Formats value properly', () => {
    assert.strictEqual(
      new FNProperty(
        [],
        new TextType('James Bond')
      ).repr(),
      "FN:James Bond"
    );
  });
});
