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
import { BaseParameter } from "./BaseParameter";

/**
 * Represents the "VALUE" parameter
 * Used to identify the data type of the value of a property
 */
export class ValueParameter extends BaseParameter {
  /**
   * @param valType - an instance of either one of the value data types. Should
   * be the same as the actual value of the property
   */
  constructor(
    valType:
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
