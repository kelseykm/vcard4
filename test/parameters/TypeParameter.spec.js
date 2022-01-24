import { TextType, TextListType } from '../../src/values/index.js';
import { TypeParameter } from '../../src/parameters/index.js';
import { assert } from 'chai';

describe('TypeParameter tests', () => {
  it('Accepts valid input', () => {
    assert.doesNotThrow(() => new TypeParameter(
      new TextType('work'),
      'emailproperty'
    ));

    assert.doesNotThrow(() => new TypeParameter(
      new TextListType([
        new TextType('voice'),
        new TextType('home')
      ]),
      'telproperty'
    ));

    assert.doesNotThrow(() => new TypeParameter(
      new TextType('sweetheart'),
      'relatedproperty'
    ));
  });

  it('Rejects invalid input', () => {
    assert.throws(() => new TypeParameter);
    assert.throws(() => new TypeParameter(1));
    assert.throws(() => new TypeParameter('1'));
    assert.throws(() => new TypeParameter('sweetheart', 'relatedproperty'));
    assert.throws(() => new TypeParameter(new TextType('sweetheart'), 'soundproperty'));
    assert.throws(() => new TypeParameter([1, true, null]));
    assert.throws(() => new TypeParameter(false));
    assert.throws(() => new TypeParameter(null));
  });

  it('Formats value properly', () => {
    assert.strictEqual(
      new TypeParameter(
        new TextListType([
          new TextType('voice'),
          new TextType('home')
        ]),
        'telproperty'
      ).repr(),
      'TYPE="voice,home"'
    )
  });
});
