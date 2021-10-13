const {
  TextType,
  URIType
} = require('../src/cjs/values.js');

const {
  FNProperty,
  MemberProperty,
  NoteProperty
} = require('../src/cjs/properties.js');

const VCARD = require('../src/cjs/card.js');

const { assert } = require('chai');

describe('CJS VCARD tests', () => {
  it('Accepts valid input', () => {
    assert.doesNotThrow(() => new VCARD([
      new FNProperty(
        [],
        new TextType('James Bond')
      )
    ]));
  });

  it('Rejects invalid input', () => {
    assert.throws(() => new VCARD([
      new NoteProperty(
        [],
        new TextType('James Bond')
      )
    ]));
    assert.throws(() => new VCARD([
      new FNProperty(
        [],
        new TextType('James Bond')
      ),
      new MemberProperty(
        [],
        new URIType('uuid:blah-blah-blah')
      )
    ]));
    assert.throws(() => new VCARD);
    assert.throws(() => new VCARD({}));
    assert.throws(() => new VCARD(1));
    assert.throws(() => new VCARD('Hi'));
  });
  it('Formats value properly', () => {
    assert.strictEqual(
      new VCARD([
        new FNProperty(
          [],
          new TextType('James Bond')
        )
      ]).repr(),
      "BEGIN:VCARD\r\n" +
      "VERSION:4.0\r\n" +
      "FN:James Bond\r\n" +
      "END:VCARD\r\n"
    );
  });
});
