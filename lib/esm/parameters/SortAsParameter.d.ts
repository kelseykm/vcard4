import { BaseParameter } from './BaseParameter.js';
import { ParameterValueType } from '../values/ParameterValueType.js';
import '../values/BaseValue.js';

/**
 * Represents the "SORT-AS" parameter
 * Used to specify the string to be used for national-language-specific
 * sorting
 */
declare class SortAsParameter extends BaseParameter {
  /**
   * @param sortValue - the value to use for sorting
   * @example
   * new SortAsParameter(
   *  [new ParameterValueType("Harten"), new ParameterValueType("Rene")]
   * );
   *
   * new SortAsParameter(new ParameterValueType("Pau Shou Chang"));
   */
  constructor(sortValue: ParameterValueType | ParameterValueType[]);
}

export { SortAsParameter };
