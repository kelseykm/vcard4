import { BaseParameter } from './BaseParameter.js';
import { ParameterValueType } from '../values/ParameterValueType.js';
import '../values/BaseValue.js';

/**
 * Represents the "CC" parameter.
 * Used to extend the "ADR" property
 */
declare class CCParameter extends BaseParameter {
  /**
   * @param ccValue - the value of the `ParameterValueType` instance should be 2
   * alphanumeric characters representing the the ISO 3166 [ISO.3166.1988]
   * two-character country code associated with the "country name" ADR
   * component
   * @example "US"
   */
  constructor(ccValue: ParameterValueType);
}

export { CCParameter };
