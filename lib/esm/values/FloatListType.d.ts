import { BaseValue } from './BaseValue.js';
import { FloatType } from './FloatType.js';

/**
 * Represents the "float-list" data type
 */
declare class FloatListType extends BaseValue {
  reprJSON(): (string | number)[];
  constructor(floatlist: FloatType[]);
}

export { FloatListType };
