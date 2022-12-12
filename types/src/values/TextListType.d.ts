import { BaseValue } from "./BaseValue";
import { TextType } from "./TextType";

/**
 * Represents the "text-list" data type
 */
export class TextListType extends BaseValue {
  reprJSON(): string[];
  constructor(textlist: TextType[]);
}
