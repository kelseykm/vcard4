import { TextType, URIType, IntegerType } from "../../src/values/index.js";
import { MediatypeParameter } from "../../src/parameters/index.js";
import { KeyProperty } from "../../src/properties/index.js";
import { assert } from "chai";

describe("KeyProperty tests", () => {
  it("Accepts valid input", () => {
    assert.doesNotThrow(
      () =>
        new KeyProperty(
          [new MediatypeParameter(new TextType("application/pgp-keys"))],
          new URIType("ftp://example.com/keys/jdoe")
        )
    );
  });

  it("Rejects invalid input", () => {
    assert.throws(
      () => new KeyProperty([new IntegerType(55)], new IntegerType(55))
    );
    assert.throws(() => new KeyProperty());
    assert.throws(() => new KeyProperty(1));
    assert.throws(() => new KeyProperty({}));
    assert.throws(() => new KeyProperty("James Bond"));
  });

  it("Formats value properly", () => {
    assert.strictEqual(
      new KeyProperty(
        [new MediatypeParameter(new TextType("application/pgp-keys"))],
        new URIType("ftp://example.com/keys/jdoe")
      ).repr(),
      "KEY;MEDIATYPE=application/pgp-keys:ftp://example.com/keys/jdoe"
    );
    assert.strictEqual(
      new KeyProperty(
        [new MediatypeParameter(new TextType("application/pgp-keys"))],
        new URIType("ftp://example.com/keys/jdoe")
      ).reprXML(),
      "<key><parameters><mediatype><text>application/pgp-keys</text></mediatype></parameters><uri>ftp://example.com/keys/jdoe</uri></key>"
    );
    assert.deepEqual(
      new KeyProperty(
        [new MediatypeParameter(new TextType("application/pgp-keys"))],
        new URIType("ftp://example.com/keys/jdoe")
      ).reprJSON(),
      [
        "key",
        { mediatype: "application/pgp-keys" },
        "uri",
        "ftp://example.com/keys/jdoe",
      ]
    );
  });
});
