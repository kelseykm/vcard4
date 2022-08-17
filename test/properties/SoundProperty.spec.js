import { URIType, IntegerType } from "../../src/values/index.js";
import { SoundProperty } from "../../src/properties/index.js";
import { assert } from "chai";

describe("SoundProperty tests", () => {
  it("Accepts valid input", () => {
    assert.doesNotThrow(
      () =>
        new SoundProperty(
          [],
          new URIType(
            "CID:JOHNQPUBLIC.part8.19960229T080000.xyzMail@example.com"
          )
        )
    );
  });

  it("Rejects invalid input", () => {
    assert.throws(
      () => new SoundProperty([new IntegerType(55)], new IntegerType(55))
    );
    assert.throws(() => new SoundProperty());
    assert.throws(() => new SoundProperty(1));
    assert.throws(() => new SoundProperty({}));
    assert.throws(() => new SoundProperty("James Bond"));
  });

  it("Formats value properly", () => {
    assert.strictEqual(
      new SoundProperty(
        [],
        new URIType("CID:JOHNQPUBLIC.part8.19960229T080000.xyzMail@example.com")
      ).repr(),
      "SOUND:CID:JOHNQPUBLIC.part8.19960229T080000.xyzMail@example.com"
    );
    assert.strictEqual(
      new SoundProperty(
        [],
        new URIType("CID:JOHNQPUBLIC.part8.19960229T080000.xyzMail@example.com")
      ).reprXML(),
      "<sound><uri>CID:JOHNQPUBLIC.part8.19960229T080000.xyzMail@example.com</uri></sound>"
    );
    assert.deepEqual(
      new SoundProperty(
        [],
        new URIType("CID:JOHNQPUBLIC.part8.19960229T080000.xyzMail@example.com")
      ).reprJSON(),
      [
        "sound",
        {},
        "uri",
        "CID:JOHNQPUBLIC.part8.19960229T080000.xyzMail@example.com",
      ]
    );
  });
});
