import { ParameterValueType } from "../../src/values/index.js";
import { LevelParameter } from "../../src/parameters/index.js";
import { assert } from "chai";

describe("LevelParameter tests", () => {
  it("Accepts valid input", () => {
    assert.doesNotThrow(
      () =>
        new LevelParameter(
          "expertiseproperty",
          new ParameterValueType("beginner")
        )
    );

    assert.doesNotThrow(
      () =>
        new LevelParameter("interestProperty", new ParameterValueType("low"))
    );
  });

  it("Rejects invalid input", () => {
    assert.throws(
      () =>
        new LevelParameter("expertiseProperty", new ParameterValueType("low"))
    );
    assert.throws(() => new LevelParameter(new IntegerType(-2)));
    assert.throws(() => new LevelParameter(1));
    assert.throws(() => new LevelParameter({}));
  });

  it("Formats value properly", () => {
    assert.strictEqual(
      new LevelParameter(
        "expertiseproperty",
        new ParameterValueType("beginner")
      ).repr(),
      "LEVEL=beginner"
    );
    assert.strictEqual(
      new LevelParameter(
        "expertiseproperty",
        new ParameterValueType("beginner")
      ).reprXML(),
      "<level><text>beginner</text></level>"
    );
    assert.deepEqual(
      new LevelParameter(
        "expertiseproperty",
        new ParameterValueType("beginner")
      ).reprJSON(),
      { level: "beginner" }
    );
  });
});
