import { 
  BooleanType,
  TextType,
  DateTimeType,
  IntegerType,
  LanguageTagType,
  URIType,
  FloatType,
  SpecialValueType
} from '../values/index';

export class ValueParameter {
  readonly value: string;
  repr(): string;
  constructor(valType: TextType | BooleanType | DateTimeType | IntegerType | FloatType | LanguageTagType | URIType | SpecialValueType);
}
