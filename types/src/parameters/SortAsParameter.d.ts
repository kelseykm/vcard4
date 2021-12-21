import { TextType, TextListType } from '../values/index';

export class SortAsParameter {
  readonly value: string;
  repr(): string;
  constructor(sortValue: TextType | TextListType);
}
