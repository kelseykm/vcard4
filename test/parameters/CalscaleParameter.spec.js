import { ParameterValueType } from "../../src/values/index.js";
import { CalscaleParameter } from "../../src/parameters/index.js";
import { assert } from "chai";

describe("CalscaleParameter tests", () => {
  it("Accepts valid input", () => {
    assert.doesNotThrow(
      () => new CalscaleParameter(new ParameterValueType("gregorian"))
    );
    assert.doesNotThrow(
      () => new CalscaleParameter(new ParameterValueType("x-arabian"))
    );
  });

  it("Rejects invalid input", () => {
    assert.throws(() => new CalscaleParameter(1));
    assert.throws(() => new CalscaleParameter());
    assert.throws(() => new CalscaleParameter("en-us"));
    assert.throws(() => new CalscaleParameter({}));
  });

  it("Formats value properly", () => {
    assert.strictEqual(
      new CalscaleParameter(new ParameterValueType("gregorian")).repr(),
      "CALSCALE=gregorian"
    );
    assert.strictEqual(
      new CalscaleParameter(new ParameterValueType("gregorian")).reprXML(),
      "<calscale><text>gregorian</text></calscale>"
    );
    assert.deepEqual(
      new CalscaleParameter(new ParameterValueType("gregorian")).reprJSON(),
      { calscale: "gregorian" }
    );
  });
});
