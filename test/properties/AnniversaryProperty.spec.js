import { DateTimeType, TextType } from "../../src/values/index.js";
import { ValueParameter } from "../../src/parameters/index.js";
import { AnniversaryProperty } from "../../src/properties/index.js";
import { assert } from "chai";

describe("AnniversaryProperty tests", () => {
  it("Accepts valid input", () => {
    assert.doesNotThrow(
      () =>
        new AnniversaryProperty(
          [],
          new DateTimeType("19960415", "dateandortime")
        )
    );
  });

  it("Rejects invalid input", () => {
    assert.throws(
      () => new AnniversaryProperty([], new DateTimeType("19960415", "date"))
    );
    assert.throws(() => new AnniversaryProperty(1));
    assert.throws(() => new AnniversaryProperty({}));
    assert.throws(() => new AnniversaryProperty("James Bond"));
  });

  it("Formats value properly", () => {
    assert.strictEqual(
      new AnniversaryProperty(
        [new ValueParameter(new TextType("circa 1800"))],
        new TextType("circa 1800")
      ).repr(),
      "ANNIVERSARY;VALUE=text:circa 1800"
    );
    assert.strictEqual(
      new AnniversaryProperty(
        [new ValueParameter(new TextType("circa 1800"))],
        new TextType("circa 1800")
      ).reprXML(),
      "<anniversary><text>circa 1800</text></anniversary>"
    );
    assert.deepEqual(
      new AnniversaryProperty(
        [new ValueParameter(new TextType("circa 1800"))],
        new TextType("circa 1800")
      ).reprJSON(),
      ["anniversary", {}, "text", "circa 1800"]
    );
  });
});
