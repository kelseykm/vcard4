import { BaseParameter } from './BaseParameter.js';
import { ParameterValueType } from '../values/ParameterValueType.js';
import '../values/BaseValue.js';

/**
 * Represents the "ALTID" parameter
 * Used to tag property instances as being alternative representations of the
 * same logical property
 */
declare class AltidParameter extends BaseParameter {
  /**
   * @param altidValue - treated as an opaque string.  Its sole purpose is to
   * be compared for equality against other ALTID parameter values.
   */
  constructor(altidValue: ParameterValueType);
}

export { AltidParameter };
