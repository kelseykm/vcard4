import { BaseValue } from "./BaseValue";

/**
 * Represents the "text" data type
 */
export class TextType extends BaseValue {
  reprJSON(): [string, string];
  constructor(textValue: string);
}
