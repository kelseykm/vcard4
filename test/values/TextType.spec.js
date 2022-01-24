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
    );
    assert.strictEqual(
      new TextType("Greeting: Hello, world!").reprXML(),
      "<text>Greeting: Hello, world!</text>"
    );
    assert.strictEqual(
      new TextType("Five is > than four").reprXML(),
      "<text>Five is &gt; than four</text>"
    );
    assert.deepEqual(
      new TextType("Greeting: Hello, world!").reprJSON(),
      ["text", "Greeting: Hello, world!"]
    );
  });
});
