import { LanguageTagType } from '../../src/values/index.js';
import { assert } from 'chai';

describe('LanguageTagType tests', () => {
  it('Accepts valid input', () => {
    assert.doesNotThrow(() => new LanguageTagType('en'));
  });

  it('Rejects invalid input', () => {
    assert.throws(() => new LanguageTagType);
    assert.throws(() => new LanguageTagType(55));
    assert.throws(() => new LanguageTagType(['en']));
    assert.throws(() => new LanguageTagType({}));
  });

  it('Formats value properly', () => {
    assert.strictEqual(
      new LanguageTagType('en-us').repr(),
      "en-us"
    );
  });
});
