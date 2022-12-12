import { IntegerType } from "../values/index";
import { BaseParameter } from "./BaseParameter";

/**
 * Represents the "INDEX" parameter
 * When a property is multi-valued, "INDEX" can be used to indicate an ordering
 * or sequence of the values
 */
export class IndexParameter extends BaseParameter {
  /**
   * @param indexValue - the value of the `IntegerType` instance should be
   * greater than or equal to 1
   */
  constructor(indexValue: IntegerType);
}
