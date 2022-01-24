import { TextType, SpecialValueType } from '../../src/values/index.js';
import { OrgProperty } from '../../src/properties/index.js';
import { assert } from 'chai';

describe('OrgProperty tests', () => {
  it('Accepts valid input', () => {
    assert.doesNotThrow(() => new OrgProperty(
      [],
      new SpecialValueType(
        [
          new TextType('ABC, Inc.'),
          new TextType('North American Division'),
          new TextType('Marketing')
        ],
        'orgproperty'
      )
    ));
  });

  it('Rejects invalid input', () => {
    assert.throws(() => new OrgProperty(
      [
        new IntegerType(55)
      ],
      new IntegerType(55)
    ));
    assert.throws(() => new OrgProperty);
    assert.throws(() => new OrgProperty(1));
    assert.throws(() => new OrgProperty({}));
    assert.throws(() => new OrgProperty('James Bond'));
  });

  it('Formats value properly', () => {
    assert.strictEqual(
      new OrgProperty(
        [],
        new SpecialValueType(
          [
            new TextType('ABC, Inc.'),
            new TextType('North American Division'),
            new TextType('Marketing')
          ],
          'orgproperty'
        )
      ).repr(),
      "ORG:ABC\\, Inc.;North American Division;Marketing"
    );
  });
});
