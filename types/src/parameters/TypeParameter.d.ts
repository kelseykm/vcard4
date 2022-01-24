import { TextType, TextListType } from '../values/index';

export class TypeParameter {
  readonly value: string;
  readonly valueXML: string;
  readonly valueJSON: string[];
  repr(): string;
  reprXML(): string;
  reprJSON(): Record<string, string | string[]>;
  constructor(typeValue: TextType | TextListType, targetProp: string);
}
