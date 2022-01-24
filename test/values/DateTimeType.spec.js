import { DateTimeType } from '../../src/values/index.js';
import { assert } from 'chai';

describe('DateTimeType tests', () => {
  it('Accepts valid input', () => {
    assert.doesNotThrow(() => new DateTimeType('1985-04', 'date'));
    assert.doesNotThrow(() => new DateTimeType('---12', 'date'));


    assert.doesNotThrow(() => new DateTimeType(1400, 'time'));
    assert.doesNotThrow(() => new DateTimeType('102200Z', 'time'));

    assert.doesNotThrow(() => new DateTimeType('19961022T140000', 'datetime'));
    assert.doesNotThrow(() => new DateTimeType('---22T14', 'datetime'));

    assert.doesNotThrow(() => new DateTimeType('T10', 'dateandortime'));
    assert.doesNotThrow(() => new DateTimeType('---12', 'dateandortime'));

    assert.doesNotThrow(() => new DateTimeType('19961022T140000', 'timestamp'));
    assert.doesNotThrow(() => new DateTimeType('19961022T140000-05', 'timestamp'));

    assert.doesNotThrow(() => new DateTimeType('-0500', 'utcoffset'));
    assert.doesNotThrow(() => new DateTimeType('+03', 'utcoffset'));
  });

  it('Rejects invalid input', () => {
    assert.throws(() => new DateTimeType);
    assert.throws(() => new DateTimeType('19961022T14', 'timestamp'));
    assert.throws(() => new DateTimeType('T102200Z', 'time'));
    assert.throws(() => new DateTimeType({}));
  });

  it('Formats value properly', () => {
    assert.strictEqual(
      new DateTimeType('---12', 'dateandortime').repr(),
      "---12"
    );
    assert.strictEqual(
      new DateTimeType('---12', 'dateandortime').reprXML(),
      "<date>---12</date>"
    );
    assert.deepEqual(
      new DateTimeType('---12', 'dateandortime').reprJSON(),
      ['date-and-or-time', "---12"]
    );
  });
});
