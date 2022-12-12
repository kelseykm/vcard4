import { IntegerType } from "../values/index";
import { BaseParameter } from "./BaseParameter";

/**
 * Represents the "PID" parameter
 * Used to identify a specific property among multiple instances.
 */
export class PIDParameter extends BaseParameter {
  /**
   * @see For comprehensive usage explanation and examples, see the documentation
   * {@link https://kelseykm.github.io/vcard4/documentation/parameters/pidparameter}
   */
  constructor(pidValue: IntegerType | IntegerType[] | IntegerType[][]);
  constructor(pidValue: (IntegerType | IntegerType[])[]);
}
