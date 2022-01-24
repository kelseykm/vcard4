import { URIType, IntegerType } from '../../src/values/index.js';
import { CaladruriProperty } from '../../src/properties/index.js';
import { assert } from 'chai';

describe('CaladruriProperty tests', () => {
  it('Accepts valid input', () => {
    assert.doesNotThrow(() => new CaladruriProperty(
      [],
      new URIType('http://example.com/calendar/jdoe')
    ));
  });

  it('Rejects invalid input', () => {
    assert.throws(() => new CaladruriProperty(
      [
        new IntegerType(55)
      ],
      new IntegerType(55)
    ));
    assert.throws(() => new CaladruriProperty);
    assert.throws(() => new CaladruriProperty(1));
    assert.throws(() => new CaladruriProperty({}));
    assert.throws(() => new CaladruriProperty('James Bond'));
  });

  it('Formats value properly', () => {
    assert.strictEqual(
      new CaladruriProperty(
        [],
        new URIType('http://example.com/calendar/jdoe')
      ).repr(),
      "CALADRURI:http://example.com/calendar/jdoe"
    );
  });
});
