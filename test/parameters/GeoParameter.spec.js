import { URIType } from '../../src/values/index.js';
import { GeoParameter } from '../../src/parameters/index.js';
import { assert } from 'chai';

describe('GeoParameter tests', () => {
  it('Accepts valid input', () => {
    assert.doesNotThrow(() => new GeoParameter(
      new URIType('geo:37.386013,-122.082932')
    ));
  });

  it('Rejects invalid input', () => {
    assert.throws(() => new GeoParameter);
    assert.throws(() => new GeoParameter('geo:37.386013,-122.082932'));
    assert.throws(() => new GeoParameter(1));
    assert.throws(() => new GeoParameter({}));
  });

  it('Formats value properly', () => {
    assert.strictEqual(
      new GeoParameter(
        new URIType('geo:37.386013,-122.082932')
      ).repr(),
      'GEO="geo:37.386013,-122.082932"'
    )
  });
});
