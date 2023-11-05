import { ParameterValueType } from "../values/index";
import { BaseParameter } from "./BaseParameter";

/**
 * Represents the "LEVEL" parameter
 * For use with "EXPERTISE", "HOBBY" and "INTEREST" properties
 * Used to indicate a level of expertise, hobby, or interest attained by the
 * object the vCard represents.
 */
export class LevelParameter extends BaseParameter {
  /**
   * @param targetProp - case insensitive string specifying the target
   * property. Its value should be either "ExpertiseProperty", "HobbyProperty"
   * or "InterestProperty"
   *
   * @param levelValue - the value of the `ParameterValueType` instance should be either
   * "beginner", "average", "expert", "high", "medium" or "low", depending on
   * the value of the `targetProp` argument.
   * When the `targetProp` is "ExpertiseProperty", the only valid values are
   * "beginner", "average" and "expert".
   * When the `targetProp` is either "HobbyProperty" or "InterestProperty", the
   * only valid values are "high", "medium" and "low".
   */
  constructor(targetProp: string, levelValue: ParameterValueType);
}
