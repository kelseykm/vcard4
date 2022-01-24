import { TextType, IntegerType } from '../../src/values/index.js';
import { RoleProperty } from '../../src/properties/index.js';
import { assert } from 'chai';

describe('RoleProperty tests', () => {
  it('Accepts valid input', () => {
    assert.doesNotThrow(() => new RoleProperty(
      [],
      new TextType('Project Leader')
    ));
  });

  it('Rejects invalid input', () => {
    assert.throws(() => new RoleProperty(
      [
        new IntegerType(55)
      ],
      new IntegerType(55)
    ));
    assert.throws(() => new RoleProperty);
    assert.throws(() => new RoleProperty(1));
    assert.throws(() => new RoleProperty({}));
    assert.throws(() => new RoleProperty('James Bond'));
  });

  it('Formats value properly', () => {
    assert.strictEqual(
      new RoleProperty(
        [],
        new TextType('Project Leader')
      ).repr(),
      "ROLE:Project Leader"
    );
  });
});
