export class TextType {
  value: string;
  repr(): string;
  constructor(textValue: string);
}

export class TextListType {
  value: string;
  repr(): string;
  constructor(textlist: TextType[]);
}

export class BooleanType {
  value: string;
  repr(): string;
  constructor(boolValue: boolean);
}

export class DateTimeType {
  value: string;
  repr(): string;
  constructor(dateTimeValue: string, type: string);
}

export class DateTimeListType {
  value: string;
  repr(): string;
  constructor(datetimelist: DateTimeType[]);
}

export class IntegerType {
  value: string;
  repr(): string;
  constructor(intValue: number | bigint);
}

export class IntegerListType {
  value: string;
  repr(): string;
  constructor(integerlist: IntegerType[]);
}

export class FloatType {
  value: string;
  repr(): string;
  constructor(floatValue: number);
}

export class FloatListType {
  value: string;
  repr(): string;
  constructor(floatlist: FloatType[]);
}

export class LanguageTagType {
  value: string;
  repr(): string;
  constructor(langTagValue: string);
}

export class URIType {
  value: string;
  repr(): string;
  constructor(uriValue: string);
}

export class SexType {
  value: string;
  repr(): string;
  constructor(sexValue: string);
}

export class SpecialValueType {
  value: string;
  repr(): string;
  constructor(value: (TextType | TextListType)[], targetProp: string);
  constructor(value: [SexType, TextType], targetProp: string);
  constructor(value: [IntegerType, URIType], targetProp: string);
  constructor(value: string, targetProp: string);
}
