import { TextType } from '../values/TextType.js';

declare class MediatypeParameter {
  readonly value: string;
  readonly valueXML: string;
  readonly valueJSON: string[];
  repr(): string;
  reprXML(): string;
  reprJSON(): Record<string, string | string[]>;
  constructor(mediaValue: TextType | TextType[]);
}

export { MediatypeParameter };
