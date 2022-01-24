import { TextType } from '../../src/values/index.js';
import { assert } from 'chai';

describe('TextType tests', () => {
  it('Accepts valid input', () => {
    assert.doesNotThrow(() => new TextType("Greeting: Hello, world!"));
  });

  it('Rejects invalid input', () => {
    assert.throws(() => new TextType(1));
    assert.throws(() => new TextType);
    assert.throws(() => new TextType([]));
    assert.throws(() => new TextType({}));
  });

  it('Formats value properly', () => {
    assert.strictEqual(
      new TextType("Greeting: Hello, world!").repr(),
      "Greeting\\: Hello\\, world!"
    )
  });
});
