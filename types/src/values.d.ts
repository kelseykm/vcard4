export class TextType {
  readonly value: string;
  repr(): string;
  constructor(textValue: string);
}

export class TextListType {
  readonly value: string;
  repr(): string;
  constructor(textlist: TextType[]);
}

export class BooleanType {
  readonly value: string;
  repr(): string;
  constructor(boolValue: boolean);
}

export class DateTimeType {
  readonly value: string;
  repr(): string;
  constructor(dateTimeValue: string, type: string);
}

export class DateTimeListType {
  readonly value: string;
  repr(): string;
  constructor(datetimelist: DateTimeType[]);
}

export class IntegerType {
  readonly value: string;
  repr(): string;
  constructor(intValue: number | bigint);
}

export class IntegerListType {
  readonly value: string;
  repr(): string;
  constructor(integerlist: IntegerType[]);
}

export class FloatType {
  readonly value: string;
  repr(): string;
  constructor(floatValue: number);
}

export class FloatListType {
  readonly value: string;
  repr(): string;
  constructor(floatlist: FloatType[]);
}

export class LanguageTagType {
  readonly value: string;
  repr(): string;
  constructor(langTagValue: string);
}

export class URIType {
  readonly value: string;
  repr(): string;
  constructor(uriValue: string);
}

export class SexType {
  readonly value: string;
  repr(): string;
  constructor(sexValue: string);
}

export class SpecialValueType {
  readonly value: string;
  repr(): string;
  constructor(value: (TextType | TextListType)[], targetProp: string);
  constructor(value: [SexType, TextType], targetProp: string);
  constructor(value: [IntegerType, URIType], targetProp: string);
  constructor(value: string, targetProp: string);
}
