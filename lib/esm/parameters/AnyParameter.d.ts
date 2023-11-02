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
 * For creating extended parameters
 */
declare class AnyParameter extends BaseParameter {
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

export { AnyParameter };
