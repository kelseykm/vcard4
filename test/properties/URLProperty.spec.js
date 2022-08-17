import { URIType, IntegerType } from "../../src/values/index.js";
import { URLProperty } from "../../src/properties/index.js";
import { assert } from "chai";

describe("URLProperty tests", () => {
  it("Accepts valid input", () => {
    assert.doesNotThrow(
      () =>
        new URLProperty(
          [],
          new URIType("http://example.org/restaurant.french/chezchic.html")
        )
    );
  });

  it("Rejects invalid input", () => {
    assert.throws(
      () => new URLProperty([new IntegerType(55)], new IntegerType(55))
    );
    assert.throws(() => new URLProperty());
    assert.throws(() => new URLProperty(1));
    assert.throws(() => new URLProperty({}));
    assert.throws(() => new URLProperty("James Bond"));
  });

  it("Formats value properly", () => {
    assert.strictEqual(
      new URLProperty(
        [],
        new URIType("http://example.org/restaurant.french/chezchic.html")
      ).repr(),
      "URL:http://example.org/restaurant.french/chezchic.html"
    );
    assert.strictEqual(
      new URLProperty(
        [],
        new URIType("http://example.org/restaurant.french/chezchic.html")
      ).reprXML(),
      "<url><uri>http://example.org/restaurant.french/chezchic.html</uri></url>"
    );
    assert.deepEqual(
      new URLProperty(
        [],
        new URIType("http://example.org/restaurant.french/chezchic.html")
      ).reprJSON(),
      ["url", {}, "uri", "http://example.org/restaurant.french/chezchic.html"]
    );
  });
});
