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

export class BeginProperty {
  readonly params: string;
  readonly value: string;
  constructor();
}

export class EndProperty {
  readonly params: string;
  readonly value: string;
  constructor();
}

export class SourceProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (ValueParameter | PIDParameter | PrefParameter | IndexParameter | AltidParameter | MediatypeParameter | AnyParameter)[],
    val: URIType
  );
}

export class KindProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (ValueParameter | AnyParameter)[],
    val: SpecialValueType
  );
}

export class XMLProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (ValueParameter | AltidParameter)[],
    val: TextType
  );
}

export class FNProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (ValueParameter | TypeParameter | LanguageParameter | AltidParameter | PIDParameter | PrefParameter | IndexParameter | AnyParameter)[],
    val: TextType
  );
}

export class NProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (ValueParameter | SortAsParameter | LanguageParameter | AltidParameter | AnyParameter)[],
    val: SpecialValueType
  );
}

export class NicknameProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (ValueParameter | TypeParameter | LanguageParameter | AltidParameter | PIDParameter | PrefParameter | IndexParameter | AnyParameter)[],
    val: TextType| TextListType,
  );
}

export class PhotoProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (ValueParameter | AltidParameter | TypeParameter | MediatypeParameter | PrefParameter | IndexParameter | PIDParameter | AnyParameter)[],
    val: URIType,
  );
}

export class BdayProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (ValueParameter | LanguageParameter | AltidParameter | CalscaleParameter | AnyParameter)[],
    val: DateTimeType | TextType,
  );
}

export class AnniversaryProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (ValueParameter | AltidParameter | CalscaleParameter | AnyParameter)[],
    val: DateTimeType | TextType,
  );
}

export class GenderProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (ValueParameter | AnyParameter)[],
    val: SexType | SpecialValueType,
  );
}

export class BirthPlaceProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (ValueParameter | LanguageParameter | AltidParameter | AnyParameter)[], 
    val: TextType | URIType
  );
}

export class DeathPlaceProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (LanguageParameter | ValueParameter | AltidParameter | AnyParameter)[],
    val: TextType | URIType
  );
}

export class DeathDateProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (LanguageParameter | ValueParameter | AltidParameter | CalscaleParameter | AnyParameter)[],
    val: DateTimeType | TextType
  );
}

export class ExpertiseProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (LanguageParameter | PrefParameter | AltidParameter | TypeParameter | AnyParameter | IndexParameter | LevelParameter)[], 
    val: TextType
  );
}

export class HobbyProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (PrefParameter | AltidParameter | TypeParameter | AnyParameter | IndexParameter | LevelParameter | LanguageParameter)[], 
    val: TextType 
  );
}

export class InterestProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (LanguageParameter | PrefParameter | AltidParameter | TypeParameter | AnyParameter | IndexParameter | LevelParameter)[], 
    val: TextType
  );
}

export class AdrProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (LanguageParameter | ValueParameter | PrefParameter | AltidParameter | PIDParameter | TypeParameter | GeoParameter | TzParameter | AnyParameter | LabelParameter | CCParameter | IndexParameter)[], 
    val: SpecialValueType
  );
}

export class TelProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (ValueParameter | PrefParameter | AltidParameter | PIDParameter | TypeParameter | MediatypeParameter | AnyParameter | IndexParameter)[], 
    val: URIType | TextType
  );
}

export class EmailProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (ValueParameter | PrefParameter | AltidParameter | PIDParameter | TypeParameter | AnyParameter | IndexParameter)[], 
    val: TextType
  );
}

export class IMPPProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (ValueParameter | PrefParameter | AltidParameter | PIDParameter | TypeParameter | MediatypeParameter | AnyParameter | IndexParameter)[], 
    val: URIType
  );
}

export class LangProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (ValueParameter | PrefParameter | AltidParameter | PIDParameter | TypeParameter | AnyParameter | IndexParameter)[], 
    val: LanguageTagType
  );
}

export class ContactURIProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (ValueParameter | PrefParameter | IndexParameter)[], 
    val: URIType
  );
}

export class TzProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (ValueParameter | PrefParameter | AltidParameter | PIDParameter | TypeParameter | MediatypeParameter | AnyParameter | IndexParameter)[], 
    val: TextType | URIType | DateTimeType
  );
}

