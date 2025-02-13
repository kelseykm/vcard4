import { DateTimeType } from "../../src/values/index.js";
import { assert } from "chai";

describe("DateTimeType tests", () => {
  it("Accepts valid input", () => {
    assert.doesNotThrow(() => new DateTimeType("date", "1985-04"));
    assert.doesNotThrow(() => new DateTimeType("date", "---12"));
    assert.doesNotThrow(() => new DateTimeType("date", "20250219"));

    assert.doesNotThrow(() => new DateTimeType("time", 1400));
    assert.doesNotThrow(() => new DateTimeType("time", "102200Z"));

    assert.doesNotThrow(() => new DateTimeType("datetime", "19961022T140000"));
    assert.doesNotThrow(() => new DateTimeType("datetime", "19970219T140000"));
    assert.doesNotThrow(() => new DateTimeType("datetime", "---22T14"));

    assert.doesNotThrow(() => new DateTimeType("dateandortime", "T10"));
    assert.doesNotThrow(() => new DateTimeType("dateandortime", "---12"));

    assert.doesNotThrow(() => new DateTimeType("timestamp", "19961022T140000"));
    assert.doesNotThrow(() => new DateTimeType("timestamp", "19970209T140000"));
    assert.doesNotThrow(
      () => new DateTimeType("timestamp", "19961022T140000-05")
    );

    assert.doesNotThrow(() => new DateTimeType("utcoffset", "-0500"));
    assert.doesNotThrow(() => new DateTimeType("utcoffset", "+03"));
  });

  it("Rejects invalid input", () => {
    assert.throws(() => new DateTimeType());
    assert.throws(() => new DateTimeType("date", "20250431"));
    assert.throws(() => new DateTimeType("date", "20250229"));
    assert.throws(() => new DateTimeType("timestamp", "19961022T14"));
    assert.throws(() => new DateTimeType("time", "T102200Z"));
    assert.throws(() => new DateTimeType({}));
  });

  it("Formats value properly", () => {
    assert.strictEqual(
      new DateTimeType("dateandortime", "---12").repr(),
      "---12"
    );
    assert.strictEqual(
      new DateTimeType("dateandortime", "---12").reprXML(),
      "<date>---12</date>"
    );
    assert.deepEqual(new DateTimeType("dateandortime", "---12").reprJSON(), [
      "date-and-or-time",
      "---12",
    ]);
  });
});
