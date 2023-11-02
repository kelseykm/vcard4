import { BaseParameter } from './BaseParameter.js';
import { IntegerType } from '../values/IntegerType.js';
import '../values/BaseValue.js';

/**
 * Represents the "INDEX" parameter
 * When a property is multi-valued, "INDEX" can be used to indicate an ordering
 * or sequence of the values
 */
declare class IndexParameter extends BaseParameter {
  /**
   * @param indexValue - the value of the `IntegerType` instance should be
   * greater than or equal to 1
   */
  constructor(indexValue: IntegerType);
}

export { IndexParameter };
