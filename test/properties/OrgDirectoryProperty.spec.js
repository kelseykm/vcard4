import { URIType, IntegerType } from '../../src/values/index.js';
import { OrgDirectoryProperty } from '../../src/properties/index.js';
import { assert } from 'chai';

describe('OrgDirectoryProperty tests', () => {
  it('Accepts valid input', () => {
    assert.doesNotThrow(() => new OrgDirectoryProperty(
      [],
      new URIType('uuid:f81d4fae-7dec-11d0-a765-00a0c91e6bf6')
    ));
  });

  it('Rejects invalid input', () => {
    assert.throws(() => new OrgDirectoryProperty(
      [
        new IntegerType(55)
      ],
      new IntegerType(55)
    ));
    assert.throws(() => new OrgDirectoryProperty);
    assert.throws(() => new OrgDirectoryProperty(1));
    assert.throws(() => new OrgDirectoryProperty({}));
    assert.throws(() => new OrgDirectoryProperty('James Bond'));
  });

  it('Formats value properly', () => {
    assert.strictEqual(
      new OrgDirectoryProperty(
        [],
        new URIType('uuid:f81d4fae-7dec-11d0-a765-00a0c91e6bf6')
      ).repr(),
      "ORG-DIRECTORY:uuid:f81d4fae-7dec-11d0-a765-00a0c91e6bf6"
    );
  });
});
