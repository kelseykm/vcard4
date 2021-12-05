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
} from './values';

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
  LabelParameter,
  CCParameter,
  IndexParameter,
  LevelParameter
} from './parameters';

declare type ParamList = (LanguageParameter | ValueParameter | PrefParameter | AltidParameter | PIDParameter | TypeParameter | MediatypeParameter | CalscaleParameter | SortAsParameter | GeoParameter | TzParameter | AnyParameter | LabelParameter | CCParameter | IndexParameter | LevelParameter)[];

declare type ValueType = TextType | TextListType | BooleanType | DateTimeType | IntegerType | FloatType | LanguageTagType | URIType | SexType | SpecialValueType;

export class BeginProperty {
  params: string;
  value: string;
  constructor();
}

export class EndProperty {
  params: string;
  value: string;
  constructor();
}

export class SourceProperty {
  params: string;
  value: string;
  constructor(
    params: (ValueParameter | PIDParameter | PrefParameter | IndexParameter | AltidParameter | MediatypeParameter | AnyParameter)[],
    val: URIType
  );
}

export class KindProperty {
  params: string;
  value: string;
  constructor(
    params: (ValueParameter | AnyParameter)[],
    val: SpecialValueType
  );
}

export class XMLProperty {
  params: string;
  value: string;
  constructor(
    params: (ValueParameter | AltidParameter)[],
    val: TextType
  );
}

export class FNProperty {
  params: string;
  value: string;
  constructor(
    params: (ValueParameter | TypeParameter | LanguageParameter | AltidParameter | PIDParameter | PrefParameter | IndexParameter | AnyParameter)[],
    val: TextType
  );
}

export class NProperty {
  params: string;
  value: string;
  constructor(
    params: (ValueParameter | SortAsParameter | LanguageParameter | AltidParameter | AnyParameter)[],
    val: SpecialValueType
  );
}

export class NicknameProperty {
  params: string;
  value: string;
  constructor(
    params: (ValueParameter | TypeParameter | LanguageParameter | AltidParameter | PIDParameter | PrefParameter | IndexParameter | AnyParameter)[],
    val: TextType| TextListType,
  );
}

export class PhotoProperty {
  params: string;
  value: string;
  constructor(
    params: (ValueParameter | AltidParameter | TypeParameter | MediatypeParameter | PrefParameter | IndexParameter | PIDParameter | AnyParameter)[],
    val: URIType,
  );
}

export class BdayProperty {
  params: string;
  value: string;
  constructor(
    params: (ValueParameter | LanguageParameter | AltidParameter | CalscaleParameter | AnyParameter)[],
    val: DateTimeType | TextType,
  );
}

export class AnniversaryProperty {
  params: string;
  value: string;
  constructor(
    params: (ValueParameter | AltidParameter | CalscaleParameter | AnyParameter)[],
    val: DateTimeType | TextType,
  );
}

export class GenderProperty {
  params: string;
  value: string;
  constructor(
    params: (ValueParameter | AnyParameter)[],
    val: SexType | SpecialValueType,
  );
}

export class BirthPlaceProperty {
  params: string;
  value: string;
  constructor(
    params: (ValueParameter | LanguageParameter | AltidParameter | AnyParameter)[], 
    val: TextType | URIType
  );
}

export class DeathPlaceProperty {
  params: string;
  value: string;
  constructor(
    params: (LanguageParameter | ValueParameter | AltidParameter | AnyParameter)[],
    val: TextType | URIType
  );
}

export class DeathDateProperty {
  params: string;
  value: string;
  constructor(
    params: (LanguageParameter | ValueParameter | AltidParameter | CalscaleParameter | AnyParameter)[],
    val: DateTimeType | TextType
  );
}

export class ExpertiseProperty {
  params: string;
  value: string;
  constructor(
    params: (LanguageParameter | PrefParameter | AltidParameter | TypeParameter | AnyParameter | IndexParameter | LevelParameter)[], 
    val: TextType
  );
}

