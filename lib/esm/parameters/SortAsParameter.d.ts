import { TextType } from '../values/TextType.js';
import { TextListType } from '../values/TextListType.js';

declare class SortAsParameter {
  readonly value: string;
  readonly valueXML: string;
  readonly valueJSON: string[];
  repr(): string;
  reprXML(): string;
  reprJSON(): Record<string, string | string[]>;
  constructor(sortValue: TextType | TextListType);
}

export { SortAsParameter };
