import { ParameterValueType } from "../../src/values/index.js";
import { assert } from "chai";

describe("ParameterValueType tests", () => {
  it("Accepts valid input", () => {
    assert.doesNotThrow(
      () => new ParameterValueType("Greeting: Hello, world!")
    );
    assert.doesNotThrow(
      () => new ParameterValueType("Greeting: Hello, world!\x0d")
    );
  });

  it("Rejects invalid input", () => {
    assert.throws(() => new ParameterValueType(1));
    assert.throws(() => new ParameterValueType(""));
    assert.throws(() => new ParameterValueType("hello\x7fworld"));
    assert.throws(() => new ParameterValueType([]));
    assert.throws(() => new ParameterValueType({}));
  });

  it("Formats value properly", () => {
    assert.strictEqual(
      new ParameterValueType("Greeting: Hello, world!").repr(),
      '"Greeting: Hello, world!"'
    );
    assert.strictEqual(
      new ParameterValueType("Greeting=Hello, world!").repr(),
      "Greeting=Hello, world!"
    );
    assert.strictEqual(
      new ParameterValueType("Greeting: Hello, world!").reprXML(),
      "<text>Greeting: Hello, world!</text>"
    );
    assert.strictEqual(
      new ParameterValueType("Five is > than four").reprXML(),
      "<text>Five is &gt; than four</text>"
    );
    assert.deepEqual(
      new ParameterValueType("Greeting: Hello, world!").reprJSON(),
      ["text", "Greeting: Hello, world!"]
    );
  });
});
