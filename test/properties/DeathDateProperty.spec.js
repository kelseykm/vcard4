import { DateTimeType, TextType } from "../../src/values/index.js";
import { ValueParameter } from "../../src/parameters/index.js";
import { DeathDateProperty } from "../../src/properties/index.js";
import { assert } from "chai";

describe("DeathDateProperty tests", () => {
  it("Accepts valid input", () => {
    assert.doesNotThrow(
      () =>
        new DeathDateProperty([], new DateTimeType("dateandortime", "19960415"))
    );
  });

  it("Rejects invalid input", () => {
    assert.throws(
      () => new DeathDateProperty([], new DateTimeType("date", "19960415"))
    );
    assert.throws(() => new DeathDateProperty());
    assert.throws(() => new DeathDateProperty(1));
    assert.throws(() => new DeathDateProperty({}));
    assert.throws(() => new DeathDateProperty("James Bond"));
  });

  it("Formats value properly", () => {
    assert.strictEqual(
      new DeathDateProperty(
        [new ValueParameter(new TextType("circa 1800"))],
        new TextType("circa 1800")
      ).repr(),
      "DEATHDATE;VALUE=text:circa 1800"
    );
    assert.strictEqual(
      new DeathDateProperty(
        [new ValueParameter(new TextType("circa 1800"))],
        new TextType("circa 1800")
      ).reprXML(),
      "<deathdate><text>circa 1800</text></deathdate>"
    );
    assert.deepEqual(
      new DeathDateProperty(
        [new ValueParameter(new TextType("circa 1800"))],
        new TextType("circa 1800")
      ).reprJSON(),
      ["deathdate", {}, "text", "circa 1800"]
    );
  });
});
