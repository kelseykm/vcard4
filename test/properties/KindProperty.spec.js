import {
  SpecialValueType,
  IntegerType,
  TextType,
} from "../../src/values/index.js";
import { ValueParameter, PrefParameter } from "../../src/parameters/index.js";
import { KindProperty } from "../../src/properties/index.js";
import { assert } from "chai";

describe("KindProperty tests", () => {
  it("Accepts valid input", () => {
    assert.doesNotThrow(
      () =>
        new KindProperty([], new SpecialValueType("kindproperty", "individual"))
    );

    assert.doesNotThrow(
      () =>
        new KindProperty(
          [
            new ValueParameter(
              new SpecialValueType("kindproperty", "individual")
            ),
          ],
          new SpecialValueType("kindproperty", "individual")
        )
    );
  });

  it("Rejects invalid input", () => {
    assert.throws(() => new KindProperty());

    assert.throws(
      () =>
        new KindProperty(
          [new PrefParameter(new IntegerType(1))],
          new SpecialValueType("kindproperty", "individual")
        )
    );

    assert.throws(() => new KindProperty([], new TextType("individual")));
  });

  it("Formats value properly", () => {
    assert.strictEqual(
      new KindProperty(
        [
          new ValueParameter(
            new SpecialValueType("kindproperty", "individual")
          ),
        ],
        new SpecialValueType("kindproperty", "individual")
      ).repr(),
      "KIND;VALUE=text:individual"
    );
    assert.strictEqual(
      new KindProperty(
        [
          new ValueParameter(
            new SpecialValueType("kindproperty", "individual")
          ),
        ],
        new SpecialValueType("kindproperty", "individual")
      ).reprXML(),
      "<kind><text>individual</text></kind>"
    );
    assert.deepEqual(
      new KindProperty(
        [
          new ValueParameter(
            new SpecialValueType("kindproperty", "individual")
          ),
        ],
        new SpecialValueType("kindproperty", "individual")
      ).reprJSON(),
      ["kind", {}, "text", "individual"]
    );
  });
});
