import { TextType } from '../values/TextType.js';

declare class CCParameter {
  readonly value: string;
  readonly valueXML: string;
  readonly valueJSON: string[];
  repr(): string;
  reprXML(): string;
  reprJSON(): Record<string, string | string[]>;
  constructor(ccValue: TextType);
}

export { CCParameter };
