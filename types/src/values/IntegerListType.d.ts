import { BaseValue } from "./BaseValue";
import { IntegerType } from "./IntegerType";

/**
 * Represents the "integer-list" data type
 */
export class IntegerListType extends BaseValue {
  reprJSON(): (string | number | bigint)[];
  constructor(integerlist: IntegerType[]);
}
