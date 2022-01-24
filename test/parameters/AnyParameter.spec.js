import { TextType } from '../../src/values/index.js';
import { AnyParameter } from '../../src/parameters/index.js';
import { assert } from 'chai';

describe('AnyParameter tests', () => {
  it('Accepts valid input', () => {
    assert.doesNotThrow(() => new AnyParameter('X-CAR', new TextType('Volvo')));
    assert.doesNotThrow(() => new AnyParameter('networkTDOA', new TextType('strong')));
  });

  it('Rejects invalid input', () => {
    assert.throws(() => new AnyParameter);
    assert.throws(() => new AnyParameter('x-letter', 'a'));
    assert.throws(() => new AnyParameter(1));
    assert.throws(() => new AnyParameter({}));
    assert.throws(() => new AnyParameter('A-GNSS'));
  });

  it('Formats value properly', () => {
    assert.strictEqual(
      new AnyParameter('X-CAR', new TextType('Volvo')).repr(),
      'X-CAR=Volvo'
    );
    assert.strictEqual(
      new AnyParameter('X-CAR', new TextType('Volvo')).reprXML(),
      '<x-car><text>Volvo</text></x-car>'
    );
    assert.deepEqual(
      new AnyParameter('X-CAR', new TextType('Volvo')).reprJSON(),
      {'x-car': 'Volvo'}
    );
  });
});
