import { ParameterValueType, IntegerType } from "../../src/values/index.js";
import { PrefParameter } from "../../src/parameters/index.js";
import { assert } from "chai";

describe("PrefParameter tests", () => {
  it("Accepts valid input", () => {
    assert.doesNotThrow(() => new PrefParameter(new IntegerType(1)));
  });

  it("Rejects invalid input", () => {
    assert.throws(() => new PrefParameter(1));
    assert.throws(() => new PrefParameter());
    assert.throws(() => new PrefParameter(new ParameterValueType("en-us")));
    assert.throws(() => new PrefParameter({}));
  });

  it("Formats value properly", () => {
    assert.strictEqual(new PrefParameter(new IntegerType(1)).repr(), "PREF=1");
    assert.strictEqual(
      new PrefParameter(new IntegerType(1)).reprXML(),
      "<pref><integer>1</integer></pref>"
    );
    assert.deepEqual(new PrefParameter(new IntegerType(1)).reprJSON(), {
      pref: "1",
    });
  });
});
