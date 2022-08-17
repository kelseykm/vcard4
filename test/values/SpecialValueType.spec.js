import {
  SpecialValueType,
  IntegerType,
  URIType,
} from "../../src/values/index.js";
import { assert } from "chai";

describe("SpecialValueType tests", () => {
  it("Accepts valid input", () => {
    assert.doesNotThrow(() => new SpecialValueType("group", "kindproperty"));
    assert.doesNotThrow(
      () =>
        new SpecialValueType(
          [new IntegerType(1), new URIType("uuid:123-asmm-aams")],
          "clientpidmapProperty"
        )
    );
  });

  it("Rejects invalid input", () => {
    assert.throws(() => new SpecialValueType());
    assert.throws(() => new SpecialValueType("something", "FNProperty"));
    assert.throws(() => new SpecialValueType({}));
  });

  it("Formats value properly", () => {
    assert.strictEqual(
      new SpecialValueType(
        [new IntegerType(1), new URIType("uuid:123-asmm-aams")],
        "clientpidmapProperty"
      ).repr(),
      "1;uuid:123-asmm-aams"
    );
    assert.strictEqual(
      new SpecialValueType(
        [new IntegerType(1), new URIType("uuid:123-asmm-aams")],
        "clientpidmapProperty"
      ).reprXML(),
      "<integer>1</integer><uri>uuid:123-asmm-aams</uri>"
    );
    assert.deepEqual(
      new SpecialValueType(
        [new IntegerType(1), new URIType("uuid:123-asmm-aams")],
        "clientpidmapProperty"
      ).reprJSON(),
      ["unknown", [1, "uuid:123-asmm-aams"]]
    );
  });
});
