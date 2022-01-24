import { TextType, IntegerType } from '../../src/values/index.js';
import { ProdidProperty } from '../../src/properties/index.js';
import { assert } from 'chai';

describe('ProdidProperty tests', () => {
  it('Accepts valid input', () => {
    assert.doesNotThrow(() => new ProdidProperty(
      [],
      new TextType('-//ONLINE DIRECTORY//NONSGML Version 1//EN')
    ));
  });

  it('Rejects invalid input', () => {
    assert.throws(() => new ProdidProperty(
      [
        new IntegerType(55)
      ],
      new IntegerType(55)
    ));
    assert.throws(() => new ProdidProperty);
    assert.throws(() => new ProdidProperty(1));
    assert.throws(() => new ProdidProperty({}));
    assert.throws(() => new ProdidProperty('James Bond'));
  });

  it('Formats value properly', () => {
    assert.strictEqual(
      new ProdidProperty(
        [],
        new TextType('-//ONLINE DIRECTORY//NONSGML Version 1//EN')
      ).repr(),
      "PRODID:-//ONLINE DIRECTORY//NONSGML Version 1//EN"
    );
  });
});
