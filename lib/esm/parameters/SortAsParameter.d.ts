import { BaseParameter } from './BaseParameter.js';
import { TextType } from '../values/TextType.js';
import { TextListType } from '../values/TextListType.js';
import '../values/BaseValue.js';

/**
 * Represents the "SORT-AS" parameter
 * Used to specify the string to be used for national-language-specific
 * sorting
 */
declare class SortAsParameter extends BaseParameter {
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

export { SortAsParameter };
