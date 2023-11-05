import {
  SpecialValueType,
  IntegerType,
  URIType,
} from "../../src/values/index.js";
import { assert } from "chai";

describe("SpecialValueType tests", () => {
  it("Accepts valid input", () => {
    assert.doesNotThrow(() => new SpecialValueType("kindproperty", "group"));
    assert.doesNotThrow(
      () =>
        new SpecialValueType("clientpidmapProperty", [
          new IntegerType(1),
          new URIType("uuid:123-asmm-aams"),
        ])
    );
  });

  it("Rejects invalid input", () => {
    assert.throws(() => new SpecialValueType());
    assert.throws(() => new SpecialValueType("FNProperty", "something"));
    assert.throws(() => new SpecialValueType({}));
  });

  it("Formats value properly", () => {
    assert.strictEqual(
      new SpecialValueType("clientpidmapProperty", [
        new IntegerType(1),
        new URIType("uuid:123-asmm-aams"),
      ]).repr(),
      "1;uuid:123-asmm-aams"
    );
    assert.strictEqual(
      new SpecialValueType("clientpidmapProperty", [
        new IntegerType(1),
        new URIType("uuid:123-asmm-aams"),
      ]).reprXML(),
      "<integer>1</integer><uri>uuid:123-asmm-aams</uri>"
    );
    assert.deepEqual(
      new SpecialValueType("clientpidmapProperty", [
        new IntegerType(1),
        new URIType("uuid:123-asmm-aams"),
      ]).reprJSON(),
      ["unknown", [1, "uuid:123-asmm-aams"]]
    );
  });
});
