import { BaseParameter } from './BaseParameter.js';
import { ParameterValueType } from '../values/ParameterValueType.js';
import '../values/BaseValue.js';

/**
 * Represents the "LABEL" parameter
 * For use with "ADR" property to present a delivery address label for the
 * address.
 */
declare class LabelParameter extends BaseParameter {
  /**
   * @param value - an instance of `ParameterValueType` with the formatted
   * address.
   */
  constructor(value: ParameterValueType);
}

export { LabelParameter };
