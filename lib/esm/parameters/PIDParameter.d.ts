import { BaseParameter } from './BaseParameter.js';
import { IntegerType } from '../values/IntegerType.js';
import '../values/BaseValue.js';

/**
 * Represents the "PID" parameter
 * Used to identify a specific property among multiple instances.
 */
declare class PIDParameter extends BaseParameter {
  /**
   * @see For comprehensive usage explanation and examples, see the documentation
   * {@link https://kelseykm.github.io/vcard4/documentation/parameters/pidparameter}
   */
  constructor(pidValue: IntegerType | IntegerType[] | IntegerType[][]);
  constructor(pidValue: (IntegerType | IntegerType[])[]);
}

export { PIDParameter };
