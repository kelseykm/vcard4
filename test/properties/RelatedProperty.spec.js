import { TextType, URIType, IntegerType } from "../../src/values/index.js";
import { ValueParameter, TypeParameter } from "../../src/parameters/index.js";
import { RelatedProperty } from "../../src/properties/index.js";
import { assert } from "chai";

describe("RelatedProperty tests", () => {
  it("Accepts valid input", () => {
    assert.doesNotThrow(
      () =>
        new RelatedProperty(
          [new TypeParameter(new TextType("friend"), "relatedproperty")],
          new URIType("uuid:f81d4fae-7dec-11d0-a765-00a0c91e6bf6")
        )
    );

    assert.doesNotThrow(
      () =>
        new RelatedProperty(
          [
            new TypeParameter(new TextType("co-worker"), "relatedproperty"),
            new ValueParameter(
              new TextType(
                "Please contact my assistant Jane Doe for any inquiries."
              )
            ),
          ],
          new TextType(
            "Please contact my assistant Jane Doe for any inquiries."
          )
        )
    );
  });

  it("Rejects invalid input", () => {
    assert.throws(
      () => new RelatedProperty([new IntegerType(55)], new IntegerType(55))
    );
    assert.throws(() => new RelatedProperty());
    assert.throws(() => new RelatedProperty(1));
    assert.throws(() => new RelatedProperty({}));
    assert.throws(() => new RelatedProperty("James Bond"));
  });

  it("Formats value properly", () => {
    assert.strictEqual(
      new RelatedProperty(
        [
          new TypeParameter(new TextType("co-worker"), "relatedproperty"),
          new ValueParameter(
            new TextType(
              "Please contact my assistant Jane Doe for any inquiries."
            )
          ),
        ],
        new TextType("Please contact my assistant Jane Doe for any inquiries.")
      ).repr(),
      "RELATED;TYPE=co-worker;VALUE=text:Please contact my assistant Jane Doe for \r\n any inquiries."
    );
    assert.strictEqual(
      new RelatedProperty(
        [
          new TypeParameter(new TextType("co-worker"), "relatedproperty"),
          new ValueParameter(
            new TextType(
              "Please contact my assistant Jane Doe for any inquiries."
            )
          ),
        ],
        new TextType("Please contact my assistant Jane Doe for any inquiries.")
      ).reprXML(),
      "<related><parameters><type><text>co-worker</text></type></parameters><text>Please contact my assistant Jane Doe for any inquiries.</text></related>"
    );
    assert.deepEqual(
      new RelatedProperty(
        [
          new TypeParameter(new TextType("co-worker"), "relatedproperty"),
          new ValueParameter(
            new TextType(
              "Please contact my assistant Jane Doe for any inquiries."
            )
          ),
        ],
        new TextType("Please contact my assistant Jane Doe for any inquiries.")
      ).reprJSON(),
      [
        "related",
        { type: "co-worker" },
        "text",
        "Please contact my assistant Jane Doe for any inquiries.",
      ]
    );
  });
});
