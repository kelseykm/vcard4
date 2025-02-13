import { BaseValue } from './BaseValue.js';

/**
 * Represents the "float" data type
 */
declare class FloatType extends BaseValue {
  reprJSON(): [string, number];
  /**
   * @param floatValue - Must have a decimal point. It may have a sign ("-" or
   * "+").
   * @example "-35.00", 90.234
   */
  constructor(floatValue: number | string);
}

export { FloatType };
