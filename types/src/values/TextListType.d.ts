import { TextType } from './TextType';

export class TextListType {
  readonly value: string;
  repr(): string;
  constructor(textlist: TextType[]);
}
