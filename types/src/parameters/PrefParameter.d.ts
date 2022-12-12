import { IntegerType } from "../values/index";
import { BaseParameter } from "./BaseParameter";

/**
 * Represents the "PREF" parameter
 * Used to indicate that the corresponding instance of a property is preferred
 * by the vCard author.
 */
export class PrefParameter extends BaseParameter {
  /**
   * @param prefValue - an instance of `IntegerType` type whose value is an
   * integer between 1 and 100 that quantifies the level of preference.  Lower
   * values correspond to a higher level of preference, with 1 being most
   * preferred.
   */
  constructor(prefValue: IntegerType);
}
