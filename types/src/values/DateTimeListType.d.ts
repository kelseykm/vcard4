import { DateTimeType } from "./DateTimeType";
import { BaseValue } from "./BaseValue";

/**
 * Represents the "date-list", "time-list", "date-time-list",
 * "date-and-or-time-list" and "timestamp-list" data types
 */
export class DateTimeListType extends BaseValue {
  reprJSON(): string[];
  /**
   * @param datetimelist - The {@link DateTimeType} instances should all be of the same
   * type, e.g. "date"
   */
  constructor(datetimelist: DateTimeType[]);
}
