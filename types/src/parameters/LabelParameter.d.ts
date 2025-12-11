import { BaseParameter } from "./BaseParameter";
import { ParameterValueType } from "../values/index"

/**
 * Represents the "LABEL" parameter
 * For use with "ADR" property to present a delivery address label for the
 * address.
 */
export class LabelParameter extends BaseParameter {
  /**
   * @param value - an instance of `ParameterValueType` with the formatted
   * address.
   */
  constructor(value: ParameterValueType);
}
