import {
  TextType,
  URIType
} from '../src/values/index.js';
import {
  FNProperty,
  MemberProperty,
  NoteProperty
} from '../src/properties/index.js';
import { VCARD } from '../src/card.js';
import { assert } from 'chai';

describe('VCARD tests', () => {
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
    assert.strictEqual(
      new VCARD([
        new FNProperty(
          [],
          new TextType('James Bond')
        )
      ]).reprXML(),
      `<?xml version="1.0" encoding="UTF-8"?><vcards xmlns="urn:ietf:params:xml:ns:vcard-4.0"><vcard><fn><text>James Bond</text></fn></vcard></vcards>`
    );
    assert.deepEqual(
      new VCARD([
        new FNProperty(
          [],
          new TextType('James Bond')
        )
      ]).reprJSON(),
      ["vcard", [
        ["fn", {}, "text", "James Bond"]
      ]]
    );
  });
});
