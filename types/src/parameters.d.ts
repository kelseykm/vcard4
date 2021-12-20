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
  readonly value: string;
  repr(): string;
  constructor(langTag: LanguageTagType);
}

export class ValueParameter {
  readonly value: string;
  repr(): string;
  constructor(valType: TextType | BooleanType | DateTimeType | IntegerType | FloatType | LanguageTagType | URIType | SpecialValueType);
}

export class PrefParameter {
  readonly value: string;
  repr(): string;
  constructor(prefValue: IntegerType);
}

export class AltidParameter {
  readonly value: string;
  repr(): string;
  constructor(altidValue: IntegerType | TextType);
}

export class PIDParameter {
  readonly value: string;
  repr(): string;
  constructor(pidValue: IntegerType | IntegerType[] | IntegerType[][]);
  constructor(pidValue: (IntegerType | IntegerType[])[]);
}

export class TypeParameter {
  readonly value: string;
  repr(): string;
  constructor(typeValue: TextType | TextListType, targetProp: string);
}

export class MediatypeParameter {
  readonly value: string;
  repr(): string;
  constructor(mediaValue: TextType | TextType[]);
}

export class CalscaleParameter {
  readonly value: string;
  repr(): string;
  constructor(calscaleValue: TextType);
}

export class SortAsParameter {
  readonly value: string;
  repr(): string;
  constructor(sortValue: TextType | TextListType);
}

export class GeoParameter {
  readonly value: string;
  repr(): string;
  constructor(geoValue: URIType);
}

export class TzParameter {
  readonly value: string;
  repr(): string;
  constructor(tzValue: TextType | URIType | DateTimeType);
}

export class AnyParameter {
  readonly param: string;
  readonly value: string;
  repr(): string;
  constructor(param: string, value: string);
}

export class LabelParameter {
  readonly value: string;
  repr(): string;
  constructor(value: string);
}

export class CCParameter {
  readonly value: string;
  repr(): string;
  constructor(ccValue: TextType);
}

export class IndexParameter {
  readonly value: string;
  repr(): string;
  constructor(indexValue: IntegerType);
}

export class LevelParameter {
  readonly value: string;
  repr(): string;
  constructor(levelValue: TextType, targetProp: string);
}
