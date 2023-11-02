import { ParameterValueType } from "../../src/values/index.js";
import { CCParameter } from "../../src/parameters/index.js";
import { assert } from "chai";

describe("CCParameter tests", () => {
  it("Accepts valid input", () => {
    assert.doesNotThrow(() => new CCParameter(new ParameterValueType("US")));
  });

  it("Rejects invalid input", () => {
    assert.throws(() => new CCParameter(new ParameterValueType("USA")));
    assert.throws(() => new CCParameter(1));
    assert.throws(() => new CCParameter({}));
  });

  it("Formats value properly", () => {
    assert.strictEqual(
      new CCParameter(new ParameterValueType("US")).repr(),
      "CC=US"
    );
    assert.strictEqual(
      new CCParameter(new ParameterValueType("US")).reprXML(),
      "<cc><text>US</text></cc>"
    );
    assert.deepEqual(new CCParameter(new ParameterValueType("US")).reprJSON(), {
      cc: "US",
    });
  });
});
