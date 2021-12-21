import { TextType, TextListType } from '../values/index';

export class TypeParameter {
  readonly value: string;
  repr(): string;
  constructor(typeValue: TextType | TextListType, targetProp: string);
}
