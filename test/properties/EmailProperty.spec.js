import { IntegerType, TextType } from '../../src/values/index.js';
import { PrefParameter, LabelParameter } from '../../src/parameters/index.js';
import { EmailProperty } from '../../src/properties/index.js';
import { assert } from 'chai';

describe('EmailProperty tests', () => {
  it('Accepts valid input', () => {
    assert.doesNotThrow(() => new EmailProperty(
      [
        new PrefParameter(
          new IntegerType(1)
        )
      ],
      new TextType('jane_doe@example.com')
    ));
  });

  it('Rejects invalid input', () => {
    assert.throws(() => new EmailProperty(
      [],
      new IntegerType(55)
    ));
    assert.throws(() => new EmailProperty(
      [
        new LabelParameter('Hello world')
      ],
      new TextType('jane_doe@example.com')
    ));
    assert.throws(() => new EmailProperty);
    assert.throws(() => new EmailProperty(1));
    assert.throws(() => new EmailProperty({}));
    assert.throws(() => new EmailProperty('James Bond'));
  });

  it('Formats value properly', () => {
    assert.strictEqual(
      new EmailProperty(
        [
          new PrefParameter(
            new IntegerType(1)
          )
        ],
        new TextType('jane_doe@example.com')
      ).repr(),
      "EMAIL;PREF=1:jane_doe@example.com"
    );
    assert.strictEqual(
      new EmailProperty(
        [
          new PrefParameter(
            new IntegerType(1)
          )
        ],
        new TextType('jane_doe@example.com')
      ).reprXML(),
      "<email><parameters><pref><integer>1</integer></pref></parameters><text>jane_doe@example.com</text></email>"
    );
    assert.deepEqual(
      new EmailProperty(
        [
          new PrefParameter(
            new IntegerType(1)
          )
        ],
        new TextType('jane_doe@example.com')
      ).reprJSON(),
      ["email", {pref: "1"}, "text", "jane_doe@example.com"]
    );
  });
});
