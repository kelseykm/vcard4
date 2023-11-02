import { ParameterValueType } from "../../src/values/index.js";
import { TypeParameter } from "../../src/parameters/index.js";
import { assert } from "chai";

describe("TypeParameter tests", () => {
  it("Accepts valid input", () => {
    assert.doesNotThrow(
      () => new TypeParameter(new ParameterValueType("work"), "emailproperty")
    );

    assert.doesNotThrow(
      () =>
        new TypeParameter(
          [new ParameterValueType("voice"), new ParameterValueType("home")],
          "telproperty"
        )
    );

    assert.doesNotThrow(
      () =>
        new TypeParameter(
          new ParameterValueType("sweetheart"),
          "relatedproperty"
        )
    );
  });

  it("Rejects invalid input", () => {
    assert.throws(() => new TypeParameter());
    assert.throws(() => new TypeParameter(1));
    assert.throws(() => new TypeParameter("1"));
    assert.throws(() => new TypeParameter("sweetheart", "relatedproperty"));
    assert.throws(
      () =>
        new TypeParameter(new ParameterValueType("sweetheart"), "soundproperty")
    );
    assert.throws(() => new TypeParameter([1, true, null]));
    assert.throws(() => new TypeParameter(false));
    assert.throws(() => new TypeParameter(null));
  });

  it("Formats value properly", () => {
    assert.strictEqual(
      new TypeParameter(
        [new ParameterValueType("voice"), new ParameterValueType("home")],
        "telproperty"
      ).repr(),
      'TYPE="voice,home"'
    );
    assert.strictEqual(
      new TypeParameter(
        [new ParameterValueType("voice"), new ParameterValueType("home")],
        "telproperty"
      ).reprXML(),
      "<type><text>voice</text><text>home</text></type>"
    );
    assert.deepEqual(
      new TypeParameter(
        [new ParameterValueType("voice"), new ParameterValueType("home")],
        "telproperty"
      ).reprJSON(),
      { type: ["voice", "home"] }
    );
  });
});
