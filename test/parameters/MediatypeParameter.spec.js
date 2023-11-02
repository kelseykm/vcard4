import { ParameterValueType, IntegerType } from "../../src/values/index.js";
import { MediatypeParameter } from "../../src/parameters/index.js";
import { assert } from "chai";

describe("MediatypeParameter tests", () => {
  it("Accepts valid input", () => {
    assert.doesNotThrow(
      () => new MediatypeParameter(new ParameterValueType("audio/mp3"))
    );

    assert.doesNotThrow(
      () =>
        new MediatypeParameter([
          new ParameterValueType("video/jpeg"),
          new ParameterValueType("someattribute=somevalue"),
        ])
    );
  });

  it("Rejects invalid input", () => {
    assert.throws(() => new MediatypeParameter(1));
    assert.throws(() => new MediatypeParameter(new IntegerType(1)));
    assert.throws(() => new MediatypeParameter("audio/mp3"));
    assert.throws(() => new MediatypeParameter({}));
  });

  it("Formats value properly", () => {
    assert.strictEqual(
      new MediatypeParameter([
        new ParameterValueType("video/jpeg"),
        new ParameterValueType("someattribute=somevalue"),
      ]).repr(),
      'MEDIATYPE="video/jpeg;someattribute=somevalue"'
    );
    assert.strictEqual(
      new MediatypeParameter([
        new ParameterValueType("video/jpeg"),
        new ParameterValueType("someattribute=somevalue"),
      ]).reprXML(),
      "<mediatype><text>video/jpeg;someattribute=somevalue</text></mediatype>"
    );
    assert.deepEqual(
      new MediatypeParameter([
        new ParameterValueType("video/jpeg"),
        new ParameterValueType("someattribute=somevalue"),
      ]).reprJSON(),
      { mediatype: "video/jpeg;someattribute=somevalue" }
    );
  });
});
