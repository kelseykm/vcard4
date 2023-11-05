import { BaseValue } from "./BaseValue";

/**
 * Represents the "date", "time", "date-time", "date-and-or-time", "timestamp"
 * and "utc-offset" data types
 */
export class DateTimeType extends BaseValue {
  reprJSON(): [string, string];
  /**
   * @param type - Accepted values include: "date", "time", "datetime",
   * "dateandortime", "timestamp" or "utcoffset"
   * @param dateTimeValue - Format of value depends on value of `type` argument
   * @see for comprehensive usage explanation and examples, see documentation
   * {@link https://kelseykm.github.io/vcard4/documentation/values/datetimetype}
   */
  constructor(type: string, dateTimeValue: string);
}
