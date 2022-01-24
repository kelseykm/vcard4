import { TextType, DateTimeType } from '../../src/values/index.js';
import { ValueParameter } from '../../src/parameters/index.js';
import { BdayProperty } from '../../src/properties/index.js';
import { assert } from 'chai';

describe('BdayProperty tests', () => {
  it('Accepts valid input', () => {
    assert.doesNotThrow(() => new BdayProperty(
      [],
      new DateTimeType('19960415', 'dateandortime')
    ));
  });

  it('Rejects invalid input', () => {
    assert.throws(() => new BdayProperty(
      [],
      new DateTimeType('19960415', 'date')
    ));
    assert.throws(() => new BdayProperty);
    assert.throws(() => new BdayProperty(1));
    assert.throws(() => new BdayProperty({}));
    assert.throws(() => new BdayProperty('James Bond'));
  });

  it('Formats value properly', () => {
    assert.strictEqual(
      new BdayProperty(
        [
          new ValueParameter(
            new TextType('circa 1800')
          )
        ],
        new TextType('circa 1800')
      ).repr(),
      "BDAY;VALUE=text:circa 1800"
    );
    assert.strictEqual(
      new BdayProperty(
        [
          new ValueParameter(
            new TextType('circa 1800')
          )
        ],
        new TextType('circa 1800')
      ).reprXML(),
      "<bday><text>circa 1800</text></bday>"
    );
    assert.deepEqual(
      new BdayProperty(
        [
          new ValueParameter(
            new TextType('circa 1800')
          )
        ],
        new TextType('circa 1800')
      ).reprJSON(),
      ["bday", {}, "text", "circa 1800"]
    );
  });
});
