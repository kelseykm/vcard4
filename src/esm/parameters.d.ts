import {
  TextType,
  TextListType,
  BooleanType,
  DateTimeType,
  IntegerType,
  FloatType,
  LanguageTagType,
  URIType,
  SpecialValueType
} from './values';

export class LanguageParameter {
  value: string;
  repr(): string;
  constructor(langTag: LanguageTagType);
}

export class ValueParameter {
  value: string;
  repr(): string;
  constructor(valType: TextType | BooleanType | DateTimeType | IntegerType | FloatType | LanguageTagType | URIType | SpecialValueType);
}

export class PrefParameter {
  value: string;
  repr(): string;
  constructor(prefValue: IntegerType);
}

export class AltidParameter {
  value: string;
  repr(): string;
  constructor(altidValue: IntegerType | TextType);
}

export class PIDParameter {
  value: string;
  repr(): string;
  constructor(pidValue: IntegerType | IntegerType[] | IntegerType[][]);
  constructor(pidValue: (IntegerType | IntegerType[])[]);
}

export class TypeParameter {
  value: string;
  repr(): string;
  constructor(typeValue: TextType | TextListType, targetProp: string);
}

export class MediatypeParameter {
  value: string;
  repr(): string;
  constructor(mediaValue: TextType | TextType[]);
}

export class CalscaleParameter {
  value: string;
  repr(): string;
  constructor(calscaleValue: TextType);
}

export class SortAsParameter {
  value: string;
  repr(): string;
  constructor(sortValue: TextType | TextListType);
}

export class GeoParameter {
  value: string;
  repr(): string;
  constructor(geoValue: URIType);
}

export class TzParameter {
  value: string;
  repr(): string;
  constructor(tzValue: TextType | URIType | DateTimeType);
}

export class AnyParameter {
  param: string;
  value: string;
  repr(): string;
  constructor(param: string, value: string);
}

export class LabelParameter {
  value: string;
  repr(): string;
  constructor(value: string);
}

export class CCParameter {
  value: string;
  repr(): string;
  constructor(ccValue: TextType);
}

export class IndexParameter {
  value: string;
  repr(): string;
  constructor(indexValue: IntegerType);
}

export class LevelParameter {
  value: string;
  repr(): string;
  constructor(levelValue: TextType, targetProp: string);
}
