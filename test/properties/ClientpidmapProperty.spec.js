import { URIType, IntegerType, SpecialValueType } from '../../src/values/index.js';
import { ClientpidmapProperty } from '../../src/properties/index.js';
import { assert } from 'chai';

describe('ClientpidmapProperty tests', () => {
  it('Accepts valid input', () => {
    assert.doesNotThrow(() => new ClientpidmapProperty(
      [],
      new SpecialValueType(
        [
          new IntegerType(1),
          new URIType('urn:uuid:3df403f4-5924-4bb7-b077-3c711d9eb34b')
        ],
        'clientpidmapproperty'
      )
    ));
  });

  it('Rejects invalid input', () => {
    assert.throws(() => new ClientpidmapProperty(
      [
        new IntegerType(55)
      ],
      new IntegerType(55)
    ));
    assert.throws(() => new ClientpidmapProperty);
    assert.throws(() => new ClientpidmapProperty(1));
    assert.throws(() => new ClientpidmapProperty({}));
    assert.throws(() => new ClientpidmapProperty('James Bond'));
  });

  it('Formats value properly', () => {
    assert.strictEqual(
      new ClientpidmapProperty(
        [],
        new SpecialValueType(
          [
            new IntegerType(1),
            new URIType('urn:uuid:3df403f4-5924-4bb7-b077-3c711d9eb34b')
          ],
          'clientpidmapproperty'
        )
      ).repr(),
      "CLIENTPIDMAP:1;urn:uuid:3df403f4-5924-4bb7-b077-3c711d9eb34b"
    );
  });
});
