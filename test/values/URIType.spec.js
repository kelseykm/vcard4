import { URIType } from "../../src/values/index.js";
import { assert } from "chai";

describe("URIType tests", () => {
  it("Accepts valid input", () => {
    assert.doesNotThrow(() => new URIType("http://www.example.com"));
    assert.doesNotThrow(() => new URIType("file:///home/user"));
    assert.doesNotThrow(() => new URIType("tel:+1234567"));
  });

  it("Rejects invalid input", () => {
    assert.throws(() => new URIType());
    assert.throws(() => new URIType("www.example.com"));
    assert.throws(() => new URIType(3));
    assert.throws(() => new URIType({}));
  });

  it("Formats value properly", () => {
    assert.strictEqual(
      new URIType("http://www.example.com").repr(),
      "http://www.example.com"
    );
    assert.strictEqual(
      new URIType("http://www.example.com").reprXML(),
      "<uri>http://www.example.com</uri>"
    );
    assert.deepEqual(new URIType("http://www.example.com").reprJSON(), [
      "uri",
      "http://www.example.com",
    ]);
  });
});
