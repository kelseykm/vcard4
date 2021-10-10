const {
  TextType,
  TextListType,
  BooleanType,
  DateTimeType,
  DateTimeListType,
  IntegerType,
  IntegerListType,
  FloatType,
  FloatListType,
  LanguageTagType,
  URIType,
  SexType,
  SpecialValueType
} = require('../src/cjs/values');

const {
  LanguageParameter,
  ValueParameter,
  PrefParameter,
  AltidParameter,
  PIDParameter,
  TypeParameter,
  MediatypeParameter,
  CalscaleParameter,
  SortAsParameter,
  GeoParameter,
  TzParameter,
  AnyParameter,
  LabelParameter
} = require('../src/cjs/parameters');

const { assert } = require('chai');

describe('CJS property parameters tests', () => {

  describe('LanguageParameter tests', () => {
    it('Accepts valid input', () => {
      assert.doesNotThrow(() => new LanguageParameter(
        new LanguageTagType('en-us')
      ));
    });

    it('Rejects invalid input', () => {
      assert.throws(() => new LanguageParameter(1));
      assert.throws(() => new LanguageParameter);
      assert.throws(() => new LanguageParameter(new TextType('en-us')));
      assert.throws(() => new LanguageParameter({}));
    });

    it('Formats value properly', () => {
      assert.strictEqual(
        new LanguageParameter(
          new LanguageTagType('en-us')
        ).repr(),
        "LANGUAGE=en-us"
      )
    });
  });

  describe('ValueParameter tests', () => {
    it('Accepts valid input', () => {
      assert.doesNotThrow(() => new ValueParameter(
        new LanguageTagType('en-us')
      ));
    });

    it('Rejects invalid input', () => {
      assert.throws(() => new ValueParameter(1));
      assert.throws(() => new ValueParameter);
      assert.throws(() => new ValueParameter(
        new TextListType([
          new TextType('a'),
          new TextType('b'),
        ])
      ));
      assert.throws(() => new ValueParameter({}));
    });

    it('Formats value properly', () => {
      assert.strictEqual(
        new ValueParameter(
          new LanguageTagType('en-us')
        ).repr(),
        "VALUE=language-tag"
      )
    });
  });

  describe('PrefParameter tests', () => {
    it('Accepts valid input', () => {
      assert.doesNotThrow(() => new PrefParameter(
        new IntegerType(1)
      ));
    });

    it('Rejects invalid input', () => {
      assert.throws(() => new PrefParameter(1));
      assert.throws(() => new PrefParameter);
      assert.throws(() => new PrefParameter(new TextType('en-us')));
      assert.throws(() => new PrefParameter({}));
    });

    it('Formats value properly', () => {
      assert.strictEqual(
        new PrefParameter(
          new IntegerType(1)
        ).repr(),
        "PREF=1"
      )
    });
  });

  describe('AltidParameter tests', () => {
    it('Accepts valid input', () => {
      assert.doesNotThrow(() => new AltidParameter(
        new IntegerType(1)
      ));
      assert.doesNotThrow(() => new AltidParameter(
        new TextType('1')
      ));
    });

    it('Rejects invalid input', () => {
      assert.throws(() => new AltidParameter);
      assert.throws(() => new AltidParameter(1));
      assert.throws(() => new AltidParameter('1'));
      assert.throws(() => new AltidParameter(undefined));
      assert.throws(() => new AltidParameter([1, true, null]));
      assert.throws(() => new AltidParameter(false));
      assert.throws(() => new AltidParameter(null));
    });

    it('Formats value properly', () => {
      assert.strictEqual(
        new AltidParameter(
          new TextType('yah')
        ).repr(),
        "ALTID=yah"
      )
    });
  });

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
      )
    });
  });

  describe('TypeParameter tests', () => {
    it('Accepts valid input', () => {
      assert.doesNotThrow(() => new TypeParameter(
        new TextType('work'),
        'emailproperty'
      ));

      assert.doesNotThrow(() => new TypeParameter(
        new TextListType([
          new TextType('voice'),
          new TextType('home')
        ]),
        'telproperty'
      ));

      assert.doesNotThrow(() => new TypeParameter(
        new TextType('sweetheart'),
        'relatedproperty'
      ));
    });

    it('Rejects invalid input', () => {
      assert.throws(() => new TypeParameter);
      assert.throws(() => new TypeParameter(1));
      assert.throws(() => new TypeParameter('1'));
      assert.throws(() => new TypeParameter('sweetheart', 'relatedproperty'));
      assert.throws(() => new TypeParameter(new TextType('sweetheart'), 'soundproperty'));
      assert.throws(() => new TypeParameter([1, true, null]));
      assert.throws(() => new TypeParameter(false));
      assert.throws(() => new TypeParameter(null));
    });

    it('Formats value properly', () => {
      assert.strictEqual(
        new TypeParameter(
          new TextListType([
            new TextType('voice'),
            new TextType('home')
          ]),
          'telproperty'
        ).repr(),
        'TYPE="voice,home"'
      )
    });
  });

  describe('MediatypeParameter tests', () => {
    it('Accepts valid input', () => {
      assert.doesNotThrow(() => new MediatypeParameter('audio/mp3'));

      assert.doesNotThrow(() => new MediatypeParameter([
        'video/jpeg',
        'someattribute=somevalue'
      ]));
    });

    it('Rejects invalid input', () => {
      assert.throws(() => new MediatypeParameter(1));
      assert.throws(() => new MediatypeParameter);
      assert.throws(() => new MediatypeParameter(new TextType('audio/mp3')));
      assert.throws(() => new MediatypeParameter({}));
    });

    it('Formats value properly', () => {
      assert.strictEqual(
        new MediatypeParameter([
          'video/jpeg',
          'someattribute=somevalue'
        ]).repr(),
        'MEDIATYPE="video/jpeg;someattribute=somevalue"'
      )
    });
  });

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
      )
    });
  });

  describe('SortAsParameter tests', () => {
    it('Accepts valid input', () => {
      assert.doesNotThrow(() => new SortAsParameter('Marcus'));
      assert.doesNotThrow(() => new SortAsParameter(['Luther', 'Martin']));
    });

    it('Rejects invalid input', () => {
      assert.throws(() => new SortAsParameter);
    });

    it('Formats value properly', () => {
      assert.strictEqual(
        new SortAsParameter(['Luther', 'Martin']).repr(),
        'SORT-AS="Luther,Martin"'
      )
    });
  });

  describe('GeoParameter tests', () => {
    it('Accepts valid input', () => {
      assert.doesNotThrow(() => new GeoParameter(
        new URIType('geo:37.386013,-122.082932')
      ));
    });

    it('Rejects invalid input', () => {
      assert.throws(() => new GeoParameter);
      assert.throws(() => new GeoParameter('geo:37.386013,-122.082932'));
      assert.throws(() => new GeoParameter(1));
      assert.throws(() => new GeoParameter({}));
    });

    it('Formats value properly', () => {
      assert.strictEqual(
        new GeoParameter(
          new URIType('geo:37.386013,-122.082932')
        ).repr(),
        'GEO="geo:37.386013,-122.082932"'
      )
    });
  });

  describe('TzParameter tests', () => {
    it('Accepts valid input', () => {
      assert.doesNotThrow(() => new TzParameter(
        new TextType('Raleigh/North America')
      ));
      assert.doesNotThrow(() => new TzParameter(
        new DateTimeType('-0500', 'utcoffset')
      ));
      assert.doesNotThrow(() => new TzParameter(
        new URIType('something:///zone')
      ));
    });

    it('Rejects invalid input', () => {
      assert.throws(() => new TzParameter);
      assert.throws(() => new TzParameter(1));
      assert.throws(() => new TzParameter({}));
      assert.throws(() => new TzParameter('Raleigh/North America'));
    });

    it('Formats value properly', () => {
      assert.strictEqual(
        new TzParameter(
          new TextType('Raleigh/North America')
        ).repr(),
        'TZ="Raleigh/North America"'
      )
    });
  });

  describe('AnyParameter tests', () => {
    it('Accepts valid input', () => {
      assert.doesNotThrow(() => new AnyParameter('X-CAR', 'Volvo'));
      assert.doesNotThrow(() => new AnyParameter('networkTDOA', 'strong'));
    });

    it('Rejects invalid input', () => {
      assert.throws(() => new AnyParameter);
      assert.throws(() => new AnyParameter('letter', 'a'));
      assert.throws(() => new AnyParameter(1));
      assert.throws(() => new AnyParameter({}));
      assert.throws(() => new AnyParameter('A-GNSS'));
    });

    it('Formats value properly', () => {
      assert.strictEqual(
        new AnyParameter('X-CAR', 'Volvo').repr(),
        'X-CAR=Volvo'
      )
    });
  });

  describe('LabelParameter tests', () => {
    it('Accepts valid input', () => {
      assert.doesNotThrow(() => new LabelParameter('Somestreet, somewhere'));
    });

    it('Rejects invalid input', () => {
      assert.throws(() => new LabelParameter);
      assert.throws(() => new LabelParameter(1));
      assert.throws(() => new LabelParameter({}));
    });

    it('Formats value properly', () => {
      assert.strictEqual(
        new LabelParameter(
`Mr. John Q. Public, Esq.
Mail Drop: TNE QB
123 Main Street
Any Town, CA 91921-1234
U.S.A.`).repr(),
        'LABEL="Mr. John Q. Public, Esq.\\nMail Drop: TNE QB\\n123 Main Street\\nAny Town, CA 91921-1234\\nU.S.A."'
      )
    });
  });
});
