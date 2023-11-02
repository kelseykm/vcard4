import { BaseValue } from './BaseValue.js';

/**
 * Represents the "boolean" data type
 */
declare class BooleanType extends BaseValue {
  reprJSON(): [string, boolean];
  constructor(boolValue: boolean);
}

export { BooleanType };
