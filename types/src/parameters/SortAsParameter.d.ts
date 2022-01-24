import { TextType, TextListType } from '../values/index';

export class SortAsParameter {
  readonly value: string;
  readonly valueXML: string;
  readonly valueJSON: string[];
  repr(): string;
  reprXML(): string;
  reprJSON(): Record<string, string | string[]>;
  constructor(sortValue: TextType | TextListType);
}
