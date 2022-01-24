import { TextType, TextListType, IntegerType } from '../../src/values/index.js';
import { CategoriesProperty } from '../../src/properties/index.js';
import { assert } from 'chai';

describe('CategoriesProperty tests', () => {
  it('Accepts valid input', () => {
    assert.doesNotThrow(() => new CategoriesProperty(
      [],
      new TextType('TRAVEL AGENT')
    ));

    assert.doesNotThrow(() => new CategoriesProperty(
      [],
      new TextListType([
        new TextType('INTERNET'),
        new TextType('IETF'),
        new TextType('INDUSTRY')
      ])
    ));
  });

  it('Rejects invalid input', () => {
    assert.throws(() => new CategoriesProperty(
      [
        new IntegerType(55)
      ],
      new IntegerType(55)
    ));
    assert.throws(() => new CategoriesProperty);
    assert.throws(() => new CategoriesProperty(1));
    assert.throws(() => new CategoriesProperty({}));
    assert.throws(() => new CategoriesProperty('James Bond'));
  });

  it('Formats value properly', () => {
    assert.strictEqual(
      new CategoriesProperty(
        [],
        new TextListType([
          new TextType('INTERNET'),
          new TextType('IETF'),
          new TextType('INDUSTRY')
        ])
      ).repr(),
      "CATEGORIES:INTERNET,IETF,INDUSTRY"
    );
    assert.strictEqual(
      new CategoriesProperty(
        [],
        new TextListType([
          new TextType('INTERNET'),
          new TextType('IETF'),
          new TextType('INDUSTRY')
        ])
      ).reprXML(),
      "<categories><text>INTERNET</text><text>IETF</text><text>INDUSTRY</text></categories>"
    );
    assert.deepEqual(
      new CategoriesProperty(
        [],
        new TextListType([
          new TextType('INTERNET'),
          new TextType('IETF'),
          new TextType('INDUSTRY')
        ])
      ).reprJSON(),
      ["categories", {}, 'text', "INTERNET","IETF","INDUSTRY"]
    );
  });
});
