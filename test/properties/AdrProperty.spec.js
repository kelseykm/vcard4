import { TextType, URIType, SpecialValueType, IntegerType } from '../../src/values/index.js';
import { GeoParameter  } from '../../src/parameters/index.js';
import { AdrProperty } from '../../src/properties/index.js';
import { assert } from 'chai';

describe('AdrProperty tests', () => {
  const addrArr = new Array(7);
  addrArr[2] = new TextType('123 Main Street');
  addrArr[3] = new TextType('Any Town');
  addrArr[4] = new TextType('CA');
  addrArr[5] = new TextType('91921-1234');
  addrArr[6] = new TextType('U.S.A.');

  const addrArr2 = [...addrArr];

  it('Accepts valid input', () => {
    assert.doesNotThrow(() => new AdrProperty(
      [
        new GeoParameter(
          new URIType('geo:12.3457,78.910')
        )
      ],
      new SpecialValueType(addrArr, 'AdrProperty')
    ));
  });

  it('Rejects invalid input', () => {
    assert.throws(() => new AdrProperty(
      [
        new IntegerType(55)
      ],
      new IntegerType(55)
    ));
    assert.throws(() => new AdrProperty);
    assert.throws(() => new AdrProperty(1));
    assert.throws(() => new AdrProperty({}));
    assert.throws(() => new AdrProperty('James Bond'));
  });

  it('Formats value properly', () => {
    assert.strictEqual(
      new AdrProperty(
        [
          new GeoParameter(
            new URIType('geo:12.3457,78.910')
          )
        ],
        new SpecialValueType(addrArr2, 'AdrProperty')
      ).repr(),
      'ADR;GEO="geo:12.3457,78.910":;;123 Main Street;Any Town;CA;91921-1234;U.S.A\r\n .'
    );
  });
});
