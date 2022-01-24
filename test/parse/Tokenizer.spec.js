import { Tokenizer } from '../../src/parse/Tokenizer.js';
import { assert } from 'chai';

describe('Tokenizer tests', () => {
  it('Accepts valid input', () => {
    assert.doesNotThrow(() => new Tokenizer(
      'BEGIN:VCARD\r\n' +
      'VERSION:4.0\r\n' +
      'N:Doe;John;;;\r\n' +
      'FN:John Doe\r\n' +
      'ORG:Example.com Inc.;Marketing\r\n' +
      'TITLE:Imaginary test person\r\n' +
      'EMAIL;TYPE=work;PREF=1:johnDoe@example.org\r\n' +
      'TEL;TYPE=cell:tel:+1 781 555 1212\r\n' +
      'TEL;TYPE=home:tel:+1 202 555 1212\r\n' +
      'NOTE:John Doe has a long and varied history\\, being documented on more poli\r\n' +
      ' ce files than anyone else. Reports of his death are alas numerous.\r\n' +
      'CATEGORIES:Work,Test group\r\n' +
      'X-ABUID:5AD380FD-B2DE-4261-BA99-DE1D1DB52FBE\\:ABPerson\r\n' +
      'END:VCARD\r\n'
    ));

    assert.doesNotThrow(() => new Tokenizer(
      "BEGIN:VCARD\r\n" +
      "VERSION:4.0\r\n" +
      "FN:James Bond\r\n" +
      "END:VCARD\r\n" +
      "BEGIN:VCARD\r\n" +
      "VERSION:4.0\r\n" +
      "FN:Jane Bond\r\n" +
      "END:VCARD\r\n"
    ));

    assert.doesNotThrow(() => new Tokenizer(
      'N:Doe;John;;;\r\n' +
      'FN:John Doe\r\n' +
      'ORG:Example.com Inc.;Marketing\r\n' +
      'TITLE:Imaginary test person\r\n' +
      'EMAIL;TYPE=work;PREF=1:johnDoe@example.org\r\n' +
      'TEL;TYPE=cell:tel:+1 781 555 1212\r\n'
    ));
  });

  it('Rejects invalid input', () => {
    assert.throws(() => new Tokenizer());
    assert.throws(() => new Tokenizer('Hello world'));
    assert.throws(() => new Tokenizer(
      'BEGIN:VCARD\n' +
      'VERSION:4.0\n' +
      'N:Doe;John;;;\n' +
      'FN:John Doe\n' +
      'ORG:Example.com Inc.;Marketing\n' +
      'TITLE:Imaginary test person\n' +
      'EMAIL;TYPE=work;PREF=1:johnDoe@example.org\n' +
      'TEL;TYPE=cell:tel:+1 781 555 1212\n' +
      'END:VCARD\n'
    ));
  });

  it('Tokenizes vcards correctly', () => {
    new Tokenizer(
      "BEGIN:VCARD\r\n" +
      "VERSION:4.0\r\n" +
      "FN:James Bond\r\n" +
      "END:VCARD\r\n" +
      "BEGIN:VCARD\r\n" +
      "VERSION:4.0\r\n" +
      "FN:Jane Bond\r\n" +
      "END:VCARD\r\n"
    ).tokens.forEach(tokenizedVcard => assert.isArray(tokenizedVcard));

    new Tokenizer(
      "BEGIN:VCARD\r\n" +
      "VERSION:4.0\r\n" +
      "FN:James Bond\r\n" +
      "END:VCARD\r\n"
    ).tokens.forEach(token => assert.isObject(token));

    assert.hasAllKeys(new Tokenizer(
      "BEGIN:VCARD\r\n" +
      "VERSION:4.0\r\n" +
      "FN:James Bond\r\n" +
      "END:VCARD\r\n"
    ).tokens[0], ['group', 'property', 'parameters', 'value']);

    assert.strictEqual(new Tokenizer(
      "BEGIN:VCARD\r\n" +
      "VERSION:4.0\r\n" +
      "FN:James Bond\r\n" +
      "END:VCARD\r\n"
    ).numberOfVcards, 1);
  });
});
