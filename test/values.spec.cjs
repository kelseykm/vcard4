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

const { assert } = require('chai');

describe('CJS property value data types tests', () => {

  describe('TextType tests', () => {
    it('Accepts valid input', () => {
      assert.doesNotThrow(() => new TextType("Greeting: Hello, world!"));
    });

    it('Rejects invalid input', () => {
      assert.throws(() => new TextType(1));
      assert.throws(() => new TextType);
      assert.throws(() => new TextType([]));
      assert.throws(() => new TextType({}));
    });

    it('Formats value properly', () => {
      let text = new TextType("Greeting: Hello, world!");
      assert.strictEqual(text.repr(), "Greeting\\: Hello\\, world!")
    });
  });

  describe('TextListType tests', () => {
    it('Accepts valid input', () => {
      assert.doesNotThrow(() => {
        new TextListType([
          new TextType("Greeting: Hello, world!"),
          new TextType("Greeting: Hello, world!"),
          new TextType("Greeting: Hello, world!")
        ]);
      });
    });

    it('Rejects invalid input', () => {
      assert.throws(() => new TextListType(1));
      assert.throws(() => new TextListType);
      assert.throws(() => new TextListType([
        new IntegerType(100)
      ]));
      assert.throws(() => new TextListType({}));
    });

    it('Formats value properly', () => {
      assert.strictEqual(
        new TextListType([
          new TextType("Hello"),
          new TextType("world")
        ]).repr(),
        "Hello,world"
      );
    });
  });

  describe('BooleanType tests', () => {
    it('Accepts valid input', () => {
      assert.doesNotThrow(() => new BooleanType(true));
    });

    it('Rejects invalid input', () => {
      assert.throws(() => new BooleanType(1));
      assert.throws(() => new BooleanType);
      assert.throws(() => new BooleanType('false'));
      assert.throws(() => new BooleanType({}));
    });

    it('Formats value properly', () => {
      assert.strictEqual(
        new BooleanType(false).repr(),
        "FALSE"
      );
    });
  });

  describe('DateTimeType tests', () => {
    it('Accepts valid input', () => {
      assert.doesNotThrow(() => new DateTimeType('1985-04', 'date'));
      assert.doesNotThrow(() => new DateTimeType('---12', 'date'));


      assert.doesNotThrow(() => new DateTimeType(1400, 'time'));
      assert.doesNotThrow(() => new DateTimeType('102200Z', 'time'));

      assert.doesNotThrow(() => new DateTimeType('19961022T140000', 'datetime'));
      assert.doesNotThrow(() => new DateTimeType('---22T14', 'datetime'));

      assert.doesNotThrow(() => new DateTimeType('T10', 'dateandortime'));
      assert.doesNotThrow(() => new DateTimeType('---12', 'dateandortime'));

      assert.doesNotThrow(() => new DateTimeType('19961022T140000', 'timestamp'));
      assert.doesNotThrow(() => new DateTimeType('19961022T140000-05', 'timestamp'));

      assert.doesNotThrow(() => new DateTimeType('-0500', 'utcoffset'));
      assert.doesNotThrow(() => new DateTimeType('+03', 'utcoffset'));
    });

    it('Rejects invalid input', () => {
      assert.throws(() => new DateTimeType);
      assert.throws(() => new DateTimeType('19961022T14', 'timestamp'));
      assert.throws(() => new DateTimeType('T102200Z', 'time'));
      assert.throws(() => new DateTimeType({}));
    });

    it('Formats value properly', () => {
      assert.strictEqual(
        new DateTimeType('---12', 'dateandortime').repr(),
        "---12"
      );
    });
  });

  describe('DateTimeListType tests', () => {
    it('Accepts valid input', () => {
      assert.doesNotThrow(() => {
        new DateTimeListType([
          new DateTimeType('1985-04', 'date'),
          new DateTimeType('---12', 'date')
        ]);
      });

      assert.doesNotThrow(() => {
        new DateTimeListType([
          new DateTimeType(1400, 'time'),
          new DateTimeType('102200Z', 'time')
        ]);
      });
    });

    it('Rejects invalid input', () => {
      assert.throws(() => new DateTimeType);
      assert.throws(() => new DateTimeType('19961022T14', 'timestamp'));
      assert.throws(() => {
        new DateTimeListType([
          new DateTimeType(1400, 'time'),
          new DateTimeType('19961022T140000-05', 'timestamp')
        ]);
      });
      assert.throws(() => {
        new DateTimeListType([
          new DateTimeType('-0500', 'utcoffset'),
          new DateTimeType('+03', 'utcoffset')
        ]);
      });
      assert.throws(() => new DateTimeType({}));
    });

    it('Formats value properly', () => {
      assert.strictEqual(
        new DateTimeListType([
          new DateTimeType('1985-04', 'date'),
          new DateTimeType('---12', 'date')
        ]).repr(),
        "1985-04,---12"
      );
    });
  })

  describe('IntegerType tests', () => {
    it('Accepts valid input', () => {
      assert.doesNotThrow(() => new IntegerType(1212));
      assert.doesNotThrow(() => new IntegerType(1212n));
      assert.doesNotThrow(() => new IntegerType(-12n));
      assert.doesNotThrow(() => new IntegerType(+3));
    });

    it('Rejects invalid input', () => {
      assert.throws(() => new IntegerType);
      assert.throws(() => new IntegerType(Number.MAX_SAFE_INTEGER + 1));
      assert.throws(() => new IntegerType(Number.MIN_SAFE_INTEGER - 1));
      assert.throws(() => new IntegerType(9223372036854775807n + 1n));
      assert.throws(() => new IntegerType(-9223372036854775808n - 1n));
      assert.throws(() => new IntegerType('55'));
      assert.throws(() => new IntegerType(5.5));
      assert.throws(() => new IntegerType([5, 6, 7]));
      assert.throws(() => new IntegerType({}));
    });

    it('Formats value properly', () => {
      assert.strictEqual(
        new IntegerType(30).repr(),
        "30"
      );
    });
  });

  describe('IntegerListType tests', () => {
    it('Accepts valid input', () => {
      assert.doesNotThrow(() => {
        new IntegerListType([
          new IntegerType(1),
          new IntegerType(4e2),
          new IntegerType(33n)
        ]);
      });
    });

    it('Rejects invalid input', () => {
      assert.throws(() => new IntegerListType(1));
      assert.throws(() => new IntegerListType);
      assert.throws(() => new IntegerListType([
        new TextType("Greeting: Hello, world!")
      ]));
      assert.throws(() => new IntegerListType({}));
    });

    it('Formats value properly', () => {
      assert.strictEqual(
        new IntegerListType([
          new IntegerType(1),
          new IntegerType(4e2),
          new IntegerType(33n)
        ]).repr(),
        "1,400,33"
      );
    });
  });

  describe('FloatType tests', () => {
    it('Accepts valid input', () => {
      assert.doesNotThrow(() => new FloatType(-35.74));
      assert.doesNotThrow(() => new FloatType(90.234));
      assert.doesNotThrow(() => new FloatType('10.400'));
    });

    it('Rejects invalid input', () => {
      assert.throws(() => new FloatType);
      assert.throws(() => new FloatType('55'));
      assert.throws(() => new FloatType(55));
      assert.throws(() => new FloatType(5n));
      assert.throws(() => new FloatType({}));
    });

    it('Formats value properly', () => {
      assert.strictEqual(
        new FloatType(30.45).repr(),
        "30.45"
      );
    });
  });

  describe('FloatListType tests', () => {
    it('Accepts valid input', () => {
      assert.doesNotThrow(() => {
        new FloatListType([
          new FloatType(1.45),
          new FloatType('434.1212100000'),
          new FloatType(3.3)
        ]);
      });
    });

    it('Rejects invalid input', () => {
      assert.throws(() => new FloatListType(1));
      assert.throws(() => new FloatListType);
      assert.throws(() => new FloatListType([
        new IntegerType(5n)
      ]));
      assert.throws(() => new FloatListType({}));
    });

    it('Formats value properly', () => {
      assert.strictEqual(
        new FloatListType([
          new FloatType(1.45),
          new FloatType('4.00'),
          new FloatType(3.3)
        ]).repr(),
        "1.45,4.00,3.3"
      );
    });
  });

  describe('LanguageTagType tests', () => {
    it('Accepts valid input', () => {
      assert.doesNotThrow(() => new LanguageTagType('en'));
    });

    it('Rejects invalid input', () => {
      assert.throws(() => new LanguageTagType);
      assert.throws(() => new LanguageTagType(55));
      assert.throws(() => new LanguageTagType(['en']));
      assert.throws(() => new LanguageTagType({}));
    });

    it('Formats value properly', () => {
      assert.strictEqual(
        new LanguageTagType('en-us').repr(),
        "en-us"
      );
    });
  });

  describe('URIType tests', () => {
    it('Accepts valid input', () => {
      assert.doesNotThrow(() => new URIType('http://www.example.com'));
      assert.doesNotThrow(() => new URIType('file:///home/user'));
      assert.doesNotThrow(() => new URIType('tel:+1234567'));
    });

    it('Rejects invalid input', () => {
      assert.throws(() => new URIType);
      assert.throws(() => new URIType('www.example.com'));
      assert.throws(() => new URIType(3));
      assert.throws(() => new URIType({}));
    });

    it('Formats value properly', () => {
      assert.strictEqual(
        new URIType('http://www.example.com').repr(),
        "http://www.example.com"
      );
    });
  });

  describe('SexType tests', () => {
    it('Accepts valid input', () => {
      assert.doesNotThrow(() => new SexType('M'));
      assert.doesNotThrow(() => new SexType('N'));
      assert.doesNotThrow(() => new SexType('F'));
    });

    it('Rejects invalid input', () => {
      assert.throws(() => new SexType);
      assert.throws(() => new SexType('m'));
      assert.throws(() => new SexType(''));
      assert.throws(() => new SexType({}));
    });

    it('Formats value properly', () => {
      assert.strictEqual(
        new SexType('F').repr(),
        "F"
      );
    });
  });

  describe('SpecialValueType tests', () => {
    it('Accepts valid input', () => {
      assert.doesNotThrow(() => new SpecialValueType('VCARD', 'endproperty'));
      assert.doesNotThrow(() => new SpecialValueType(
        [
          new IntegerType(1),
          new URIType('uuid:123-asmm-aams')
        ],
        'clientpidmapProperty'
      ));
    });

    it('Rejects invalid input', () => {
      assert.throws(() => new SpecialValueType);
      assert.throws(() => new SpecialValueType('something', 'FNProperty'));
      assert.throws(() => new SpecialValueType({}));
    });

    it('Formats value properly', () => {
      assert.strictEqual(
        new SpecialValueType(
          [
            new IntegerType(1),
            new URIType('uuid:123-asmm-aams')
          ],
          'clientpidmapProperty'
        ).repr(),
        "1;uuid:123-asmm-aams"
      );
    });
  });
});
