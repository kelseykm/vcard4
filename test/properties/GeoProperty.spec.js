import { URIType, IntegerType } from "../../src/values/index.js";
import { LabelParameter } from "../../src/parameters/index.js";
import { GeoProperty } from "../../src/properties/index.js";
import { assert } from "chai";

describe("GeoProperty tests", () => {
  it("Accepts valid input", () => {
    assert.doesNotThrow(
      () => new GeoProperty([], new URIType("geo:37.386013,-122.082932"))
    );
  });

  it("Rejects invalid input", () => {
    assert.throws(() => new GeoProperty([], new IntegerType(55)));
    assert.throws(
      () =>
        new GeoProperty(
          [new LabelParameter("Hello world")],
          new URIType("geo:37.386013,-122.082932")
        )
    );
    assert.throws(() => new GeoProperty());
    assert.throws(() => new GeoProperty(1));
    assert.throws(() => new GeoProperty({}));
    assert.throws(() => new GeoProperty("James Bond"));
  });

  it("Formats value properly", () => {
    assert.strictEqual(
      new GeoProperty([], new URIType("geo:37.386013,-122.082932")).repr(),
      "GEO:geo:37.386013,-122.082932"
    );
    assert.strictEqual(
      new GeoProperty([], new URIType("geo:37.386013,-122.082932")).reprXML(),
      "<geo><uri>geo:37.386013,-122.082932</uri></geo>"
    );
    assert.deepEqual(
      new GeoProperty([], new URIType("geo:37.386013,-122.082932")).reprJSON(),
      ["geo", {}, "uri", "geo:37.386013,-122.082932"]
    );
  });
});
