import { TextType } from '../values/index';

export class MediatypeParameter {
  readonly value: string;
  readonly valueXML: string;
  readonly valueJSON: string[];
  repr(): string;
  reprXML(): string;
  reprJSON(): Record<string, string | string[]>;
  constructor(mediaValue: TextType | TextType[]);
}
