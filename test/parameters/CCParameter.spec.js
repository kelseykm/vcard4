import { TextType } from "../../src/values/index.js";
import { CCParameter } from "../../src/parameters/index.js";
import { assert } from "chai";

describe("CCParameter tests", () => {
  it("Accepts valid input", () => {
    assert.doesNotThrow(() => new CCParameter(new TextType("US")));
  });

  it("Rejects invalid input", () => {
    assert.throws(() => new CCParameter(new TextType("USA")));
    assert.throws(() => new CCParameter(1));
    assert.throws(() => new CCParameter({}));
  });

  it("Formats value properly", () => {
    assert.strictEqual(new CCParameter(new TextType("US")).repr(), "CC=US");
    assert.strictEqual(
      new CCParameter(new TextType("US")).reprXML(),
      "<cc><text>US</text></cc>"
    );
    assert.deepEqual(new CCParameter(new TextType("US")).reprJSON(), {
      cc: "US",
    });
  });
});
