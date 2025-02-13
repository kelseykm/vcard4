import { BaseValue } from './BaseValue.js';
import { TextType } from './TextType.js';

/**
 * Represents the "text-list" data type
 */
declare class TextListType extends BaseValue {
  reprJSON(): string[];
  constructor(textlist: TextType[]);
}

export { TextListType };
