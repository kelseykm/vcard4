import { TextType, IntegerType } from '../../src/values/index.js';
import { NoteProperty } from '../../src/properties/index.js';
import { assert } from 'chai';

describe('NoteProperty tests', () => {
  it('Accepts valid input', () => {
    assert.doesNotThrow(() => new NoteProperty(
      [],
      new TextType('This fax number is operational 0800 to 1715 EST, Mon-Fri.')
    ));
  });

  it('Rejects invalid input', () => {
    assert.throws(() => new NoteProperty(
      [
        new IntegerType(55)
      ],
      new IntegerType(55)
    ));
    assert.throws(() => new NoteProperty);
    assert.throws(() => new NoteProperty(1));
    assert.throws(() => new NoteProperty({}));
    assert.throws(() => new NoteProperty('James Bond'));
  });

  it('Formats value properly', () => {
    assert.strictEqual(
      new NoteProperty(
        [],
        new TextType('This fax number is operational 0800 to 1715 EST, Mon-Fri.')
      ).repr(),
      "NOTE:This fax number is operational 0800 to 1715 EST\\, Mon-Fri."
    );
  });
});
