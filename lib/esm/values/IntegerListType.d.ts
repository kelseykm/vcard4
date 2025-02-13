import { BaseValue } from './BaseValue.js';
import { IntegerType } from './IntegerType.js';

/**
 * Represents the "integer-list" data type
 */
declare class IntegerListType extends BaseValue {
  reprJSON(): (string | number | bigint)[];
  constructor(integerlist: IntegerType[]);
}

export { IntegerListType };
