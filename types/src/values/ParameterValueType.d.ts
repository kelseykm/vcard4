import { BaseValue } from "./BaseValue";

/**
 * Represents the "text" data type for use with parameters
 */
export class ParameterValueType extends BaseValue {
  reprJSON(): [string, string];
  constructor(parameterValue: string);
}