export class GeoProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (ValueParameter | PrefParameter | AltidParameter | PIDParameter | TypeParameter | MediatypeParameter | AnyParameter | IndexParameter)[], 
    val: URIType
  );
}

export class TitleProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (ValueParameter | PrefParameter | AltidParameter | PIDParameter | TypeParameter | AnyParameter | IndexParameter)[], 
    val: TextType
  );
}

export class RoleProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (LanguageParameter | ValueParameter | PrefParameter | AltidParameter | PIDParameter | TypeParameter | AnyParameter | IndexParameter)[], 
    val: TextType
  );
}

export class LogoProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (LanguageParameter | ValueParameter | PrefParameter | AltidParameter | PIDParameter | TypeParameter | MediatypeParameter | CalscaleParameter | AnyParameter | IndexParameter)[], 
    val: URIType
  );
}

export class OrgProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (LanguageParameter | ValueParameter | PrefParameter | AltidParameter | PIDParameter | TypeParameter | SortAsParameter | AnyParameter | IndexParameter)[], 
    val: SpecialValueType
  );
}

export class MemberProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (ValueParameter | PrefParameter | AltidParameter | PIDParameter | MediatypeParameter | AnyParameter | IndexParameter)[], 
    val: URIType
  );
}

export class RelatedProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (ValueParameter | LanguageParameter | PrefParameter | AltidParameter | PIDParameter | MediatypeParameter | TypeParameter | AnyParameter | IndexParameter)[], 
    val: URIType | TextType
  );
}

export class OrgDirectoryProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (LanguageParameter | PrefParameter | AltidParameter | PIDParameter | TypeParameter | AnyParameter | IndexParameter)[], 
    val: URIType
  );
}

export class CategoriesProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (ValueParameter | PrefParameter | AltidParameter | PIDParameter | TypeParameter | AnyParameter | IndexParameter)[], 
    val: TextType | TextListType
  );
}

export class NoteProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (ValueParameter | LanguageParameter | PrefParameter | AltidParameter | PIDParameter | TypeParameter | AnyParameter | IndexParameter)[], 
    val: TextType
  );
}

export class ProdidProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (ValueParameter | AnyParameter)[], 
    val: TextType
  );
}

export class RevProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (ValueParameter | AnyParameter)[], 
    val: DateTimeType
  );
}

export class SoundProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (LanguageParameter | ValueParameter | PrefParameter | AltidParameter | PIDParameter | TypeParameter | MediatypeParameter | AnyParameter | IndexParameter)[], 
    val: URIType
  );
}

export class UIDProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (ValueParameter | AnyParameter)[], 
    val: URIType | TextType 
  );
}

export class ClientpidmapProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: AnyParameter[], 
    val: SpecialValueType
  );
}

export class URLProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (ValueParameter | PrefParameter | AltidParameter | PIDParameter | TypeParameter | MediatypeParameter | AnyParameter | IndexParameter)[], 
    val: URIType
  );
}

export class VersionProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (ValueParameter | AnyParameter)[], 
    val: TextType
  );
}

export class KeyProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (ValueParameter | PrefParameter | AltidParameter | PIDParameter | TypeParameter | MediatypeParameter | AnyParameter | IndexParameter)[], 
    val: TextType | URIType
  );
}

export class FburlProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (ValueParameter | PrefParameter | AltidParameter | PIDParameter | TypeParameter | MediatypeParameter | AnyParameter | IndexParameter)[], 
    val: URIType
  );
}

export class CaladruriProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (ValueParameter | PrefParameter | AltidParameter | PIDParameter | TypeParameter | MediatypeParameter | AnyParameter | IndexParameter)[], 
    val: URIType
  );
}

export class CaluriProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (ValueParameter | PrefParameter | AltidParameter | PIDParameter | TypeParameter | MediatypeParameter | AnyParameter | IndexParameter)[], 
    val: URIType
  );
}

export class ExtendedProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (LanguageParameter | ValueParameter | PrefParameter | AltidParameter | PIDParameter | TypeParameter | MediatypeParameter | CalscaleParameter | SortAsParameter | GeoParameter | TzParameter | AnyParameter | LabelParameter | CCParameter | IndexParameter | LevelParameter)[],
    val: TextType | TextListType | BooleanType | DateTimeType | IntegerType | FloatType | LanguageTagType | URIType | SexType | SpecialValueType
  );
}
