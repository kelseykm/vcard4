import { TextType, TextListType } from "../../src/values/index.js";
import { SortAsParameter } from "../../src/parameters/index.js";
import { assert } from "chai";

describe("SortAsParameter tests", () => {
  it("Accepts valid input", () => {
    assert.doesNotThrow(() => new SortAsParameter(new TextType("Marcus")));
    assert.doesNotThrow(
      () =>
        new SortAsParameter(
          new TextListType([new TextType("Luther"), new TextType("Martin")])
        )
    );
  });

  it("Rejects invalid input", () => {
    assert.throws(() => new SortAsParameter());
  });

  it("Formats value properly", () => {
    assert.strictEqual(
      new SortAsParameter(
        new TextListType([new TextType("Luther"), new TextType("Martin")])
      ).repr(),
      'SORT-AS="Luther,Martin"'
    );
    assert.strictEqual(
      new SortAsParameter(
        new TextListType([new TextType("Luther"), new TextType("Martin")])
      ).reprXML(),
      "<sort-as><text>Luther</text><text>Martin</text></sort-as>"
    );
    assert.deepEqual(
      new SortAsParameter(
        new TextListType([new TextType("Luther"), new TextType("Martin")])
      ).reprJSON(),
      { "sort-as": ["Luther", "Martin"] }
    );
  });
});
