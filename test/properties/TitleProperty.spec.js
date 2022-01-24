import { IntegerType, TextType } from '../../src/values/index.js';
import { TitleProperty } from '../../src/properties/index.js';
import { assert } from 'chai';

describe('TitleProperty tests', () => {
  it('Accepts valid input', () => {
    assert.doesNotThrow(() => new TitleProperty(
      [],
      new TextType('Research Scientist')
    ));
  });

  it('Rejects invalid input', () => {
    assert.throws(() => new TitleProperty(
      [
        new IntegerType(55)
      ],
      new IntegerType(55)
    ));
    assert.throws(() => new TitleProperty);
    assert.throws(() => new TitleProperty(1));
    assert.throws(() => new TitleProperty({}));
    assert.throws(() => new TitleProperty('James Bond'));
  });

  it('Formats value properly', () => {
    assert.strictEqual(
      new TitleProperty(
        [],
        new TextType('Research Scientist')
      ).repr(),
      "TITLE:Research Scientist"
    );
    assert.strictEqual(
      new TitleProperty(
        [],
        new TextType('Research Scientist')
      ).reprXML(),
      "<title><text>Research Scientist</text></title>"
    );
    assert.deepEqual(
      new TitleProperty(
        [],
        new TextType('Research Scientist')
      ).reprJSON(),
      ["title", {}, "text", "Research Scientist"]
    );
  });
});
