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
  NoteProperty,
  UIDProperty
} from '../src/properties/index.js';
import { VCARD } from '../src/card.js';
import { Group } from '../src/group.js';
import { assert } from 'chai';

describe('VCARD tests', () => {
  it('Accepts valid input', () => {
    assert.doesNotThrow(() => new VCARD([
      new FNProperty(
        [],
        new TextType('James Bond')
      )
    ]));

    assert.doesNotThrow(() => new VCARD([
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
        ],
        'milky'
      ),
    ]));
  });

  it('Rejects invalid input', () => {
    assert.throws(() => new VCARD([
      new FNProperty(
        [],
        new TextType('James Bond')
      ),
      new IntegerType(1),
    ]));
    assert.throws(() => new VCARD([
      new FNProperty(
        [],
        new TextType('James Bond')
      ),
      new UIDProperty(
        [],
        new TextType('blahblah')
      ),
      new UIDProperty(
        [],
        new TextType('mary had a little lamb')
      ),
    ]));
    assert.throws(() => new VCARD([
      new FNProperty(
        [],
        new TextType('James Bond')
      ),
      new UIDProperty(
        [],
        new TextType('blahblah')
      ),
      new Group([
        new UIDProperty(
          [],
          new TextType('mary had a little lamb')
        )
      ], 'nursery'),
    ]));
    assert.throws(() => new VCARD([
      new NoteProperty(
        [],
        new TextType('James Bond')
      )
    ]));
    assert.throws(() => new VCARD([
      new FNProperty(
        [],
        new TextType('James Bond')
      ),
      new MemberProperty(
        [],
        new URIType('uuid:blah-blah-blah')
      )
    ]));
    assert.throws(() => new VCARD);
    assert.throws(() => new VCARD({}));
    assert.throws(() => new VCARD(1));
    assert.throws(() => new VCARD('Hi'));
  });

  it('Formats value properly', () => {
    assert.strictEqual(
      new VCARD([
        new FNProperty(
          [],
          new TextType('James Bond')
        )
      ]).repr(),
      "BEGIN:VCARD\r\n" +
      "VERSION:4.0\r\n" +
      "FN:James Bond\r\n" +
      "END:VCARD\r\n"
    );

    assert.strictEqual(
      new VCARD([
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
          ],
          'milky'
        ),
      ]).repr(),
      "BEGIN:VCARD\r\n" +
      "VERSION:4.0\r\n" +
      "milky.FN;VALUE=text:James Bond\r\n" +
      "milky.NICKNAME;PREF=1;VALUE=text:Jamie\r\n" +
      "END:VCARD\r\n"
    );

    assert.strictEqual(
      new VCARD([
        new FNProperty(
          [],
          new TextType('James Bond')
        )
      ]).reprXML(),
      `<?xml version="1.0" encoding="UTF-8"?><vcards xmlns="urn:ietf:params:xml:ns:vcard-4.0"><vcard><fn><text>James Bond</text></fn></vcard></vcards>`
    );

    assert.strictEqual(
      new VCARD([
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
          ],
          'milky'
        ),
      ]).reprXML(),
      `<?xml version="1.0" encoding="UTF-8"?><vcards xmlns="urn:ietf:params:xml:ns:vcard-4.0"><vcard><group name="milky"><fn><text>James Bond</text></fn><nickname><parameters><pref><integer>1</integer></pref></parameters><text>Jamie</text></nickname></group></vcard></vcards>`
    );

    assert.deepEqual(
      new VCARD([
        new FNProperty(
          [],
          new TextType('James Bond')
        )
      ]).reprJSON(),
      ["vcard", [
        ["fn", {}, "text", "James Bond"]
      ]]
    );

    assert.deepEqual(
      new VCARD([
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
          ],
          'milky'
        ),
      ]).reprJSON(),
      ["vcard", [
        ["fn", { "group": "milky"}, "text", "James Bond"],
        [ "nickname", { "group": "milky", "pref": "1" }, "text", "Jamie" ]
      ]]
    );
    
  });
});
