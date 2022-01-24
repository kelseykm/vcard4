import { TextType, URIType } from '../../src/values/index.js';
import { ValueParameter } from '../../src/parameters/index.js';
import { XMLProperty } from '../../src/properties/index.js';
import { assert } from 'chai';

describe('XMLProperty tests', () => {
  it('Accepts valid input', () => {
    assert.doesNotThrow(() => new XMLProperty(
      [],
      new TextType(`<love-letter xmlns="urn:imaginary-namespace"><note><to>Tove</to><from>Jani</from><heading>Reminder</heading><body>Don't forget me, this weekend!</body></note></love-letter>`)
    ));

    assert.doesNotThrow(() => new XMLProperty(
      [
        new ValueParameter(
          new TextType('...')
        )
      ],
      new TextType(`<love-letter xmlns="urn:imaginary-namespace"><note><to>Tove</to><from>Jani</from><heading>Reminder</heading><body>Don't forget me, this weekend!</body></note></love-letter>`)
    ));
  });

  it('Rejects invalid input', () => {
    assert.throws(() => new XMLProperty);

    assert.throws(() => new XMLProperty(
      [
        new ValueParameter(
          new URIType('something://...')
        )
      ],
      new URIType('something://...')
    ));
  });

  it('Formats value properly', () => {
    assert.strictEqual(
      new XMLProperty(
        [],
        new TextType(`<love-letter xmlns="urn:imaginary-namespace"><note><to>Tove</to><from>Jani</from><heading>Reminder</heading><body>Don't forget me, this weekend!</body></note></love-letter>`)
      ).repr(),
      "XML:<love-letter xmlns=\"urn\\:imaginary-namespace\"><note><to>Tove</to><from>\r\n Jani</from><heading>Reminder</heading><body>Don't forget me\\, this weekend!\r\n </body></note></love-letter>"
    );
  });
});
