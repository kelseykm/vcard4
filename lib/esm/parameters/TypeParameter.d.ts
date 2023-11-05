import { BaseParameter } from './BaseParameter.js';
import { ParameterValueType } from '../values/ParameterValueType.js';
import '../values/BaseValue.js';

/**
 * Represents the "TYPE" parameter
 * It is a way of specifying class characteristics of the associated property
 */
declare class TypeParameter extends BaseParameter {
  /**
   * @see For comprehensive usage explanation and examples, see the documentation
   * {@link https://kelseykm.github.io/vcard4/documentation/parameters/typeparameter}
   */
  constructor(
    targetProp: string,
    typeValue: ParameterValueType | ParameterValueType[]
  );
}

export { TypeParameter };
