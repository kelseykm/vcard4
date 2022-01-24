import { LanguageTagType } from '../../src/values/index.js';
import { ValueParameter } from '../../src/parameters/index.js';
import { assert } from 'chai';

describe('ValueParameter tests', () => {
  it('Accepts valid input', () => {
    assert.doesNotThrow(() => new ValueParameter(
      new LanguageTagType('en-us')
    ));
  });

  it('Rejects invalid input', () => {
    assert.throws(() => new ValueParameter(1));
    assert.throws(() => new ValueParameter);
    assert.throws(() => new ValueParameter({}));
  });

  it('Formats value properly', () => {
    assert.strictEqual(
      new ValueParameter(
        new LanguageTagType('en-us')
      ).repr(),
      "VALUE=language-tag"
    )
  });
});
