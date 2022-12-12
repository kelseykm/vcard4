import { TextType } from "../values/index";
import { BaseParameter } from "./BaseParameter";

/**
 * Represents the "CC" parameter.
 * Used to extend the "ADR" property
 */
export class CCParameter extends BaseParameter {
  /**
   * @param ccValue - the value of the `TextType` instance should be 2
   * alphanumeric characters representing the the ISO 3166 [ISO.3166.1988]
   * two-character country code associated with the "country name" ADR
   * component
   * @example "US"
   */
  constructor(ccValue: TextType);
}
