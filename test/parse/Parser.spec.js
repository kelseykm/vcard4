import { Parser } from '../../src/parse/Parser.js';
import { Tokenizer } from '../../src/parse/Tokenizer.js';
import { assert } from 'chai';

describe('Parser tests', () => {
  it('Accepts valid input', () => {
    assert.doesNotThrow(() => new Parser(new Tokenizer(
      'BEGIN:VCARD\r\n' +
      'VErSiON:4.0\r\n' +
      'N:Doe;John;;;\r\n' +
      'FN:John Doe\r\n' +
      'ORG:Example.com Inc.;Marketing\r\n' +
      'TiTlE:Imaginary test person\r\n' +
      'EmAIL;TYPE=work;PREF=1:johnDoe@example.org\r\n' +
      'TEL;TYPE=cell:tel:+1 781 555 1212\r\n' +
      'tel;TYPE=home:tel:+1 202 555 1212\r\n' +
      'NOTE:John Doe has a long and varied history\\, being documented on more poli\r\n' +
      ' ce files than anyone else. Reports of his death are alas numerous.\r\n' +
      'CATEGORIES:Work,Test group\r\n' +
      'X-ABUID:5AD380FD-B2DE-4261-BA99-DE1D1DB52FBE\\:ABPerson\r\n' +
      'EnD:VCARD\r\n'
    ).tokens));

  });

  it('Rejects invalid input', () => {
    assert.throws(() => new Parser(new Tokenizer(
      'N:Doe;John;;;\r\n' +
      'FN:John Doe\r\n' +
      'ORG:Example.com Inc.;Marketing\r\n' +
      'TITLE:Imaginary test person\r\n' +
      'EMAIL;TYPE=work;PREF=1:johnDoe@example.org\r\n' +
      'TEL;TYPE=cell:tel:+1 781 555 1212\r\n'
    ).tokens));
    assert.throws(() => new Parser());
    assert.throws(() => new Parser('Hello world'));
    assert.throws(() => new Parser(new Tokenizer(
      'BEGIN:VCARD\r\n' +
      'VERSION:3.0\r\n' +
      'N:Doe;John;;;\r\n' +
      'FN:John Doe\r\n' +
      'ORG:Example.com Inc.;Marketing\r\n' +
      'TITLE:Imaginary test person\r\n' +
      'EMAIL;TYPE=work;PREF=1:johnDoe@example.org\r\n' +
      'TEL;TYPE=cell:tel:+1 781 555 1212\r\n' +
      'END:VCARD\r\n'
    ).tokens));
  });

  it('Parses vcards correctly', () => {
    const parsedVcard = new Parser(new Tokenizer(
      "BEGIN:VCARD\r\n" +
      "VERSION:4.0\r\n" +
      "FN:James Bond\r\n" +
      "END:VCARD\r\n"
    ).tokens);

    const parsedVcard2 = new Parser(new Tokenizer(
      'BEGIN:VCARD\r\n' +
      'VERSION:4.0\r\n' +
      'N:Doe;John;;;\r\n' +
      'FN:John Doe\r\n' +
      'ORG:Example.com Inc.;Marketing\r\n' +
      'story.TITLE:Imaginary test person\r\n' +
      'EMAIL;TYPE=work;PREF=1:johnDoe@example.org\r\n' +
      'TEL;TYPE=cell:tel:+1 781 555 1212\r\n' +
      'TEL;TYPE=home:tel:+1 202 555 1212\r\n' +
      'story.NOTE:John Doe has a long and varied history\\, being documented on more poli\r\n' +
      ' ce files than anyone else. Reports of his death are alas numerous.\r\n' +
      'CATEGORIES:Work,Test group\r\n' +
      'X-ABUID:5AD380FD-B2DE-4261-BA99-DE1D1DB52FBE\\:ABPerson\r\n' +
      'END:VCARD\r\n'
    ).tokens);

    assert.isObject(parsedVcard);
    assert.isArray(parsedVcard.parsed.parsedVcard);

    assert.hasAllKeys(parsedVcard.parsed, [
      "getGroup",
      "groups",
      "parsedVcard",
      "properties",
      "propertiesWithParameters",
      "propertiesWithoutParameters",
      "repeatingProperties"
    ]);

    assert.includeMembers(parsedVcard2.parsed.properties, [
      'N',
      'FN',
      'ORG',
      'TITLE',
      'EMAIL',
      'TEL',
      'NOTE',
      'CATEGORIES',
      'X-ABUID'
    ]);

    assert.deepEqual(parsedVcard2.parsed.propertiesWithoutParameters, [
      'N',
      'FN',
      'ORG',
      'TITLE',
      'NOTE',
      'CATEGORIES',
      'X-ABUID'
    ]);

    assert.deepEqual(parsedVcard2.parsed.propertiesWithParameters, [
      'EMAIL',
      'TEL',
    ]);

    assert.deepEqual(parsedVcard2.parsed.repeatingProperties, { TEL: 2 });

    assert.deepEqual(parsedVcard2.parsed.groups, ['story']);
    assert.deepEqual(parsedVcard2.parsed.getGroup('story'),
      [
        {
          group: 'story',
          property: 'TITLE',
          parameters: {},
          value: 'Imaginary test person'
        },
        {
          group: 'story',
          property: 'NOTE',
          parameters: {},
          value: 'John Doe has a long and varied history, being documented on more police files than anyone else. Reports of his death are alas numerous.'
        }
      ]
    );

  });
});
