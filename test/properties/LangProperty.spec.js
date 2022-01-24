import { LanguageTagType, IntegerType } from '../../src/values/index.js';
import { LabelParameter } from '../../src/parameters/index.js';
import { LangProperty } from '../../src/properties/index.js';
import { assert } from 'chai';

describe('LangProperty tests', () => {
  it('Accepts valid input', () => {
    assert.doesNotThrow(() => new LangProperty(
      [],
      new LanguageTagType('fr')
    ));
  });

  it('Rejects invalid input', () => {
    assert.throws(() => new LangProperty(
      [],
      new IntegerType(55)
    ));
    assert.throws(() => new LangProperty(
      [
        new LabelParameter('Hello world')
      ],
      new LanguageTagType('fr')
    ));
    assert.throws(() => new LangProperty);
    assert.throws(() => new LangProperty(1));
    assert.throws(() => new LangProperty({}));
    assert.throws(() => new LangProperty('James Bond'));
  });

  it('Formats value properly', () => {
    assert.strictEqual(
      new LangProperty(
        [],
        new LanguageTagType('fr')
      ).repr(),
      "LANG:fr"
    );
    assert.strictEqual(
      new LangProperty(
        [],
        new LanguageTagType('fr')
      ).reprXML(),
      "<lang><language-tag>fr</language-tag></lang>"
    );
    assert.deepEqual(
      new LangProperty(
        [],
        new LanguageTagType('fr')
      ).reprJSON(),
      ["lang", {}, "language-tag", "fr"]
    );
  });
});
