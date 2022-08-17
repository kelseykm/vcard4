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
  SpecialValueType,
} from "../values/index";

export class AnyParameter {
  readonly value: string;
  readonly valueXML: string;
  readonly valueJSON: (string | number | bigint)[];
  repr(): string;
  reprXML(): string;
  reprJSON(): Record<string, string | string[]>;
  constructor(
    param: string,
    value:
      | TextType
      | TextListType
      | BooleanType
      | DateTimeType
      | DateTimeListType
      | IntegerType
      | IntegerListType
      | FloatType
      | FloatListType
      | LanguageTagType
      | URIType
      | SexType
      | SpecialValueType
  );
}
