import { IntegerType, IntegerListType } from "../../src/values/index.js";
import { assert } from "chai";

describe("IntegerListType tests", () => {
  it("Accepts valid input", () => {
    assert.doesNotThrow(() => {
      new IntegerListType([
        new IntegerType(1),
        new IntegerType(4e2),
        new IntegerType(33n),
      ]);
    });
  });

  it("Rejects invalid input", () => {
    assert.throws(() => new IntegerListType(1));
    assert.throws(() => new IntegerListType());
    assert.throws(
      () => new IntegerListType([new TextType("Greeting: Hello, world!")])
    );
    assert.throws(() => new IntegerListType({}));
  });

  it("Formats value properly", () => {
    assert.strictEqual(
      new IntegerListType([
        new IntegerType(1),
        new IntegerType(4e2),
        new IntegerType(33n),
      ]).repr(),
      "1,400,33"
    );
    assert.strictEqual(
      new IntegerListType([
        new IntegerType(1),
        new IntegerType(4e2),
        new IntegerType(33n),
      ]).reprXML(),
      "<integer>1</integer><integer>400</integer><integer>33</integer>"
    );
    assert.deepEqual(
      new IntegerListType([
        new IntegerType(1),
        new IntegerType(4e2),
        new IntegerType(33n),
      ]).reprJSON(),
      ["integer", 1, 400, 33n]
    );
  });
});
