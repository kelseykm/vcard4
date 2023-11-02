import { DateTimeType } from './DateTimeType.js';
import { BaseValue } from './BaseValue.js';

/**
 * Represents the "date-list", "time-list", "date-time-list",
 * "date-and-or-time-list" and "timestamp-list" data types
 */
declare class DateTimeListType extends BaseValue {
  reprJSON(): string[];
  /**
   * @param datetimelist - The {@link DateTimeType} instances should all be of the same
   * type, e.g. "date"
   */
  constructor(datetimelist: DateTimeType[]);
}

export { DateTimeListType };
