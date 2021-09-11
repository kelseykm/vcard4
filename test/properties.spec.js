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
            new TextType(`<?xml version="1.0" encoding="ISO-8859-1"?><note><to>Tove</to><from>Jani</from><heading>Reminder</heading><body>Don't forget me this weekend!</body></note>`)
          ).repr(),
          `XML:<?xml version="1.0" encoding="ISO-8859-1"?><note><to>Tove</to><from>Jan\r\n i</from><heading>Reminder</heading><body>Don't forget me this weekend!</bod\r\n y></note>`
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

  describe('Addressing properties tests', () => {
    describe('AdrProperty tests', () => {
      let addrArr = new Array(7);
      addrArr[2] = new TextType('123 Main Street');
      addrArr[3] = new TextType('Any Town');
      addrArr[4] = new TextType('CA');
      addrArr[5] = new TextType('91921-1234');
      addrArr[6] = new TextType('U.S.A.');

      let addrArr2 = [...addrArr];

      it('Accepts valid input', () => {
        assert.doesNotThrow(() => new AdrProperty(
          [
            new GeoParameter(
              new URIType('geo:12.3457,78.910')
            )
          ],
          new SpecialValueType(addrArr, 'AdrProperty')
        ));
      });

      it('Rejects invalid input', () => {
        assert.throws(() => new AdrProperty(
          [
            new IntegerType(55)
          ],
          new IntegerType(55)
        ));
        assert.throws(() => new AdrProperty);
        assert.throws(() => new AdrProperty(1));
        assert.throws(() => new AdrProperty({}));
        assert.throws(() => new AdrProperty('James Bond'));
      });

      it('Formats value properly', () => {
        assert.strictEqual(
          new AdrProperty(
            [
              new GeoParameter(
                new URIType('geo:12.3457,78.910')
              )
            ],
            new SpecialValueType(addrArr2, 'AdrProperty')
          ).repr(),
          'ADR;GEO="geo:12.3457,78.910":;;123 Main Street;Any Town;CA;91921-1234;U.S.A\r\n .'
        );
      });
    });
  });

  describe('Communications properties tests', () => {
    describe('TelProperty tests', () => {
      it('Accepts valid input', () => {
        assert.doesNotThrow(() => new TelProperty(
          [],
          new URIType('tel:+33-01-23-45-67')
        ));

        assert.doesNotThrow(() => new TelProperty(
          [],
          new TextType('+33-01-23-45-67')
        ));
      });

      it('Rejects invalid input', () => {
        assert.throws(() => new TelProperty(
          [],
          new IntegerType(55)
        ));
        assert.throws(() => new TelProperty(
          [
            new LabelParameter('Hello world')
          ],
          new TextType('+33-01-23-45-67')
        ));
        assert.throws(() => new TelProperty);
        assert.throws(() => new TelProperty(1));
        assert.throws(() => new TelProperty({}));
        assert.throws(() => new TelProperty('James Bond'));
      });

      it('Formats value properly', () => {
        assert.strictEqual(
          new TelProperty(
            [],
            new URIType('tel:+33-01-23-45-67')
          ).repr(),
          "TEL:tel:+33-01-23-45-67"
        );
      });
    });

    describe('EmailProperty tests', () => {
      it('Accepts valid input', () => {
        assert.doesNotThrow(() => new EmailProperty(
          [
            new PrefParameter(
              new IntegerType(1)
            )
          ],
          new TextType('jane_doe@example.com')
        ));
      });

      it('Rejects invalid input', () => {
        assert.throws(() => new EmailProperty(
          [],
          new IntegerType(55)
        ));
        assert.throws(() => new EmailProperty(
          [
            new LabelParameter('Hello world')
          ],
          new TextType('jane_doe@example.com')
        ));
        assert.throws(() => new EmailProperty);
        assert.throws(() => new EmailProperty(1));
        assert.throws(() => new EmailProperty({}));
        assert.throws(() => new EmailProperty('James Bond'));
      });

      it('Formats value properly', () => {
        assert.strictEqual(
          new EmailProperty(
            [
              new PrefParameter(
                new IntegerType(1)
              )
            ],
            new TextType('jane_doe@example.com')
          ).repr(),
          "EMAIL;PREF=1:jane_doe@example.com"
        );
      });
    });

    describe('IMPPProperty tests', () => {
      it('Accepts valid input', () => {
        assert.doesNotThrow(() => new IMPPProperty(
          [],
          new URIType('xmpp:alice@example.com')
        ));
      });

      it('Rejects invalid input', () => {
        assert.throws(() => new IMPPProperty(
          [],
          new IntegerType(55)
        ));
        assert.throws(() => new IMPPProperty(
          [
            new LabelParameter('Hello world')
          ],
          new URIType('xmpp:alice@example.com')
        ));
        assert.throws(() => new IMPPProperty);
        assert.throws(() => new IMPPProperty(1));
        assert.throws(() => new IMPPProperty({}));
        assert.throws(() => new IMPPProperty('James Bond'));
      });

      it('Formats value properly', () => {
        assert.strictEqual(
          new IMPPProperty(
            [],
            new URIType('xmpp:alice@example.com')
          ).repr(),
          "IMPP:xmpp:alice@example.com"
        );
      });
    });

    describe('LangProperty tests', () => {
      it('Accepts valid input', () => {
        assert.doesNotThrow(() => new LangProperty(
          [],
          new LanguageTagType('fr')
        ));
      });

      it('Rejects invalid input', () => {
        assert.throws(() => new LangProperty(
          [],
          new IntegerType(55)
        ));
        assert.throws(() => new LangProperty(
          [
            new LabelParameter('Hello world')
          ],
          new LanguageTagType('fr')
        ));
        assert.throws(() => new LangProperty);
        assert.throws(() => new LangProperty(1));
        assert.throws(() => new LangProperty({}));
        assert.throws(() => new LangProperty('James Bond'));
      });

      it('Formats value properly', () => {
        assert.strictEqual(
          new LangProperty(
            [],
            new LanguageTagType('fr')
          ).repr(),
          "LANG:fr"
        );
      });
    });
  });

  describe('Geographical properties tests', () => {
    describe('TzProperty tests', () => {
      it('Accepts valid input', () => {
        assert.doesNotThrow(() => new TzProperty(
          [],
          new TextType('Raleigh/North America')
        ));

        assert.doesNotThrow(() => new TzProperty(
          [],
          new DateTimeType('-0500', 'utcoffset')
        ));
      });

      it('Rejects invalid input', () => {
        assert.throws(() => new TzProperty(
          [],
          new IntegerType(55)
        ));
        assert.throws(() => new TzProperty(
          [
            new LabelParameter('Hello world')
          ],
          new TextType('Raleigh/North America')
        ));
        assert.throws(() => new TzProperty);
        assert.throws(() => new TzProperty(1));
        assert.throws(() => new TzProperty({}));
        assert.throws(() => new TzProperty('James Bond'));
      });

      it('Formats value properly', () => {
        assert.strictEqual(
          new TzProperty(
            [],
            new TextType('Raleigh/North America')
          ).repr(),
          "TZ:Raleigh/North America"
        );
      });
    });

    describe('GeoProperty tests', () => {
      it('Accepts valid input', () => {
        assert.doesNotThrow(() => new GeoProperty(
          [],
          new URIType('geo:37.386013,-122.082932')
        ));
      });

      it('Rejects invalid input', () => {
        assert.throws(() => new GeoProperty(
          [],
          new IntegerType(55)
        ));
        assert.throws(() => new GeoProperty(
          [
            new LabelParameter('Hello world')
          ],
          new URIType('geo:37.386013,-122.082932')
        ));
        assert.throws(() => new GeoProperty);
        assert.throws(() => new GeoProperty(1));
        assert.throws(() => new GeoProperty({}));
        assert.throws(() => new GeoProperty('James Bond'));
      });

      it('Formats value properly', () => {
        assert.strictEqual(
          new GeoProperty(
            [],
            new URIType('geo:37.386013,-122.082932')
          ).repr(),
          "GEO:geo:37.386013,-122.082932"
        );
      });
    });
  });

  describe('Organizational properties tests', () => {
    describe('TitleProperty tests', () => {
      it('Accepts valid input', () => {
        assert.doesNotThrow(() => new TitleProperty(
          [],
          new TextType('Research Scientist')
        ));
      });

      it('Rejects invalid input', () => {
        assert.throws(() => new TitleProperty(
          [
            new IntegerType(55)
          ],
          new IntegerType(55)
        ));
        assert.throws(() => new TitleProperty);
        assert.throws(() => new TitleProperty(1));
        assert.throws(() => new TitleProperty({}));
        assert.throws(() => new TitleProperty('James Bond'));
      });

      it('Formats value properly', () => {
        assert.strictEqual(
          new TitleProperty(
            [],
            new TextType('Research Scientist')
          ).repr(),
          "TITLE:Research Scientist"
        );
      });
    });

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

    describe('LogoProperty tests', () => {
      it('Accepts valid input', () => {
        assert.doesNotThrow(() => new LogoProperty(
          [],
          new URIType('http://www.example.com/pub/logos/abccorp.jpg')
        ));
      });

      it('Rejects invalid input', () => {
        assert.throws(() => new LogoProperty(
          [
            new IntegerType(55)
          ],
          new IntegerType(55)
        ));
        assert.throws(() => new LogoProperty);
        assert.throws(() => new LogoProperty(1));
        assert.throws(() => new LogoProperty({}));
        assert.throws(() => new LogoProperty('James Bond'));
      });

      it('Formats value properly', () => {
        assert.strictEqual(
          new LogoProperty(
            [],
            new URIType('http://www.example.com/pub/logos/abccorp.jpg')
          ).repr(),
          "LOGO:http://www.example.com/pub/logos/abccorp.jpg"
        );
      });
    });

    describe('OrgProperty tests', () => {
      it('Accepts valid input', () => {
        assert.doesNotThrow(() => new OrgProperty(
          [],
          new SpecialValueType(
            [
              new TextType('ABC, Inc.'),
              new TextType('North American Division'),
              new TextType('Marketing')
            ],
            'orgproperty'
          )
        ));
      });

      it('Rejects invalid input', () => {
        assert.throws(() => new OrgProperty(
          [
            new IntegerType(55)
          ],
          new IntegerType(55)
        ));
        assert.throws(() => new OrgProperty);
        assert.throws(() => new OrgProperty(1));
        assert.throws(() => new OrgProperty({}));
        assert.throws(() => new OrgProperty('James Bond'));
      });

      it('Formats value properly', () => {
        assert.strictEqual(
          new OrgProperty(
            [],
            new SpecialValueType(
              [
                new TextType('ABC, Inc.'),
                new TextType('North American Division'),
                new TextType('Marketing')
              ],
              'orgproperty'
            )
          ).repr(),
          "ORG:ABC\\, Inc.;North American Division;Marketing"
        );
      });
    });

    describe('MemberProperty tests', () => {
      it('Accepts valid input', () => {
        assert.doesNotThrow(() => new MemberProperty(
          [],
          new URIType('urn:uuid:03a0e51f-d1aa-4385-8a53-e29025acd8af')
        ));
      });

      it('Rejects invalid input', () => {
        assert.throws(() => new MemberProperty(
          [
            new IntegerType(55)
          ],
          new IntegerType(55)
        ));
        assert.throws(() => new MemberProperty);
        assert.throws(() => new MemberProperty(1));
        assert.throws(() => new MemberProperty({}));
        assert.throws(() => new MemberProperty('James Bond'));
      });

      it('Formats value properly', () => {
        assert.strictEqual(
          new MemberProperty(
            [],
            new URIType('urn:uuid:03a0e51f-d1aa-4385-8a53-e29025acd8af')
          ).repr(),
          "MEMBER:urn:uuid:03a0e51f-d1aa-4385-8a53-e29025acd8af"
        );
      });
    });

    describe('RelatedProperty tests', () => {
      it('Accepts valid input', () => {
        assert.doesNotThrow(() => new RelatedProperty(
          [
            new TypeParameter(
              'friend',
              'relatedproperty'
            )
          ],
          new URIType('uuid:f81d4fae-7dec-11d0-a765-00a0c91e6bf6')
        ));

        assert.doesNotThrow(() => new RelatedProperty(
          [
            new TypeParameter('co-worker', 'relatedproperty'),
            new ValueParameter(
              new TextType('Please contact my assistant Jane Doe for any inquiries.')
            )
          ],
          new TextType('Please contact my assistant Jane Doe for any inquiries.')
        ));
      });

      it('Rejects invalid input', () => {
        assert.throws(() => new RelatedProperty(
          [
            new IntegerType(55)
          ],
          new IntegerType(55)
        ));
        assert.throws(() => new RelatedProperty);
        assert.throws(() => new RelatedProperty(1));
        assert.throws(() => new RelatedProperty({}));
        assert.throws(() => new RelatedProperty('James Bond'));
      });

      it('Formats value properly', () => {
        assert.strictEqual(
          new RelatedProperty(
            [
              new TypeParameter('co-worker', 'relatedproperty'),
              new ValueParameter(
                new TextType('Please contact my assistant Jane Doe for any inquiries.')
              )
            ],
            new TextType('Please contact my assistant Jane Doe for any inquiries.')
          ).repr(),
          "RELATED;TYPE=co-worker;VALUE=text:Please contact my assistant Jane Doe for \r\n any inquiries."
        );
      });
    });
  });
});