export class HobbyProperty {
  params: string;
  value: string;
  constructor(
    params: (PrefParameter | AltidParameter | TypeParameter | AnyParameter | IndexParameter | LevelParameter | LanguageParameter)[], 
    val: TextType 
  );
}

export class InterestProperty {
  params: string;
  value: string;
  constructor(
    params: (LanguageParameter | PrefParameter | AltidParameter | TypeParameter | AnyParameter | IndexParameter | LevelParameter)[], 
    val: TextType
  );
}

export class AdrProperty {
  params: string;
  value: string;
  constructor(
    params: (LanguageParameter | ValueParameter | PrefParameter | AltidParameter | PIDParameter | TypeParameter | GeoParameter | TzParameter | AnyParameter | LabelParameter | CCParameter | IndexParameter)[], 
    val: SpecialValueType
  );
}

export class TelProperty {
  params: string;
  value: string;
  constructor(
    params: (ValueParameter | PrefParameter | AltidParameter | PIDParameter | TypeParameter | MediatypeParameter | AnyParameter | IndexParameter)[], 
    val: URIType | TextType
  );
}

export class EmailProperty {
  params: string;
  value: string;
  constructor(
    params: (ValueParameter | PrefParameter | AltidParameter | PIDParameter | TypeParameter | AnyParameter | IndexParameter)[], 
    val: TextType
  );
}

export class IMPPProperty {
  params: string;
  value: string;
  constructor(
    params: (ValueParameter | PrefParameter | AltidParameter | PIDParameter | TypeParameter | MediatypeParameter | AnyParameter | IndexParameter)[], 
    val: URIType
  );
}

export class LangProperty {
  params: string;
  value: string;
  constructor(
    params: (ValueParameter | PrefParameter | AltidParameter | PIDParameter | TypeParameter | AnyParameter | IndexParameter)[], 
    val: LanguageTagType
  );
}

export class ContactURIProperty {
  params: string;
  value: string;
  constructor(
    params: (ValueParameter | PrefParameter | IndexParameter)[], 
    val: URIType
  );
}

export class TzProperty {
  params: string;
  value: string;
  constructor(
    params: (ValueParameter | PrefParameter | AltidParameter | PIDParameter | TypeParameter | MediatypeParameter | AnyParameter | IndexParameter)[], 
    val: TextType | URIType | DateTimeType
  );
}

export class GeoProperty {
  params: string;
  value: string;
  constructor(
    params: (ValueParameter | PrefParameter | AltidParameter | PIDParameter | TypeParameter | MediatypeParameter | AnyParameter | IndexParameter)[], 
    val: URIType
  );
}

export class TitleProperty {
  params: string;
  value: string;
  constructor(
    params: (ValueParameter | PrefParameter | AltidParameter | PIDParameter | TypeParameter | AnyParameter | IndexParameter)[], 
    val: TextType
  );
}

export class RoleProperty {
  params: string;
  value: string;
  constructor(
    params: (LanguageParameter | ValueParameter | PrefParameter | AltidParameter | PIDParameter | TypeParameter | AnyParameter | IndexParameter)[], 
    val: TextType
  );
}

export class LogoProperty {
  params: string;
  value: string;
  constructor(
    params: (LanguageParameter | ValueParameter | PrefParameter | AltidParameter | PIDParameter | TypeParameter | MediatypeParameter | CalscaleParameter | AnyParameter | IndexParameter)[], 
    val: URIType
  );
}

export class OrgProperty {
  params: string;
  value: string;
  constructor(
    params: (LanguageParameter | ValueParameter | PrefParameter | AltidParameter | PIDParameter | TypeParameter | SortAsParameter | AnyParameter | IndexParameter)[], 
    val: SpecialValueType
  );
}

export class MemberProperty {
  params: string;
  value: string;
  constructor(
    params: (ValueParameter | PrefParameter | AltidParameter | PIDParameter | MediatypeParameter | AnyParameter | IndexParameter)[], 
    val: URIType
  );
}

