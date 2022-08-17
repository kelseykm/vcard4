import { IntegerType, TextType } from "../../src/values/index.js";
import { ExtendedProperty } from "../../src/properties/index.js";
import { assert } from "chai";

describe("ExtendedProperty tests", () => {
  it("Accepts valid input", () => {
    assert.doesNotThrow(
      () => new ExtendedProperty("X-CAR", [], new TextType("Volvo"))
    );
  });

  it("Rejects invalid input", () => {
    assert.throws(
      () => new ExtendedProperty([new IntegerType(55)], new IntegerType(55))
    );
    assert.throws(() => new ExtendedProperty());
    assert.throws(() => new ExtendedProperty(1));
    assert.throws(() => new ExtendedProperty({}));
    assert.throws(() => new ExtendedProperty("James Bond"));
  });

  it("Formats value properly", () => {
    assert.strictEqual(
      new ExtendedProperty("X-CAR", [], new TextType("Volvo")).repr(),
      "X-CAR:Volvo"
    );
    assert.strictEqual(
      new ExtendedProperty("X-CAR", [], new TextType("Volvo")).reprXML(),
      "<x-car><text>Volvo</text></x-car>"
    );
    assert.deepEqual(
      new ExtendedProperty("X-CAR", [], new TextType("Volvo")).reprJSON(),
      ["x-car", {}, "text", "Volvo"]
    );
  });
});
