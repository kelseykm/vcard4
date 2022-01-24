import { URIType, LanguageTagType, TextType } from '../../src/values/index.js';
import { LanguageParameter } from '../../src/parameters/index.js';
import { PhotoProperty } from '../../src/properties/index.js';
import { assert } from 'chai';

describe('PhotoProperty tests', () => {
  it('Accepts valid input', () => {
    assert.doesNotThrow(() => new PhotoProperty(
      [],
      new URIType('http://www.example.com/pub/photos/jqpublic.gif')
    ));
  });

  it('Rejects invalid input', () => {
    assert.throws(() => new PhotoProperty(
      [],
      new TextType('http://www.example.com/pub/photos/jqpublic.gif')
    ));
    assert.throws(() => new PhotoProperty(
      [
        new LanguageParameter(
          new LanguageTagType('en')
        )
      ],
      new URIType('http://www.example.com/pub/photos/jqpublic.gif')
    ));
    assert.throws(() => new PhotoProperty);
    assert.throws(() => new PhotoProperty(1));
    assert.throws(() => new PhotoProperty({}));
    assert.throws(() => new PhotoProperty('James Bond'));
  });

  it('Formats value properly', () => {
    assert.strictEqual(
      new PhotoProperty(
        [],
        new URIType('http://www.example.com/pub/photos/jqpublic.gif')
      ).repr(),
      "PHOTO:http://www.example.com/pub/photos/jqpublic.gif"
    );
  });
});
