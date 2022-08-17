import { IntegerType } from "../../src/values/index.js";
import { IndexParameter } from "../../src/parameters/index.js";
import { assert } from "chai";

describe("IndexParameter tests", () => {
  it("Accepts valid input", () => {
    assert.doesNotThrow(() => new IndexParameter(new IntegerType(1)));
  });

  it("Rejects invalid input", () => {
    assert.throws(() => new IndexParameter(new IntegerType(-2)));
    assert.throws(() => new IndexParameter(1));
    assert.throws(() => new IndexParameter({}));
  });

  it("Formats value properly", () => {
    assert.strictEqual(
      new IndexParameter(new IntegerType(1)).repr(),
      "INDEX=1"
    );
    assert.strictEqual(
      new IndexParameter(new IntegerType(1)).reprXML(),
      "<index><integer>1</integer></index>"
    );
    assert.deepEqual(new IndexParameter(new IntegerType(1)).reprJSON(), {
      index: "1",
    });
  });
});
