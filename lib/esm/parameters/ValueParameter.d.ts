import { BaseParameter } from './BaseParameter.js';
import { TextType } from '../values/TextType.js';
import { TextListType } from '../values/TextListType.js';
import { BooleanType } from '../values/BooleanType.js';
import { DateTimeType } from '../values/DateTimeType.js';
import { DateTimeListType } from '../values/DateTimeListType.js';
import { IntegerType } from '../values/IntegerType.js';
import { IntegerListType } from '../values/IntegerListType.js';
import { FloatType } from '../values/FloatType.js';
import { FloatListType } from '../values/FloatListType.js';
import { LanguageTagType } from '../values/LanguageTagType.js';
import { URIType } from '../values/URIType.js';
import { SexType } from '../values/SexType.js';
import { SpecialValueType } from '../values/SpecialValueType.js';
import '../values/BaseValue.js';

/**
 * Represents the "VALUE" parameter
 * Used to identify the data type of the value of a property
 */
declare class ValueParameter extends BaseParameter {
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

export { ValueParameter };
