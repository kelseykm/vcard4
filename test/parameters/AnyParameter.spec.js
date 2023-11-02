import { ParameterValueType } from "../../src/values/index.js";
import { AnyParameter } from "../../src/parameters/index.js";
import { assert } from "chai";

describe("AnyParameter tests", () => {
  it("Accepts valid input", () => {
    assert.doesNotThrow(
      () => new AnyParameter("X-CAR", new ParameterValueType("Volvo"))
    );
    assert.doesNotThrow(
      () => new AnyParameter("x-network-TDOA", new ParameterValueType("strong"))
    );
  });

  it("Rejects invalid input", () => {
    assert.throws(() => new AnyParameter());
    assert.throws(() => new AnyParameter("x-letter", "a"));
    assert.throws(() => new AnyParameter(1));
    assert.throws(() => new AnyParameter({}));
    assert.throws(() => new AnyParameter("A-GNSS"));
  });

  it("Formats value properly", () => {
    assert.strictEqual(
      new AnyParameter("X-CAR", new ParameterValueType("Volvo")).repr(),
      "X-CAR=Volvo"
    );
    assert.strictEqual(
      new AnyParameter("X-CAR", new ParameterValueType("Volvo")).reprXML(),
      "<x-car><text>Volvo</text></x-car>"
    );
    assert.deepEqual(
      new AnyParameter("X-CAR", new ParameterValueType("Volvo")).reprJSON(),
      { "x-car": "Volvo" }
    );
  });
});
