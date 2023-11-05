import {
  ParameterValueType,
  DateTimeType,
  URIType,
} from "../../src/values/index.js";
import { TzParameter } from "../../src/parameters/index.js";
import { assert } from "chai";

describe("TzParameter tests", () => {
  it("Accepts valid input", () => {
    assert.doesNotThrow(
      () => new TzParameter(new ParameterValueType("Raleigh/North America"))
    );
    assert.doesNotThrow(
      () => new TzParameter(new DateTimeType("utcoffset", "-0500"))
    );
    assert.doesNotThrow(
      () => new TzParameter(new URIType("something:///zone"))
    );
  });

  it("Rejects invalid input", () => {
    assert.throws(() => new TzParameter());
    assert.throws(() => new TzParameter(1));
    assert.throws(() => new TzParameter({}));
    assert.throws(() => new TzParameter("Raleigh/North America"));
  });

  it("Formats value properly", () => {
    assert.strictEqual(
      new TzParameter(new ParameterValueType("Raleigh/North America")).repr(),
      "TZ=Raleigh/North America"
    );
    assert.strictEqual(
      new TzParameter(
        new ParameterValueType("Raleigh/North America")
      ).reprXML(),
      "<tz><text>Raleigh/North America</text></tz>"
    );
    assert.deepEqual(
      new TzParameter(
        new ParameterValueType("Raleigh/North America")
      ).reprJSON(),
      { tz: "Raleigh/North America" }
    );
  });
});
