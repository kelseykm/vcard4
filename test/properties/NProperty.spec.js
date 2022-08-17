import {
  TextType,
  TextListType,
  SpecialValueType,
  IntegerType,
} from "../../src/values/index.js";
import { PrefParameter } from "../../src/parameters/index.js";
import { NProperty } from "../../src/properties/index.js";
import { assert } from "chai";

describe("NProperty tests", () => {
  it("Accepts valid input", () => {
    assert.doesNotThrow(
      () =>
        new NProperty(
          [],
          new SpecialValueType(
            [
              new TextType("Stevenson"),
              new TextType("John"),
              new TextListType([new TextType("Phillip"), new TextType("Paul")]),
              new TextType("Dr."),
              new TextListType([
                new TextType("Jr."),
                new TextType("M.D."),
                new TextType("A.C.P."),
              ]),
            ],
            "nproperty"
          )
        )
    );
  });

  it("Rejects invalid input", () => {
    assert.throws(() => new NProperty([], new TextType("Bond;James")));
    assert.throws(
      () =>
        new NProperty(
          [new PrefParameter(new IntegerType(1))],
          new TextType("James Bond")
        )
    );
    assert.throws(() => new NProperty());
    assert.throws(() => new NProperty(1));
    assert.throws(() => new NProperty({}));
    assert.throws(() => new NProperty("James Bond"));
  });

  it("Formats value properly", () => {
    assert.strictEqual(
      new NProperty(
        [],
        new SpecialValueType(
          [
            new TextType("Stevenson"),
            new TextType("John"),
            new TextListType([new TextType("Phillip"), new TextType("Paul")]),
            new TextType("Dr."),
            new TextListType([
              new TextType("Jr."),
              new TextType("M.D."),
              new TextType("A.C.P."),
            ]),
          ],
          "nproperty"
        )
      ).repr(),
      "N:Stevenson;John;Phillip,Paul;Dr.;Jr.,M.D.,A.C.P."
    );
    assert.strictEqual(
      new NProperty(
        [],
        new SpecialValueType(
          [
            new TextType("Stevenson"),
            new TextType("John"),
            new TextListType([new TextType("Phillip"), new TextType("Paul")]),
            new TextType("Dr."),
            new TextListType([
              new TextType("Jr."),
              new TextType("M.D."),
              new TextType("A.C.P."),
            ]),
          ],
          "nproperty"
        )
      ).reprXML(),
      "<n><surname>Stevenson</surname><given>John</given><additional>Phillip</additional><additional>Paul</additional><prefix>Dr.</prefix><suffix>Jr.</suffix><suffix>M.D.</suffix><suffix>A.C.P.</suffix></n>"
    );
    assert.deepEqual(
      new NProperty(
        [],
        new SpecialValueType(
          [
            new TextType("Stevenson"),
            new TextType("John"),
            new TextListType([new TextType("Phillip"), new TextType("Paul")]),
            new TextType("Dr."),
            new TextListType([
              new TextType("Jr."),
              new TextType("M.D."),
              new TextType("A.C.P."),
            ]),
          ],
          "nproperty"
        )
      ).reprJSON(),
      [
        "n",
        {},
        "text",
        [
          "Stevenson",
          "John",
          ["Phillip", "Paul"],
          "Dr.",
          ["Jr.", "M.D.", "A.C.P."],
        ],
      ]
    );
  });
});
