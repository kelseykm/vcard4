import {
  TextType,
  URIType,
  IntegerType
} from '../src/values/index.js';
import {
  ValueParameter,
  PrefParameter,
} from '../src/parameters/index.js';
import {
  NicknameProperty,
  FNProperty,
  MemberProperty,
} from '../src/properties/index.js';
import { Group } from '../src/group.js';
import { assert } from 'chai';

describe('Group tests', () => {
  it('Accepts valid input', () => {
    assert.doesNotThrow(() => new Group(
      [
        new FNProperty(
          [
            new ValueParameter(new TextType('')),
          ],
          new TextType('James Bond')
        ),
        new NicknameProperty(
          [
            new PrefParameter(new IntegerType(1)),
            new ValueParameter(new TextType('')),
          ],
          new TextType('Jamie')
        ),
      ],
      'milky'
    ));
  });

  it('Rejects invalid input', () => {
    assert.throws(() => new Group([{}]));
    assert.throws(() => new Group([ new IntegerType(5) ]));
  });

  it('Does validation properly', () => {
    assert.isTrue(
      new Group(
        [
          new FNProperty(
            [
              new ValueParameter(new TextType('')),
            ],
            new TextType('James Bond')
          ),
          new NicknameProperty(
            [
              new PrefParameter(new IntegerType(1)),
              new ValueParameter(new TextType('')),
            ],
            new TextType('Jamie')
          ),
          new MemberProperty(
            [],
            new URIType('uuid:blah-blah-blah')
          )
        ],
        'milky'
      ).hasMemberProperty
    );
  });

  it('Formats value properly', () => {
    const group = new Group(
      [
        new FNProperty(
          [
            new ValueParameter(new TextType('')),
          ],
          new TextType('James Bond')
        ),
        new NicknameProperty(
          [
            new PrefParameter(new IntegerType(1)),
            new ValueParameter(new TextType('')),
          ],
          new TextType('Jamie')
        ),
      ],
      'milky'
    );

    assert.strictEqual(
      group.repr(),
      "milky.FN;VALUE=text:James Bond\r\n" +
      "milky.NICKNAME;PREF=1;VALUE=text:Jamie"
    );
    
    assert.strictEqual(
      group.reprXML(),
      `<group name="milky"><fn><text>James Bond</text></fn><nickname><parameters><pref><integer>1</integer></pref></parameters><text>Jamie</text></nickname></group>`
    );

    assert.deepEqual(
      group.reprJSON(),
      [
        [ 'fn', { group: 'milky' }, 'text', 'James Bond' ],
        [ 'nickname', { pref: '1', group: 'milky' }, 'text', 'Jamie' ]
      ]
    );
  });
});

