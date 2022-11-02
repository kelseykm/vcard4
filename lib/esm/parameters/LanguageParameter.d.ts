import { LanguageTagType } from '../values/LanguageTagType.js';

declare class LanguageParameter {
  readonly value: string;
  readonly valueXML: string;
  readonly valueJSON: string[];
  repr(): string;
  reprXML(): string;
  reprJSON(): Record<string, string | string[]>;
  constructor(langTag: LanguageTagType);
}

export { LanguageParameter };
