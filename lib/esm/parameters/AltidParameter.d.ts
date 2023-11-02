import { BaseParameter } from './BaseParameter.js';
import { IntegerType } from '../values/IntegerType.js';
import { TextType } from '../values/TextType.js';
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
  constructor(altidValue: IntegerType | TextType);
}

export { AltidParameter };
