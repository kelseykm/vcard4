import { BaseParameter } from './BaseParameter.js';
import { TextType } from '../values/TextType.js';
import { URIType } from '../values/URIType.js';
import { DateTimeType } from '../values/DateTimeType.js';
import '../values/BaseValue.js';

/**
 * Represents the "TZ" parameter
 * Used to indicate time zone information that is specific to an address
 */
declare class TzParameter extends BaseParameter {
  /**
   * @param tzValue - when the value is an instance of `DateTimeType`, its type
   * must be "utcoffset"
   */
  constructor(tzValue: TextType | URIType | DateTimeType);
}

export { TzParameter };
