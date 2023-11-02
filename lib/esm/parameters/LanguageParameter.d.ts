import { BaseParameter } from './BaseParameter.js';
import { LanguageTagType } from '../values/LanguageTagType.js';
import '../values/BaseValue.js';

/**
 * Represents the "LANGUAGE" parameter
 * Used to identify data in multiple languages
 */
declare class LanguageParameter extends BaseParameter {
  /**
   * @param langTag - a language tag
   */
  constructor(langTag: LanguageTagType);
}

export { LanguageParameter };
