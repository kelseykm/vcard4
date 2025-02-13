import { BaseParameter } from './BaseParameter.js';

/**
 * Represents the "LABEL" parameter
 * For use with "ADR" property to present a delivery address label for the
 * address.
 */
declare class LabelParameter extends BaseParameter {
  /**
   * @param value - plain-text string representing the formatted address.
   * @example
   * "Mr. John Q. Public, Esq.\nMail Drop: TNE QB\n123 Main Street\nAny Town, CA  91921-1234\nU.S.A."
   */
  constructor(value: string);
}

export { LabelParameter };
