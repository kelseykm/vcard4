import { BaseValue } from './BaseValue.js';

/**
 * Represents the "text" data type
 */
declare class TextType extends BaseValue {
  reprJSON(): [string, string];
  constructor(textValue: string);
}

export { TextType };
