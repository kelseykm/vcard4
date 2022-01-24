import { IntegerType, URIType } from '../../src/values/index.js';
import { PrefParameter } from '../../src/parameters/index.js';
import { ContactURIProperty } from '../../src/properties/index.js';
import { assert } from 'chai';

describe('ContactURIProperty tests', () => {
  it('Accepts valid input', () => {
    assert.doesNotThrow(() => new ContactURIProperty(
      [
        new PrefParameter(
          new IntegerType(1)
        )
      ],
      new URIType('mailto:contact@example.com')
    ));
  });

  it('Rejects invalid input', () => {
    assert.throws(() => new ContactURIProperty(
      [],
      new IntegerType(55)
    ));
    assert.throws(() => new ContactURIProperty(
      [],
      new URIType('ftp://contact.example.com')
    ));
    assert.throws(() => new ContactURIProperty);
    assert.throws(() => new ContactURIProperty(1));
    assert.throws(() => new ContactURIProperty({}));
    assert.throws(() => new ContactURIProperty('James Bond'));
  });

  it('Formats value properly', () => {
    assert.strictEqual(
      new ContactURIProperty(
        [
          new PrefParameter(
            new IntegerType(1)
          )
        ],
        new URIType('mailto:contact@example.com')
      ).repr(),
      "CONTACT-URI;PREF=1:mailto:contact@example.com"
    );
    assert.strictEqual(
      new ContactURIProperty(
        [
          new PrefParameter(
            new IntegerType(1)
          )
        ],
        new URIType('mailto:contact@example.com')
      ).reprXML(),
      "<contact-uri><parameters><pref><integer>1</integer></pref></parameters><uri>mailto:contact@example.com</uri></contact-uri>"
    );
    assert.deepEqual(
      new ContactURIProperty(
        [
          new PrefParameter(
            new IntegerType(1)
          )
        ],
        new URIType('mailto:contact@example.com')
      ).reprJSON(),
      ["contact-uri", {pref:"1"}, "uri","mailto:contact@example.com"]
    );
  });
});
