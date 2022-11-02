declare class TextType {
  readonly value: string;
  readonly valueXML: string;
  readonly valueJSON: [string, string];
  repr(): string;
  reprXML(): string;
  reprJSON(): [string, string];
  constructor(textValue: string);
}

export { TextType };
