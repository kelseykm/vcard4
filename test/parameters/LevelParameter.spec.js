import { ParameterValueType } from "../../src/values/index.js";
import { LevelParameter } from "../../src/parameters/index.js";
import { assert } from "chai";

describe("LevelParameter tests", () => {
  it("Accepts valid input", () => {
    assert.doesNotThrow(
      () =>
        new LevelParameter(
          new ParameterValueType("beginner"),
          "expertiseproperty"
        )
    );

    assert.doesNotThrow(
      () =>
        new LevelParameter(new ParameterValueType("low"), "interestProperty")
    );
  });

  it("Rejects invalid input", () => {
    assert.throws(
      () =>
        new LevelParameter(new ParameterValueType("low"), "expertiseProperty")
    );
    assert.throws(() => new LevelParameter(new IntegerType(-2)));
    assert.throws(() => new LevelParameter(1));
    assert.throws(() => new LevelParameter({}));
  });

  it("Formats value properly", () => {
    assert.strictEqual(
      new LevelParameter(
        new ParameterValueType("beginner"),
        "expertiseproperty"
      ).repr(),
      "LEVEL=beginner"
    );
    assert.strictEqual(
      new LevelParameter(
        new ParameterValueType("beginner"),
        "expertiseproperty"
      ).reprXML(),
      "<level><text>beginner</text></level>"
    );
    assert.deepEqual(
      new LevelParameter(
        new ParameterValueType("beginner"),
        "expertiseproperty"
      ).reprJSON(),
      { level: "beginner" }
    );
  });
});
