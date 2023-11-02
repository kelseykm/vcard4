import { BaseParameter } from './BaseParameter.js';
import { TextType } from '../values/TextType.js';
import '../values/BaseValue.js';

/**
 * Represents the "CALSCALE" parameter
 * Used to define the calendar system in which a "date" or "date-time" value is
 * expressed.
 */
declare class CalscaleParameter extends BaseParameter {
  /**
   * @param calscaleValue - the value of the `TextType` instance should be
   * either "gregorian" or an x-name (a name beginning with "X-" or "x-")
   */
  constructor(calscaleValue: TextType);
}

export { CalscaleParameter };
