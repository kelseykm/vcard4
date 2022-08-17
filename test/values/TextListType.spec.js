import { TextType, TextListType, IntegerType } from "../../src/values/index.js";
import { assert } from "chai";

describe("TextListType tests", () => {
  it("Accepts valid input", () => {
    assert.doesNotThrow(() => {
      new TextListType([
        new TextType("Greeting: Hello, world!"),
        new TextType("Greeting: Hello, world!"),
        new TextType("Greeting: Hello, world!"),
      ]);
    });
  });

  it("Rejects invalid input", () => {
    assert.throws(() => new TextListType(1));
    assert.throws(() => new TextListType());
    assert.throws(() => new TextListType([new IntegerType(100)]));
    assert.throws(() => new TextListType({}));
  });

  it("Formats value properly", () => {
    assert.strictEqual(
      new TextListType([new TextType("Hello"), new TextType("world")]).repr(),
      "Hello,world"
    );
    assert.strictEqual(
      new TextListType([
        new TextType("Hello"),
        new TextType("world"),
      ]).reprXML(),
      "<text>Hello</text><text>world</text>"
    );
    assert.deepEqual(
      new TextListType([
        new TextType("Hello"),
        new TextType("world"),
      ]).reprJSON(),
      ["text", "Hello", "world"]
    );
  });
});
