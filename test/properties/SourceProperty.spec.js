import {
  URIType,
  IntegerType,
  LanguageTagType,
} from "../../src/values/index.js";
import {
  PrefParameter,
  LanguageParameter,
} from "../../src/parameters/index.js";
import { SourceProperty } from "../../src/properties/index.js";
import { assert } from "chai";

describe("SourceProperty tests", () => {
  it("Accepts valid input", () => {
    assert.doesNotThrow(
      () =>
        new SourceProperty(
          [],
          new URIType(
            "ldap://ldap.example.com/cn=Babs%20Jensen,%20o=Babsco,%20c=US"
          )
        )
    );

    assert.doesNotThrow(
      () =>
        new SourceProperty(
          [new PrefParameter(new IntegerType(1))],
          new URIType(
            "ldap://ldap.example.com/cn=Babs%20Jensen,%20o=Babsco,%20c=US"
          )
        )
    );
  });

  it("Rejects invalid input", () => {
    assert.throws(() => new SourceProperty());

    assert.throws(
      () =>
        new SourceProperty(
          [],
          new TextType(
            "ldap://ldap.example.com/cn=Babs%20Jensen,%20o=Babsco,%20c=US"
          )
        )
    );

    assert.throws(
      () =>
        new SourceProperty(
          [new LanguageParameter(new LanguageTagType("en-us"))],
          new URIType(
            "ldap://ldap.example.com/cn=Babs%20Jensen,%20o=Babsco,%20c=US"
          )
        )
    );
  });

  it("Formats value properly", () => {
    assert.strictEqual(
      new SourceProperty(
        [new PrefParameter(new IntegerType(1))],
        new URIType(
          "ldap://ldap.example.com/cn=Babs%20Jensen,%20o=Babsco,%20c=US"
        )
      ).repr(),
      "SOURCE;PREF=1:ldap://ldap.example.com/cn=Babs%20Jensen,%20o=Babsco,%20c=US"
    );
    assert.strictEqual(
      new SourceProperty(
        [new PrefParameter(new IntegerType(1))],
        new URIType(
          "ldap://ldap.example.com/cn=Babs%20Jensen,%20o=Babsco,%20c=US"
        )
      ).reprXML(),
      "<source><parameters><pref><integer>1</integer></pref></parameters><uri>ldap://ldap.example.com/cn=Babs%20Jensen,%20o=Babsco,%20c=US</uri></source>"
    );
    assert.deepEqual(
      new SourceProperty(
        [new PrefParameter(new IntegerType(1))],
        new URIType(
          "ldap://ldap.example.com/cn=Babs%20Jensen,%20o=Babsco,%20c=US"
        )
      ).reprJSON(),
      [
        "source",
        { pref: "1" },
        "uri",
        "ldap://ldap.example.com/cn=Babs%20Jensen,%20o=Babsco,%20c=US",
      ]
    );
  });
});
