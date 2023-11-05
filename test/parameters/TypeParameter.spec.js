import { ParameterValueType } from "../../src/values/index.js";
import { TypeParameter } from "../../src/parameters/index.js";
import { assert } from "chai";

describe("TypeParameter tests", () => {
  it("Accepts valid input", () => {
    assert.doesNotThrow(
      () => new TypeParameter("emailproperty", new ParameterValueType("work"))
    );

    assert.doesNotThrow(
      () =>
        new TypeParameter("telproperty", [
          new ParameterValueType("voice"),
          new ParameterValueType("home"),
        ])
    );

    assert.doesNotThrow(
      () =>
        new TypeParameter(
          "relatedproperty",
          new ParameterValueType("sweetheart")
        )
    );
  });

  it("Rejects invalid input", () => {
    assert.throws(() => new TypeParameter());
    assert.throws(() => new TypeParameter(1));
    assert.throws(() => new TypeParameter("1"));
    assert.throws(() => new TypeParameter("relatedproperty", "sweetheart"));
    assert.throws(
      () =>
        new TypeParameter("soundproperty", new ParameterValueType("sweetheart"))
    );
    assert.throws(() => new TypeParameter([1, true, null]));
    assert.throws(() => new TypeParameter(false));
    assert.throws(() => new TypeParameter(null));
  });

  it("Formats value properly", () => {
    assert.strictEqual(
      new TypeParameter("telproperty", [
        new ParameterValueType("voice"),
        new ParameterValueType("home"),
      ]).repr(),
      'TYPE="voice,home"'
    );
    assert.strictEqual(
      new TypeParameter("telproperty", [
        new ParameterValueType("voice"),
        new ParameterValueType("home"),
      ]).reprXML(),
      "<type><text>voice</text><text>home</text></type>"
    );
    assert.deepEqual(
      new TypeParameter("telproperty", [
        new ParameterValueType("voice"),
        new ParameterValueType("home"),
      ]).reprJSON(),
      { type: ["voice", "home"] }
    );
  });
});
