import { LanguageTagType } from "../values/index";
import { BaseParameter } from "./BaseParameter";

/**
 * Represents the "LANGUAGE" parameter
 * Used to identify data in multiple languages
 */
export class LanguageParameter extends BaseParameter {
  /**
   * @param langTag - a language tag
   */
  constructor(langTag: LanguageTagType);
}
