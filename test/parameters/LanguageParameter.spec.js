import { ParameterValueType, LanguageTagType } from "../../src/values/index.js";
import { LanguageParameter } from "../../src/parameters/index.js";
import { assert } from "chai";

describe("LanguageParameter tests", () => {
  it("Accepts valid input", () => {
    assert.doesNotThrow(
      () => new LanguageParameter(new LanguageTagType("en-us"))
    );
  });

  it("Rejects invalid input", () => {
    assert.throws(() => new LanguageParameter(1));
    assert.throws(() => new LanguageParameter());
    assert.throws(() => new LanguageParameter(new ParameterValueType("en-us")));
    assert.throws(() => new LanguageParameter({}));
  });

  it("Formats value properly", () => {
    assert.strictEqual(
      new LanguageParameter(new LanguageTagType("en-us")).repr(),
      "LANGUAGE=en-us"
    );
    assert.strictEqual(
      new LanguageParameter(new LanguageTagType("en-us")).reprXML(),
      "<language><language-tag>en-us</language-tag></language>"
    );
    assert.deepEqual(
      new LanguageParameter(new LanguageTagType("en-us")).reprJSON(),
      { language: "en-us" }
    );
  });
});
