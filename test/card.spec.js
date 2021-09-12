import {
  TextType,
  TextListType,
  BooleanType,
  DateTimeType,
  IntegerType,
  FloatType,
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

import VCARD from '../src/esm/card.js';

import { assert } from 'chai';

describe('ESM VCARD tests', () => {
  it('Accepts valid input', () => {
    assert.doesNotThrow(() => new VCARD([
      new FNProperty(
        [],
        new TextType('James Bond')
      )
    ]));
  });

  it('Rejects invalid input', () => {
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
  });
});
