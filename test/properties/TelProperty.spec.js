import { URIType, TextType, IntegerType } from '../../src/values/index.js';
import { LabelParameter } from '../../src/parameters/index.js';
import { TelProperty } from '../../src/properties/index.js';
import { assert } from 'chai';

describe('TelProperty tests', () => {
  it('Accepts valid input', () => {
    assert.doesNotThrow(() => new TelProperty(
      [],
      new URIType('tel:+33-01-23-45-67')
    ));

    assert.doesNotThrow(() => new TelProperty(
      [],
      new TextType('+33-01-23-45-67')
    ));
  });

  it('Rejects invalid input', () => {
    assert.throws(() => new TelProperty(
      [],
      new IntegerType(55)
    ));
    assert.throws(() => new TelProperty(
      [
        new LabelParameter('Hello world')
      ],
      new TextType('+33-01-23-45-67')
    ));
    assert.throws(() => new TelProperty);
    assert.throws(() => new TelProperty(1));
    assert.throws(() => new TelProperty({}));
    assert.throws(() => new TelProperty('James Bond'));
  });

  it('Formats value properly', () => {
    assert.strictEqual(
      new TelProperty(
        [],
        new URIType('tel:+33-01-23-45-67')
      ).repr(),
      "TEL:tel:+33-01-23-45-67"
    );
  });
});
