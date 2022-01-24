import { DateTimeType, TextType, IntegerType } from '../../src/values/index.js';
import { LabelParameter } from '../../src/parameters/index.js';
import { TzProperty } from '../../src/properties/index.js';
import { assert } from 'chai';

describe('TzProperty tests', () => {
  it('Accepts valid input', () => {
    assert.doesNotThrow(() => new TzProperty(
      [],
      new TextType('Raleigh/North America')
    ));

    assert.doesNotThrow(() => new TzProperty(
      [],
      new DateTimeType('-0500', 'utcoffset')
    ));
  });

  it('Rejects invalid input', () => {
    assert.throws(() => new TzProperty(
      [],
      new IntegerType(55)
    ));
    assert.throws(() => new TzProperty(
      [
        new LabelParameter('Hello world')
      ],
      new TextType('Raleigh/North America')
    ));
    assert.throws(() => new TzProperty);
    assert.throws(() => new TzProperty(1));
    assert.throws(() => new TzProperty({}));
    assert.throws(() => new TzProperty('James Bond'));
  });

  it('Formats value properly', () => {
    assert.strictEqual(
      new TzProperty(
        [],
        new TextType('Raleigh/North America')
      ).repr(),
      "TZ:Raleigh/North America"
    );
    assert.strictEqual(
      new TzProperty(
        [],
        new TextType('Raleigh/North America')
      ).reprXML(),
      "<tz><text>Raleigh/North America</text></tz>"
    );
    assert.deepEqual(
      new TzProperty(
        [],
        new TextType('Raleigh/North America')
      ).reprJSON(),
      ["tz", {}, "text", "Raleigh/North America"]
    );
  });
});
