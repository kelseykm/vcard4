import { IntegerType, URIType } from '../../src/values/index.js';
import { LabelParameter } from '../../src/parameters/index.js';
import { IMPPProperty } from '../../src/properties/index.js';
import { assert } from 'chai';

describe('IMPPProperty tests', () => {
  it('Accepts valid input', () => {
    assert.doesNotThrow(() => new IMPPProperty(
      [],
      new URIType('xmpp:alice@example.com')
    ));
  });

  it('Rejects invalid input', () => {
    assert.throws(() => new IMPPProperty(
      [],
      new IntegerType(55)
    ));
    assert.throws(() => new IMPPProperty(
      [
        new LabelParameter('Hello world')
      ],
      new URIType('xmpp:alice@example.com')
    ));
    assert.throws(() => new IMPPProperty);
    assert.throws(() => new IMPPProperty(1));
    assert.throws(() => new IMPPProperty({}));
    assert.throws(() => new IMPPProperty('James Bond'));
  });

  it('Formats value properly', () => {
    assert.strictEqual(
      new IMPPProperty(
        [],
        new URIType('xmpp:alice@example.com')
      ).repr(),
      "IMPP:xmpp:alice@example.com"
    );
  });
});
