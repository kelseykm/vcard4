import { LanguageTagType } from '../values/index';

export class LanguageParameter {
  readonly value: string;
  readonly valueXML: string;
  readonly valueJSON: string[];
  repr(): string;
  reprXML(): string;
  reprJSON(): Record<string, string | string[]>;
  constructor(langTag: LanguageTagType);
}
