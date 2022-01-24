import { TextType, TextListType, IntegerType } from '../../src/values/index.js';
import { PrefParameter, TypeParameter } from '../../src/parameters/index.js';
import { NicknameProperty } from '../../src/properties/index.js';
import { assert } from 'chai';

describe('NicknameProperty tests', () => {
  it('Accepts valid input', () => {
    assert.doesNotThrow(() => new NicknameProperty(
      [],
      new TextType('Robbie')
    ));

    assert.doesNotThrow(() => new NicknameProperty(
      [],
      new TextListType([
        new TextType('Jim'),
        new TextType('Jimmie')
      ])
    ));
  });

  it('Rejects invalid input', () => {
    assert.throws(() => new NicknameProperty(
      [
        new TextType('Bond;James')
      ],
      new TextType('Bond;James')
    ));
    assert.throws(() => new NicknameProperty(
      [
        new PrefParameter(
          new IntegerType(1)
        )
      ],
      new IntegerType(1)
    ));
    assert.throws(() => new NicknameProperty);
    assert.throws(() => new NicknameProperty(1));
    assert.throws(() => new NicknameProperty({}));
    assert.throws(() => new NicknameProperty('James Bond'));
  });

  it('Formats value properly', () => {
    assert.strictEqual(
      new NicknameProperty(
        [
          new TypeParameter(
            new TextType('work'),
            'nicknameproperty'
          )
        ],
        new TextType('Boss')
      ).repr(),
      "NICKNAME;TYPE=work:Boss"
    );
  });
});
