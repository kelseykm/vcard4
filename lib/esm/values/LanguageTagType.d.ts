declare class LanguageTagType {
  readonly value: string;
  readonly valueXML: string;
  readonly valueJSON: [string, string];
  repr(): string;
  reprXML(): string;
  reprJSON(): [string, string];
  constructor(langTagValue: string);
}

export { LanguageTagType };
