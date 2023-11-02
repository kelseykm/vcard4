import { BaseValue } from './BaseValue.js';

/**
 * Represents the "text" data type for use with parameters
 */
declare class ParameterValueType extends BaseValue {
  reprJSON(): [string, string];
  constructor(parameterValue: string);
}

export { ParameterValueType };
