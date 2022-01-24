import { DateTimeType, IntegerType } from '../../src/values/index.js';
import { RevProperty } from '../../src/properties/index.js';
import { assert } from 'chai';

describe('RevProperty tests', () => {
  it('Accepts valid input', () => {
    assert.doesNotThrow(() => new RevProperty(
      [],
      new DateTimeType('19951031T222710Z', 'timestamp')
    ));
  });

  it('Rejects invalid input', () => {
    assert.throws(() => new RevProperty(
      [
        new IntegerType(55)
      ],
      new IntegerType(55)
    ));
    assert.throws(() => new RevProperty);
    assert.throws(() => new RevProperty(1));
    assert.throws(() => new RevProperty({}));
    assert.throws(() => new RevProperty('James Bond'));
  });

  it('Formats value properly', () => {
    assert.strictEqual(
      new RevProperty(
        [],
        new DateTimeType('19951031T222710Z', 'timestamp')
      ).repr(),
      "REV:19951031T222710Z"
    );
    assert.strictEqual(
      new RevProperty(
        [],
        new DateTimeType('19951031T222710Z', 'timestamp')
      ).reprXML(),
      "<rev><timestamp>19951031T222710Z</timestamp></rev>"
    );
    assert.deepEqual(
      new RevProperty(
        [],
        new DateTimeType('19951031T222710Z', 'timestamp')
      ).reprJSON(),
      ["rev", {}, "timestamp", "1995-10-31T22:27:10Z"]
    );
  });
});
