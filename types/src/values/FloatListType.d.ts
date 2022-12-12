import { BaseValue } from "./BaseValue";
import { FloatType } from "./FloatType";

/**
 * Represents the "float-list" data type
 */
export class FloatListType extends BaseValue {
  reprJSON(): (string | number)[];
  constructor(floatlist: FloatType[]);
}
