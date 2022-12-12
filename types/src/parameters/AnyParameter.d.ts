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
import {BaseParameter} from "./BaseParameter";

/**
 * For creating extended parameters
 */
export class AnyParameter extends BaseParameter {
  /**
   * @param param - name of the extended parameter. Either an identifier
   * registered with IANA or an x-name (name beginning with "X-" or "x-")
   * @param value - an instance of any of the property value data types
   */
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
