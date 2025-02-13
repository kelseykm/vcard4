import { BaseParameter } from './BaseParameter.js';
import { ParameterValueType } from '../values/ParameterValueType.js';
import '../values/BaseValue.js';

/**
 * For creating extended parameters
 */
declare class AnyParameter extends BaseParameter {
  /**
   * @param param - name of the extended parameter. An x-name
   * (name beginning with "X-" or "x-")
   * @param value - an instance of any of the property value data types
   */
  constructor(param: string, value: ParameterValueType);
}

export { AnyParameter };
