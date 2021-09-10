import {
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
} from '../src/esm/values.js';

import {
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
} from '../src/esm/parameters.js';

import {
  BeginProperty,
  EndProperty,
  SourceProperty,
  KindProperty,
  XMLProperty,
  FNProperty,
  NProperty,
  NicknameProperty,
  PhotoProperty,
  BdayProperty,
  AnniversaryProperty,
  GenderProperty,
  AdrProperty,
  TelProperty,
  EmailProperty,
  IMPPProperty,
  LangProperty,
  TzProperty,
  GeoProperty,
  TitleProperty,
  RoleProperty,
  LogoProperty,
  OrgProperty,
  MemberProperty,
  RelatedProperty,
  CategoriesProperty,
  NoteProperty,
  ProdidProperty,
  RevProperty,
  SoundProperty,
  UIDProperty,
  ClientpidmapProperty,
  URLProperty,
  VersionProperty,
  KeyProperty,
  FburlProperty,
  CaladruriProperty,
  CaluriProperty,
  ExtendedProperty
} from '../src/esm/properties.js';

import { assert } from 'chai';

describe('ESM properties tests', () => {
  describe('General properties tests', () => {
    describe('BeginProperty tests', () => {
      it('Instances can be created', () => {
        assert.doesNotThrow(() => new BeginProperty);
      });

      it('Formats value properly', () => {
        assert.strictEqual(
          new BeginProperty().repr(),
          "BEGIN:VCARD"
        );
      });
    });

    describe('EndProperty tests', () => {
      it('Instances can be created', () => {
        assert.doesNotThrow(() => new BeginProperty);
      });

      it('Formats value properly', () => {
        assert.strictEqual(
          new EndProperty().repr(),
          "END:VCARD"
        );
      });
    });

    describe('SourceProperty tests', () => {
      it('Accepts valid input', () => {
        assert.doesNotThrow(() => new SourceProperty(
          [],
          new URIType('ldap://ldap.example.com/cn=Babs%20Jensen,%20o=Babsco,%20c=US')
        ));

        assert.doesNotThrow(() => new SourceProperty(
          [
            new PrefParameter(
              new IntegerType(1)
            )
          ],
          new URIType('ldap://ldap.example.com/cn=Babs%20Jensen,%20o=Babsco,%20c=US')
        ));
      });

      it('Rejects invalid input', () => {
        assert.throws(() => new SourceProperty);

        assert.throws(() => new SourceProperty(
          [],
          new TextType('ldap://ldap.example.com/cn=Babs%20Jensen,%20o=Babsco,%20c=US')
        ));

        assert.throws(() => new SourceProperty(
          [
            new LanguageParameter(
              new LanguageTagType('en-us')
            )
          ],
          new URIType('ldap://ldap.example.com/cn=Babs%20Jensen,%20o=Babsco,%20c=US')
        ));
      });

      it('Formats value properly', () => {
        assert.strictEqual(
          new SourceProperty(
            [
              new PrefParameter(
                new IntegerType(1)
              )
            ],
            new URIType('ldap://ldap.example.com/cn=Babs%20Jensen,%20o=Babsco,%20c=US')
          ).repr(),
          "SOURCE;PREF=1:ldap://ldap.example.com/cn=Babs%20Jensen,%20o=Babsco,%20c=US"
        );
      });
    });

    describe('KindProperty tests', () => {
      it('Accepts valid input', () => {
        assert.doesNotThrow(() => new KindProperty(
          [],
          new SpecialValueType('individual', 'kindproperty')
        ));

        assert.doesNotThrow(() => new KindProperty(
          [
            new ValueParameter(
              new SpecialValueType('individual', 'kindproperty')
            )
          ],
          new SpecialValueType('individual', 'kindproperty')
        ));
      });

      it('Rejects invalid input', () => {
        assert.throws(() => new KindProperty);

        assert.throws(() => new KindProperty(
          [
            new PrefParameter(
              new IntegerType(1)
            )
          ],
          new SpecialValueType('individual', 'kindproperty')
        ));

        assert.throws(() => new KindProperty(
          [],
          new TextType('individual')
        ));
      });

      it('Formats value properly', () => {
        assert.strictEqual(
          new KindProperty(
            [
              new ValueParameter(
                new SpecialValueType('individual', 'kindproperty')
              )
            ],
            new SpecialValueType('individual', 'kindproperty')
          ).repr(),
          "KIND;VALUE=text:individual"
        );
      });
    });

    describe('XMLProperty tests', () => {
      it('Accepts valid input', () => {
        assert.doesNotThrow(() => new XMLProperty(
          [],
          new TextType('...')
        ));

        assert.doesNotThrow(() => new XMLProperty(
          [
            new ValueParameter(
              new TextType('...')
            )
          ],
          new TextType('...')
        ));
      });

      it('Rejects invalid input', () => {
        assert.throws(() => new XMLProperty);

        assert.throws(() => new XMLProperty(
          [
            new ValueParameter(
              new URIType('something://...')
            )
          ],
          new URIType('something://...')
        ));
      });

      it('Formats value properly', () => {
        assert.strictEqual(
          new XMLProperty(
            [],
            new TextType(`<?xml version="1.0" encoding="ISO-8859-1"?>
<note>
  <to>Tove</to>
  <from>Jani</from>
  <heading>Reminder</heading>
  <body>Don't forget me this weekend!</body>
</note>`)).repr(),
            `XML:<?xml version="1.0" encoding="ISO-8859-1"?>\\n<note>\\n  <to>Tove</to>\\n  <from>Jani</from>\\n  <heading>Reminder</heading>\\n  <body>Don\'t forget me this weekend!</body>\\n</note>`
          );
        });
      });
  });

  describe('Identification properties tests', () => {
    describe('FNProperty tests', () => {
      it('Accepts valid input', () => {
        assert.doesNotThrow(() => new FNProperty(
          [],
          new TextType('James Bond')
        ));
      });

      it('Rejects invalid input', () => {
        assert.throws(() => new FNProperty(
          [],
          new IntegerType(55)
        ));
        assert.throws(() => new FNProperty(
          [
            new GeoParameter('geo:123,456')
          ],
          new TextType('James Bond')
        ));
        assert.throws(() => new FNProperty);
        assert.throws(() => new FNProperty(1));
        assert.throws(() => new FNProperty({}));
        assert.throws(() => new FNProperty('James Bond'));
      });

      it('Formats value properly', () => {
        assert.strictEqual(
          new FNProperty(
            [],
            new TextType('James Bond')
          ).repr(),
          "FN:James Bond"
        );
      });
    });

    describe('NProperty tests', () => {
      it('Accepts valid input', () => {
        assert.doesNotThrow(() => new NProperty(
          [],
          new SpecialValueType(
            [
              new TextType('Stevenson'),
              new TextType('John'),
              new TextListType([
                new TextType('Phillip'),
                new TextType('Paul')
              ]),
              new TextType('Dr.'),
              new TextListType([
                new TextType('Jr.'),
                new TextType('M.D.'),
                new TextType('A.C.P.')
              ])
            ],
            'nproperty'
          )
        ));
      });

      it('Rejects invalid input', () => {
        assert.throws(() => new NProperty(
          [],
          new TextType('Bond;James')
        ));
        assert.throws(() => new NProperty(
          [
            new PrefParameter(
              new IntegerType(1)
            )
          ],
          new TextType('James Bond')
        ));
        assert.throws(() => new NProperty);
        assert.throws(() => new NProperty(1));
        assert.throws(() => new NProperty({}));
        assert.throws(() => new NProperty('James Bond'));
      });

      it('Formats value properly', () => {
        assert.strictEqual(
          new NProperty(
            [],
            new SpecialValueType(
              [
                new TextType('Stevenson'),
                new TextType('John'),
                new TextListType([
                  new TextType('Phillip'),
                  new TextType('Paul')
                ]),
                new TextType('Dr.'),
                new TextListType([
                  new TextType('Jr.'),
                  new TextType('M.D.'),
                  new TextType('A.C.P.')
                ])
              ],
              'nproperty'
            )
          ).repr(),
          "N:Stevenson;John;Phillip,Paul;Dr.;Jr.,M.D.,A.C.P."
        );
      });
    });

    describe('NicknameProperty tests', () => {
      it('Accepts valid input', () => {
        assert.doesNotThrow(() => new NicknameProperty(
          [],
          new TextType('Robbie')
        ));

        assert.doesNotThrow(() => new NicknameProperty(
          [],
          new TextListType([
            new TextType('Jim'),
            new TextType('Jimmie')
          ])
        ));
      });

      it('Rejects invalid input', () => {
        assert.throws(() => new NicknameProperty(
          [
            new TextType('Bond;James')
          ],
          new TextType('Bond;James')
        ));
        assert.throws(() => new NicknameProperty(
          [
            new PrefParameter(
              new IntegerType(1)
            )
          ],
          new IntegerType(1)
        ));
        assert.throws(() => new NicknameProperty);
        assert.throws(() => new NicknameProperty(1));
        assert.throws(() => new NicknameProperty({}));
        assert.throws(() => new NicknameProperty('James Bond'));
      });

      it('Formats value properly', () => {
        assert.strictEqual(
          new NicknameProperty(
            [
              new TypeParameter(
                'work',
                'nicknameproperty'
              )
            ],
            new TextType('Boss')
          ).repr(),
          "NICKNAME;TYPE=work:Boss"
        );
      });
    });

    describe('PhotoProperty tests', () => {
      it('Accepts valid input', () => {
        assert.doesNotThrow(() => new PhotoProperty(
          [],
          new URIType('http://www.example.com/pub/photos/jqpublic.gif')
        ));
      });

      it('Rejects invalid input', () => {
        assert.throws(() => new PhotoProperty(
          [],
          new TextType('http://www.example.com/pub/photos/jqpublic.gif')
        ));
        assert.throws(() => new PhotoProperty(
          [
            new LanguageParameter(
              new LanguageTagType('en')
            )
          ],
          new URIType('http://www.example.com/pub/photos/jqpublic.gif')
        ));
        assert.throws(() => new PhotoProperty);
        assert.throws(() => new PhotoProperty(1));
        assert.throws(() => new PhotoProperty({}));
        assert.throws(() => new PhotoProperty('James Bond'));
      });

      it('Formats value properly', () => {
        assert.strictEqual(
          new PhotoProperty(
            [],
            new URIType('http://www.example.com/pub/photos/jqpublic.gif')
          ).repr(),
          "PHOTO:http://www.example.com/pub/photos/jqpublic.gif"
        );
      });
    });

    describe('BdayProperty tests', () => {
      it('Accepts valid input', () => {
        assert.doesNotThrow(() => new BdayProperty(
          [],
          new DateTimeType('19960415', 'dateandortime')
        ));
      });

      it('Rejects invalid input', () => {
        assert.throws(() => new BdayProperty(
          [],
          new DateTimeType('19960415', 'date')
        ));
        assert.throws(() => new BdayProperty);
        assert.throws(() => new BdayProperty(1));
        assert.throws(() => new BdayProperty({}));
        assert.throws(() => new BdayProperty('James Bond'));
      });

      it('Formats value properly', () => {
        assert.strictEqual(
          new BdayProperty(
            [
              new ValueParameter(
                new TextType('circa 1800')
              )
            ],
            new TextType('circa 1800')
          ).repr(),
          "BDAY;VALUE=text:circa 1800"
        );
      });
    });

    describe('AnniversaryProperty tests', () => {
      it('Accepts valid input', () => {
        assert.doesNotThrow(() => new AnniversaryProperty(
          [],
          new DateTimeType('19960415', 'dateandortime')
        ));
      });

      it('Rejects invalid input', () => {
        assert.throws(() => new AnniversaryProperty(
          [],
          new DateTimeType('19960415', 'date')
        ));
        assert.throws(() => new AnniversaryProperty(1));
        assert.throws(() => new AnniversaryProperty({}));
        assert.throws(() => new AnniversaryProperty('James Bond'));
      });

      it('Formats value properly', () => {
        assert.strictEqual(
          new AnniversaryProperty(
            [
              new ValueParameter(
                new TextType('circa 1800')
              )
            ],
            new TextType('circa 1800')
          ).repr(),
          "ANNIVERSARY;VALUE=text:circa 1800"
        );
      });
    });

    describe('GenderProperty tests', () => {
      it('Accepts valid input', () => {
        assert.doesNotThrow(() => new GenderProperty(
          [],
          new SpecialValueType(
            [
              new SexType('O'),
              new TextType('intersex')
            ],
            'genderproperty'
          )
        ));
      });

      it('Rejects invalid input', () => {
        assert.throws(() => new GenderProperty(
          [],
          new DateTimeType('19960415', 'date')
        ));
        assert.throws(() => new GenderProperty(1));
        assert.throws(() => new GenderProperty({}));
        assert.throws(() => new GenderProperty('James Bond'));
      });

      it('Formats value properly', () => {
        assert.strictEqual(
          new GenderProperty(
            [],
            new SpecialValueType(
              [
                new SexType('O'),
                new TextType('intersex')
              ],
              'genderproperty'
            )
          ).repr(),
          "GENDER:O;intersex"
        );
      });
    });
  });
});
