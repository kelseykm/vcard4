import { URIType, IntegerType } from '../../src/values/index.js';
import { UIDProperty } from '../../src/properties/index.js';
import { assert } from 'chai';

describe('UIDProperty tests', () => {
  it('Accepts valid input', () => {
    assert.doesNotThrow(() => new UIDProperty(
      [],
      new URIType('urn:uuid:f81d4fae-7dec-11d0-a765-00a0c91e6bf6')
    ));
  });

  it('Rejects invalid input', () => {
    assert.throws(() => new UIDProperty(
      [
        new IntegerType(55)
      ],
      new IntegerType(55)
    ));
    assert.throws(() => new UIDProperty);
    assert.throws(() => new UIDProperty(1));
    assert.throws(() => new UIDProperty({}));
    assert.throws(() => new UIDProperty('James Bond'));
  });

  it('Formats value properly', () => {
    assert.strictEqual(
      new UIDProperty(
        [],
        new URIType('urn:uuid:f81d4fae-7dec-11d0-a765-00a0c91e6bf6')
      ).repr(),
      "UID:urn:uuid:f81d4fae-7dec-11d0-a765-00a0c91e6bf6"
    );
  });
});
