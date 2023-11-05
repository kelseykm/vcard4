import { DateTimeListType, DateTimeType } from "../../src/values/index.js";
import { assert } from "chai";

describe("DateTimeListType tests", () => {
  it("Accepts valid input", () => {
    assert.doesNotThrow(() => {
      new DateTimeListType([
        new DateTimeType("date", "1985-04"),
        new DateTimeType("date", "---12"),
      ]);
    });

    assert.doesNotThrow(() => {
      new DateTimeListType([
        new DateTimeType("time", 1400),
        new DateTimeType("time", "102200Z"),
      ]);
    });
  });

  it("Rejects invalid input", () => {
    assert.throws(() => new DateTimeType());
    assert.throws(() => new DateTimeType("timestamp", "19961022T14"));
    assert.throws(() => {
      new DateTimeListType([
        new DateTimeType("time", 1400),
        new DateTimeType("timestamp", "19961022T140000-05"),
      ]);
    });
    assert.throws(() => {
      new DateTimeListType([
        new DateTimeType("utcoffset", "-0500"),
        new DateTimeType("utcoffset", "+03"),
      ]);
    });
    assert.throws(() => new DateTimeType({}));
  });

  it("Formats value properly", () => {
    assert.strictEqual(
      new DateTimeListType([
        new DateTimeType("date", "1985-04"),
        new DateTimeType("date", "---12"),
      ]).repr(),
      "1985-04,---12"
    );
    assert.strictEqual(
      new DateTimeListType([
        new DateTimeType("date", "1985-04"),
        new DateTimeType("date", "---12"),
      ]).reprXML(),
      "<date>1985-04</date><date>---12</date>"
    );
    assert.deepEqual(
      new DateTimeListType([
        new DateTimeType("date", "1985-04"),
        new DateTimeType("date", "---12"),
      ]).reprJSON(),
      ["date", "1985-04", "---12"]
    );
  });
});
