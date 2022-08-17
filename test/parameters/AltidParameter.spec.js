import { TextType } from "../../src/values/index.js";
import { AltidParameter } from "../../src/parameters/index.js";
import { assert } from "chai";

describe("AltidParameter tests", () => {
  it("Accepts valid input", () => {
    assert.doesNotThrow(() => new AltidParameter(new TextType("1")));
  });

  it("Rejects invalid input", () => {
    assert.throws(() => new AltidParameter());
    assert.throws(() => new AltidParameter(1));
    assert.throws(() => new AltidParameter("1"));
    assert.throws(() => new AltidParameter(undefined));
    assert.throws(() => new AltidParameter([1, true, null]));
    assert.throws(() => new AltidParameter(false));
    assert.throws(() => new AltidParameter(null));
  });

  it("Formats value properly", () => {
    assert.strictEqual(
      new AltidParameter(new TextType("yah")).repr(),
      "ALTID=yah"
    );
    assert.strictEqual(
      new AltidParameter(new TextType("yah")).reprXML(),
      "<altid><text>yah</text></altid>"
    );
    assert.deepEqual(new AltidParameter(new TextType("yah")).reprJSON(), {
      altid: "yah",
    });
  });
});
