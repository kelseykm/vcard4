import { TextType, URIType, IntegerType } from "../../src/values/index.js";
import { MediatypeParameter } from "../../src/parameters/index.js";
import { CaluriProperty } from "../../src/properties/index.js";
import { assert } from "chai";

describe("CaluriProperty tests", () => {
  it("Accepts valid input", () => {
    assert.doesNotThrow(
      () =>
        new CaluriProperty(
          [new MediatypeParameter(new TextType("text/calendar"))],
          new URIType("ftp://ftp.example.com/calA.ics")
        )
    );
  });

  it("Rejects invalid input", () => {
    assert.throws(
      () => new CaluriProperty([new IntegerType(55)], new IntegerType(55))
    );
    assert.throws(() => new CaluriProperty());
    assert.throws(() => new CaluriProperty(1));
    assert.throws(() => new CaluriProperty({}));
    assert.throws(() => new CaluriProperty("James Bond"));
  });

  it("Formats value properly", () => {
    assert.strictEqual(
      new CaluriProperty(
        [new MediatypeParameter(new TextType("text/calendar"))],
        new URIType("ftp://ftp.example.com/calA.ics")
      ).repr(),
      "CALURI;MEDIATYPE=text/calendar:ftp://ftp.example.com/calA.ics"
    );
    assert.strictEqual(
      new CaluriProperty(
        [new MediatypeParameter(new TextType("text/calendar"))],
        new URIType("ftp://ftp.example.com/calA.ics")
      ).reprXML(),
      "<caluri><parameters><mediatype><text>text/calendar</text></mediatype></parameters><uri>ftp://ftp.example.com/calA.ics</uri></caluri>"
    );
    assert.deepEqual(
      new CaluriProperty(
        [new MediatypeParameter(new TextType("text/calendar"))],
        new URIType("ftp://ftp.example.com/calA.ics")
      ).reprJSON(),
      [
        "caluri",
        { mediatype: "text/calendar" },
        "uri",
        "ftp://ftp.example.com/calA.ics",
      ]
    );
  });
});
