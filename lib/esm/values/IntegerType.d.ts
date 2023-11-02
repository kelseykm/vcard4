import { BaseValue } from './BaseValue.js';

/**
 * Represents the "integer" data type
 */
declare class IntegerType extends BaseValue {
  reprJSON(): [string, number | bigint];
  /**
   * @param intValue - The value may be signed (+/-). The maximum value is
   * 9223372036854775807n, and the minimum value is -9223372036854775808n when
   * using bigint values, but when using values of type number, the maximum
   * number is `Number.MAX_SAFE_INTEGER` and the minimum is
   * `Number.MIN_SAFE_INTEGER`
   */
  constructor(intValue: number | bigint);
}

export { IntegerType };
