import { TextType, TextListType } from "../values/index";
import { BaseParameter } from "./BaseParameter";

/**
 * Represents the "SORT-AS" parameter
 * Used to specify the string to be used for national-language-specific
 * sorting
 */
export class SortAsParameter extends BaseParameter {
  /**
   * @param sortValue - the value to use for sorting
   * @example
   * new SortAsParameter(
   *  new TextListType([new TextType("Harten"), new TextType("Rene")])
   * );
   *
   * new SortAsParameter(new TextType("Pau Shou Chang"));
   */
  constructor(sortValue: TextType | TextListType);
}
