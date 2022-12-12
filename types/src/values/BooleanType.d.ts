import { BaseValue } from "./BaseValue";

/**
 * Represents the "boolean" data type
 */
export class BooleanType extends BaseValue {
  reprJSON(): [string, boolean];
  constructor(boolValue: boolean);
}
