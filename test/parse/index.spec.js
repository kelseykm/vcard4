import { parse } from "../../src/parse/index.js";
import { assert } from "chai";

describe("parse tests", () => {
  it("Accepts valid input", () => {
    assert.doesNotThrow(() =>
      parse(
        "BEGIN:VCARD\r\n" +
          "VERSION:4.0\r\n" +
          "N:Doe;John;;;\r\n" +
          "FN:John Doe\r\n" +
          "ORG:Example.com Inc.;Marketing\r\n" +
          "TITLE:Imaginary test person\r\n" +
          "EMAIL;TYPE=work;PREF=1:johnDoe@example.org\r\n" +
          "TEL;TYPE=cell:tel:+1 781 555 1212\r\n" +
          "TEL;TYPE=home:tel:+1 202 555 1212\r\n" +
          "NOTE:John Doe has a long and varied history\\, being documented on more poli\r\n" +
          " ce files than anyone else. Reports of his death are alas numerous.\r\n" +
          "CATEGORIES:Work,Test group\r\n" +
          "X-ABUID:5AD380FD-B2DE-4261-BA99-DE1D1DB52FBE\\:ABPerson\r\n" +
          "END:VCARD\r\n"
      )
    );

    assert.doesNotThrow(() =>
      parse(
        "BEGIN:VCARD\r\n" +
          "VERSION:4.0\r\n" +
          "FN:James Bond\r\n" +
          "END:VCARD\r\n" +
          "BEGIN:VCARD\r\n" +
          "VERSION:4.0\r\n" +
          "FN:Jane Bond\r\n" +
          "END:VCARD\r\n"
      )
    );
  });

  it("Rejects invalid input", () => {
    assert.throws(() => parse());
    assert.throws(() => parse("Hello world"));
    assert.throws(() =>
      parse(
        "BEGIN:VCARD\n" +
          "VERSION:4.0\n" +
          "N:Doe;John;;;\n" +
          "FN:John Doe\n" +
          "ORG:Example.com Inc.;Marketing\n" +
          "TITLE:Imaginary test person\n" +
          "EMAIL;TYPE=work;PREF=1:johnDoe@example.org\n" +
          "TEL;TYPE=cell:tel:+1 781 555 1212\n" +
          "END:VCARD\n"
      )
    );
    assert.throws(() =>
      parse(
        "N:Doe;John;;;\r\n" +
          "FN:John Doe\r\n" +
          "ORG:Example.com Inc.;Marketing\r\n" +
          "TITLE:Imaginary test person\r\n" +
          "EMAIL;TYPE=work;PREF=1:johnDoe@example.org\r\n" +
          "TEL;TYPE=cell:tel:+1 781 555 1212\r\n"
      )
    );
  });

  it("Parses vcards correctly", () => {
    assert.isArray(
      parse(
        "BEGIN:VCARD\r\n" +
          "VERSION:4.0\r\n" +
          "FN:James Bond\r\n" +
          "END:VCARD\r\n" +
          "BEGIN:VCARD\r\n" +
          "VERSION:4.0\r\n" +
          "FN:Jane Bond\r\n" +
          "END:VCARD\r\n"
      )
    );

    assert.isObject(
      parse(
        "BEGIN:VCARD\r\n" +
          "VERSION:4.0\r\n" +
          "FN:Jane Bond\r\n" +
          "END:VCARD\r\n"
      )
    );

    assert.strictEqual(
      parse(
        "BEGIN:VCARD\r\n" +
          "VERSION:4.0\r\n" +
          "FN:James Bond\r\n" +
          "END:VCARD\r\n" +
          "BEGIN:VCARD\r\n" +
          "VERSION:4.0\r\n" +
          "FN:Michael Bond\r\n" +
          "END:VCARD\r\n" +
          "BEGIN:VCARD\r\n" +
          "VERSION:4.0\r\n" +
          "FN:Jane Bond\r\n" +
          "END:VCARD\r\n"
      ).length,
      3
    );
  });
});
