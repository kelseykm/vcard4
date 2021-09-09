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

const {
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
} = require('../src/cjs/properties');

const { assert } = require('chai');

describe('CJS properties tests', () => {
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
});
