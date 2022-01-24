import { IntegerType } from '../../src/values/index.js';
import { PIDParameter } from '../../src/parameters/index.js';
import { assert } from 'chai';

describe('PIDParameter tests', () => {
  it('Accepts valid input', () => {
    assert.doesNotThrow(() => new PIDParameter(
      new IntegerType(1)
    ));

    assert.doesNotThrow(() => new PIDParameter([
      new IntegerType(3),
      new IntegerType(7),
    ]));

    assert.doesNotThrow(() => new PIDParameter([
      [
        new IntegerType(1),
        new IntegerType(5)
      ]
    ]));

    assert.doesNotThrow(() => new PIDParameter([
      [
        new IntegerType(1),
        new IntegerType(7),
      ],
      new IntegerType(23),
      new IntegerType(24)
    ]));
  });

  it('Rejects invalid input', () => {
    assert.throws(() => new PIDParameter);
    assert.throws(() => new PIDParameter(1));
    assert.throws(() => new PIDParameter('1'));
    assert.throws(() => new PIDParameter(undefined));
    assert.throws(() => new PIDParameter([1, true, null]));
    assert.throws(() => new PIDParameter(false));
    assert.throws(() => new PIDParameter(null));
  });

  it('Formats value properly', () => {
    assert.strictEqual(
      new PIDParameter([
        [
          new IntegerType(1),
          new IntegerType(7),
        ],
        [
          new IntegerType(23),
          new IntegerType(24)
        ]
      ]).repr(),
      "PID=1.7,23.24"
    );
    assert.strictEqual(
      new PIDParameter([
        [
          new IntegerType(1),
          new IntegerType(7),
        ],
        [
          new IntegerType(23),
          new IntegerType(24)
        ]
      ]).reprXML(),
      "<pid><text>1.7</text><text>23.24</text></pid>"
    );
    assert.deepEqual(
      new PIDParameter([
        [
          new IntegerType(1),
          new IntegerType(7),
        ],
        [
          new IntegerType(23),
          new IntegerType(24)
        ]
      ]).reprJSON(),
      {pid: ["1.7", "23.24"]}
    );
  });
});
