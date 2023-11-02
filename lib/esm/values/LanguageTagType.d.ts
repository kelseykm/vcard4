import { BaseValue } from './BaseValue.js';

/**
 * Represents the "language-tag" data type
 */
declare class LanguageTagType extends BaseValue {
  reprJSON(): [string, string];
  /**
   * @param langTagValue - Should be formatted as a language tag as defined in
   * RFC 5646
   * @example "en-us"
   */
  constructor(langTagValue: string);
}

export { LanguageTagType };
