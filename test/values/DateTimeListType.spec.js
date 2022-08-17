import { DateTimeListType, DateTimeType } from "../../src/values/index.js";
import { assert } from "chai";

describe("DateTimeListType tests", () => {
  it("Accepts valid input", () => {
    assert.doesNotThrow(() => {
      new DateTimeListType([
        new DateTimeType("1985-04", "date"),
        new DateTimeType("---12", "date"),
      ]);
    });

    assert.doesNotThrow(() => {
      new DateTimeListType([
        new DateTimeType(1400, "time"),
        new DateTimeType("102200Z", "time"),
      ]);
    });
  });

  it("Rejects invalid input", () => {
    assert.throws(() => new DateTimeType());
    assert.throws(() => new DateTimeType("19961022T14", "timestamp"));
    assert.throws(() => {
      new DateTimeListType([
        new DateTimeType(1400, "time"),
        new DateTimeType("19961022T140000-05", "timestamp"),
      ]);
    });
    assert.throws(() => {
      new DateTimeListType([
        new DateTimeType("-0500", "utcoffset"),
        new DateTimeType("+03", "utcoffset"),
      ]);
    });
    assert.throws(() => new DateTimeType({}));
  });

  it("Formats value properly", () => {
    assert.strictEqual(
      new DateTimeListType([
        new DateTimeType("1985-04", "date"),
        new DateTimeType("---12", "date"),
      ]).repr(),
      "1985-04,---12"
    );
    assert.strictEqual(
      new DateTimeListType([
        new DateTimeType("1985-04", "date"),
        new DateTimeType("---12", "date"),
      ]).reprXML(),
      "<date>1985-04</date><date>---12</date>"
    );
    assert.deepEqual(
      new DateTimeListType([
        new DateTimeType("1985-04", "date"),
        new DateTimeType("---12", "date"),
      ]).reprJSON(),
      ["date", "1985-04", "---12"]
    );
  });
});
