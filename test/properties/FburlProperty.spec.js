import {
  URIType,
  IntegerType,
  ParameterValueType,
} from "../../src/values/index.js";
import { MediatypeParameter } from "../../src/parameters/index.js";
import { FburlProperty } from "../../src/properties/index.js";
import { assert } from "chai";

describe("FburlProperty tests", () => {
  it("Accepts valid input", () => {
    assert.doesNotThrow(
      () =>
        new FburlProperty(
          [new MediatypeParameter(new ParameterValueType("text/calendar"))],
          new URIType("ftp://example.com/busy/project-a.ifb")
        )
    );
  });

  it("Rejects invalid input", () => {
    assert.throws(
      () => new FburlProperty([new IntegerType(55)], new IntegerType(55))
    );
    assert.throws(() => new FburlProperty());
    assert.throws(() => new FburlProperty(1));
    assert.throws(() => new FburlProperty({}));
    assert.throws(() => new FburlProperty("James Bond"));
  });

  it("Formats value properly", () => {
    assert.strictEqual(
      new FburlProperty(
        [new MediatypeParameter(new ParameterValueType("text/calendar"))],
        new URIType("ftp://example.com/busy/project-a.ifb")
      ).repr(),
      "FBURL;MEDIATYPE=text/calendar:ftp://example.com/busy/project-a.ifb"
    );
    assert.strictEqual(
      new FburlProperty(
        [new MediatypeParameter(new ParameterValueType("text/calendar"))],
        new URIType("ftp://example.com/busy/project-a.ifb")
      ).reprXML(),
      "<fburl><parameters><mediatype><text>text/calendar</text></mediatype></parameters><uri>ftp://example.com/busy/project-a.ifb</uri></fburl>"
    );
    assert.deepEqual(
      new FburlProperty(
        [new MediatypeParameter(new ParameterValueType("text/calendar"))],
        new URIType("ftp://example.com/busy/project-a.ifb")
      ).reprJSON(),
      [
        "fburl",
        { mediatype: "text/calendar" },
        "uri",
        "ftp://example.com/busy/project-a.ifb",
      ]
    );
  });
});
