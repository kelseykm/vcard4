import parse from '../src/esm/parse.js';
import { assert } from 'chai';

describe('ESM parse tests', () => {
  it('Accepts valid input', () => {
    assert.doesNotThrow(() => parse(
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
  });

  it('Rejects invalid input', () => {
    assert.throws(() => parse());
    assert.throws(() => parse('Hello world'));
    assert.throws(() => parse(
      'N:Doe;John;;;\r\n' +
      'FN:John Doe\r\n' +
      'ORG:Example.com Inc.;Marketing\r\n' +
      'TITLE:Imaginary test person\r\n' +
      'EMAIL;TYPE=work;PREF=1:johnDoe@example.org\r\n' +
      'TEL;TYPE=cell:tel:+1 781 555 1212\r\n'
    ));
  });
});
