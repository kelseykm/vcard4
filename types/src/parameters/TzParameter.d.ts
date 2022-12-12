import { DateTimeType, TextType, URIType } from "../values/index";
import { BaseParameter } from "./BaseParameter";

/**
 * Represents the "TZ" parameter
 * Used to indicate time zone information that is specific to an address
 */
export class TzParameter extends BaseParameter {
  /**
   * @param tzValue - when the value is an instance of `DateTimeType`, its type
   * must be "utcoffset"
   */
  constructor(tzValue: TextType | URIType | DateTimeType);
}
