import { TextType } from '../../src/values/index.js';
import { CalscaleParameter } from '../../src/parameters/index.js';
import { assert } from 'chai';

describe('CalscaleParameter tests', () => {
  it('Accepts valid input', () => {
    assert.doesNotThrow(() => new CalscaleParameter(new TextType('gregorian')));
    assert.doesNotThrow(() => new CalscaleParameter(new TextType('x-arabian')));
  });

  it('Rejects invalid input', () => {
    assert.throws(() => new CalscaleParameter(1));
    assert.throws(() => new CalscaleParameter);
    assert.throws(() => new CalscaleParameter('en-us'));
    assert.throws(() => new CalscaleParameter({}));
  });

  it('Formats value properly', () => {
    assert.strictEqual(
      new CalscaleParameter(new TextType('gregorian')).repr(),
      "CALSCALE=gregorian"
    );
    assert.strictEqual(
      new CalscaleParameter(new TextType('gregorian')).reprXML(),
      "<calscale><text>gregorian</text></calscale>"
    );
    assert.deepEqual(
      new CalscaleParameter(new TextType('gregorian')).reprJSON(),
      {'calscale' : 'gregorian'}
    );
  });
});
