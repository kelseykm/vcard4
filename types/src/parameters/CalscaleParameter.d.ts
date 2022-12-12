import { TextType } from "../values/index";
import { BaseParameter } from "./BaseParameter";

/**
 * Represents the "CALSCALE" parameter
 * Used to define the calendar system in which a "date" or "date-time" value is
 * expressed.
 */
export class CalscaleParameter extends BaseParameter {
  /**
   * @param calscaleValue - the value of the `TextType` instance should be
   * either "gregorian" or an x-name (a name beginning with "X-" or "x-")
   */
  constructor(calscaleValue: TextType);
}
