import { TextType } from '../../src/values/index.js';
import { LabelParameter } from '../../src/parameters/index.js';
import { assert } from 'chai';

describe('LabelParameter tests', () => {
  it('Accepts valid input', () => {
    assert.doesNotThrow(() => new LabelParameter(new TextType('Somestreet, somewhere')));
  });

  it('Rejects invalid input', () => {
    assert.throws(() => new LabelParameter);
    assert.throws(() => new LabelParameter(1));
    assert.throws(() => new LabelParameter({}));
  });

  it('Formats value properly', () => {
    assert.strictEqual(
      new LabelParameter(new TextType(
`Mr. John Q. Public, Esq.
Mail Drop: TNE QB
123 Main Street
Any Town, CA 91921-1234
U.S.A.`)).repr(),
      'LABEL="Mr. John Q. Public, Esq.^nMail Drop: TNE QB^n123 Main Street^nAny Town, CA 91921-1234^nU.S.A."'
    );
    assert.strictEqual(
      new LabelParameter(new TextType(
`Mr. John Q. Public, Esq.
Mail Drop: TNE QB
123 Main Street
Any Town, CA 91921-1234
U.S.A.`)).reprXML(),
      '<label><text>Mr. John Q. Public, Esq.\nMail Drop: TNE QB\n123 Main Street\nAny Town, CA 91921-1234\nU.S.A.</text></label>'
    );
    assert.deepEqual(
      new LabelParameter(new TextType(
`Mr. John Q. Public, Esq.
Mail Drop: TNE QB
123 Main Street
Any Town, CA 91921-1234
U.S.A.`)).reprJSON(),
      {label: "Mr. John Q. Public, Esq.\nMail Drop: TNE QB\n123 Main Street\nAny Town, CA 91921-1234\nU.S.A."}
    );
  });
});
