import { BaseValue } from "./BaseValue";

/**
 * Represents the "language-tag" data type
 */
export class LanguageTagType extends BaseValue {
  reprJSON(): [string, string];
  /**
   * @param langTagValue - Should be formatted as a language tag as defined in
   * RFC 5646
   * @example "en-us"
   */
  constructor(langTagValue: string);
}
