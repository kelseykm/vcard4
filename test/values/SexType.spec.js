import { SexType } from "../../src/values/index.js";
import { assert } from "chai";

describe("SexType tests", () => {
  it("Accepts valid input", () => {
    assert.doesNotThrow(() => new SexType("M"));
    assert.doesNotThrow(() => new SexType("N"));
    assert.doesNotThrow(() => new SexType("F"));
  });

  it("Rejects invalid input", () => {
    assert.throws(() => new SexType());
    assert.throws(() => new SexType("m"));
    assert.throws(() => new SexType(""));
    assert.throws(() => new SexType({}));
  });

  it("Formats value properly", () => {
    assert.strictEqual(new SexType("F").repr(), "F");
    assert.strictEqual(new SexType("F").reprXML(), "<sex>F</sex>");
    assert.deepEqual(new SexType("F").reprJSON(), ["text", "F"]);
  });
});
