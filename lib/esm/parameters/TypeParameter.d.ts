import { TextType } from '../values/TextType.js';
import { TextListType } from '../values/TextListType.js';

declare class TypeParameter {
  readonly value: string;
  readonly valueXML: string;
  readonly valueJSON: string[];
  repr(): string;
  reprXML(): string;
  reprJSON(): Record<string, string | string[]>;
  constructor(typeValue: TextType | TextListType, targetProp: string);
}

export { TypeParameter };
