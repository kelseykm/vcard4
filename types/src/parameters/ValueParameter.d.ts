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
} from '../values/index';

export class ValueParameter {
  readonly value: string;
  readonly valueXML: string;
  readonly valueJSON: string[];
  repr(): string;
  reprXML(): string;
  reprJSON(): Record<string, string | string[]>;
  constructor(valType: TextType | TextListType | BooleanType | DateTimeType | DateTimeListType | IntegerType | IntegerListType | FloatType | FloatListType | LanguageTagType | URIType | SexType | SpecialValueType);
}
