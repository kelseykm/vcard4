import { BaseValue } from "./BaseValue";

/**
 * For use with the {@link GenderProperty}
 */
export class SexType extends BaseValue {
  reprJSON(): [string, string];
  /**
   * @param sexValue - "M" stands for "male", "F" stands for "female", "O"
   * stands for "other", "N" stands for "none or not applicable", "U" stands
   * for "unknown".
   */
  constructor(sexValue: "M" | "F" | "O" | "N" | "U");
}