export class RelatedProperty {
  params: string;
  value: string;
  constructor(
    params: (ValueParameter | LanguageParameter | PrefParameter | AltidParameter | PIDParameter | MediatypeParameter | TypeParameter | AnyParameter | IndexParameter)[], 
    val: URIType | TextType
  );
}

export class OrgDirectoryProperty {
  params: string;
  value: string;
  constructor(
    params: (LanguageParameter | PrefParameter | AltidParameter | PIDParameter | TypeParameter | AnyParameter | IndexParameter)[], 
    val: URIType
  );
}

export class CategoriesProperty {
  params: string;
  value: string;
  constructor(
    params: (ValueParameter | PrefParameter | AltidParameter | PIDParameter | TypeParameter | AnyParameter | IndexParameter)[], 
    val: TextType | TextListType
  );
}

export class NoteProperty {
  params: string;
  value: string;
  constructor(
    params: (ValueParameter | LanguageParameter | PrefParameter | AltidParameter | PIDParameter | TypeParameter | AnyParameter | IndexParameter)[], 
    val: TextType
  );
}

export class ProdidProperty {
  params: string;
  value: string;
  constructor(
    params: (ValueParameter | AnyParameter)[], 
    val: TextType
  );
}

export class RevProperty {
  params: string;
  value: string;
  constructor(
    params: (ValueParameter | AnyParameter)[], 
    val: DateTimeType
  );
}

export class SoundProperty {
  params: string;
  value: string;
  constructor(
    params: (LanguageParameter | ValueParameter | PrefParameter | AltidParameter | PIDParameter | TypeParameter | MediatypeParameter | AnyParameter | IndexParameter)[], 
    val: URIType
  );
}

export class UIDProperty {
  params: string;
  value: string;
  constructor(
    params: (ValueParameter | AnyParameter)[], 
    val: URIType | TextType 
  );
}

export class ClientpidmapProperty {
  params: string;
  value: string;
  constructor(
    params: AnyParameter[], 
    val: SpecialValueType
  );
}

export class URLProperty {
  params: string;
  value: string;
  constructor(
    params: (ValueParameter | PrefParameter | AltidParameter | PIDParameter | TypeParameter | MediatypeParameter | AnyParameter | IndexParameter)[], 
    val: URIType
  );
}

export class VersionProperty {
  params: string;
  value: string;
  constructor(
    params: (ValueParameter | AnyParameter)[], 
    val: TextType
  );
}

export class KeyProperty {
  params: string;
  value: string;
  constructor(
    params: (ValueParameter | PrefParameter | AltidParameter | PIDParameter | TypeParameter | MediatypeParameter | AnyParameter | IndexParameter)[], 
    val: TextType | URIType
  );
}

export class FburlProperty {
  params: string;
  value: string;
  constructor(
    params: (ValueParameter | PrefParameter | AltidParameter | PIDParameter | TypeParameter | MediatypeParameter | AnyParameter | IndexParameter)[], 
    val: URIType
  );
}

export class CaladruriProperty {
  params: string;
  value: string;
  constructor(
    params: (ValueParameter | PrefParameter | AltidParameter | PIDParameter | TypeParameter | MediatypeParameter | AnyParameter | IndexParameter)[], 
    val: URIType
  );
}

export class CaluriProperty {
  params: string;
  value: string;
  constructor(
    params: (ValueParameter | PrefParameter | AltidParameter | PIDParameter | TypeParameter | MediatypeParameter | AnyParameter | IndexParameter)[], 
    val: URIType
  );
}

export class ExtendedProperty {
  params: string;
  value: string;
  constructor(
    params: (LanguageParameter | ValueParameter | PrefParameter | AltidParameter | PIDParameter | TypeParameter | MediatypeParameter | CalscaleParameter | SortAsParameter | GeoParameter | TzParameter | AnyParameter | LabelParameter | CCParameter | IndexParameter | LevelParameter)[],
    val: TextType | TextListType | BooleanType | DateTimeType | IntegerType | FloatType | LanguageTagType | URIType | SexType | SpecialValueType
  );
}
