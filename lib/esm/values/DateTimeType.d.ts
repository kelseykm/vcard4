import { BaseValue } from './BaseValue.js';

/**
 * Represents the "date", "time", "date-time", "date-and-or-time", "timestamp"
 * and "utc-offset" data types
 */
declare class DateTimeType extends BaseValue {
  reprJSON(): [string, string];
  /**
   * @param dateTimeValue - Format of value depends on value of `type` argument
   * @param type - Accepted values include: "date", "time", "datetime",
   * "dateandortime", "timestamp" or "utcoffset"
   * @see for comprehensive usage explanation and examples, see documentation
   * {@link https://kelseykm.github.io/vcard4/documentation/values/datetimetype}
   */
  constructor(dateTimeValue: string, type: string);
}

export { DateTimeType };
