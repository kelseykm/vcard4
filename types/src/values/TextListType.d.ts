import { TextType } from './TextType';

export class TextListType {
  readonly value: string;
  readonly valueXML: string;
  readonly valueJSON: string[];
  repr(): string;
  reprXML(): string;
  reprJSON(): string[];
  constructor(textlist: TextType[]);
}
