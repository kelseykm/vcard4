import { URIType, IntegerType } from '../../src/values/index.js';
import { MemberProperty } from '../../src/properties/index.js';
import { assert } from 'chai';

describe('MemberProperty tests', () => {
  it('Accepts valid input', () => {
    assert.doesNotThrow(() => new MemberProperty(
      [],
      new URIType('urn:uuid:03a0e51f-d1aa-4385-8a53-e29025acd8af')
    ));
  });

  it('Rejects invalid input', () => {
    assert.throws(() => new MemberProperty(
      [
        new IntegerType(55)
      ],
      new IntegerType(55)
    ));
    assert.throws(() => new MemberProperty);
    assert.throws(() => new MemberProperty(1));
    assert.throws(() => new MemberProperty({}));
    assert.throws(() => new MemberProperty('James Bond'));
  });

  it('Formats value properly', () => {
    assert.strictEqual(
      new MemberProperty(
        [],
        new URIType('urn:uuid:03a0e51f-d1aa-4385-8a53-e29025acd8af')
      ).repr(),
      "MEMBER:urn:uuid:03a0e51f-d1aa-4385-8a53-e29025acd8af"
    );
    assert.strictEqual(
      new MemberProperty(
        [],
        new URIType('urn:uuid:03a0e51f-d1aa-4385-8a53-e29025acd8af')
      ).reprXML(),
      "<member><uri>urn:uuid:03a0e51f-d1aa-4385-8a53-e29025acd8af</uri></member>"
    );
    assert.deepEqual(
      new MemberProperty(
        [],
        new URIType('urn:uuid:03a0e51f-d1aa-4385-8a53-e29025acd8af')
      ).reprJSON(),
      ["member", {}, "uri", "urn:uuid:03a0e51f-d1aa-4385-8a53-e29025acd8af"]
    );
  });
});
