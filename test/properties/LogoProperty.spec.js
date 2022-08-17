import { URIType, IntegerType } from "../../src/values/index.js";
import { LogoProperty } from "../../src/properties/index.js";
import { assert } from "chai";

describe("LogoProperty tests", () => {
  it("Accepts valid input", () => {
    assert.doesNotThrow(
      () =>
        new LogoProperty(
          [],
          new URIType("http://www.example.com/pub/logos/abccorp.jpg")
        )
    );
  });

  it("Rejects invalid input", () => {
    assert.throws(
      () => new LogoProperty([new IntegerType(55)], new IntegerType(55))
    );
    assert.throws(() => new LogoProperty());
    assert.throws(() => new LogoProperty(1));
    assert.throws(() => new LogoProperty({}));
    assert.throws(() => new LogoProperty("James Bond"));
  });

  it("Formats value properly", () => {
    assert.strictEqual(
      new LogoProperty(
        [],
        new URIType("http://www.example.com/pub/logos/abccorp.jpg")
      ).repr(),
      "LOGO:http://www.example.com/pub/logos/abccorp.jpg"
    );
    assert.strictEqual(
      new LogoProperty(
        [],
        new URIType("http://www.example.com/pub/logos/abccorp.jpg")
      ).reprXML(),
      "<logo><uri>http://www.example.com/pub/logos/abccorp.jpg</uri></logo>"
    );
    assert.deepEqual(
      new LogoProperty(
        [],
        new URIType("http://www.example.com/pub/logos/abccorp.jpg")
      ).reprJSON(),
      ["logo", {}, "uri", "http://www.example.com/pub/logos/abccorp.jpg"]
    );
  });
});
