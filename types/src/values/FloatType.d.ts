import { BaseValue } from "./BaseValue";

/**
 * Represents the "float" data type
 */
export class FloatType extends BaseValue {
  reprJSON(): [string, number];
  /**
   * @param floatValue - Must have a decimal point. It may have a sign ("-" or
   * "+").
   * @example "-35.00", 90.234
   */
  constructor(floatValue: number | string);
}
