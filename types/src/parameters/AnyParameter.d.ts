import { ParameterValueType } from "../values/index";
import { BaseParameter } from "./BaseParameter";

/**
 * For creating extended parameters
 */
export class AnyParameter extends BaseParameter {
  /**
   * @param param - name of the extended parameter. An x-name
   * (name beginning with "X-" or "x-")
   * @param value - an instance of any of the property value data types
   */
  constructor(param: string, value: ParameterValueType);
}
