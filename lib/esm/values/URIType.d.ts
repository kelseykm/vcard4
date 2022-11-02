declare class URIType {
  readonly value: string;
  readonly valueXML: string;
  readonly valueJSON: [string, string];
  repr(): string;
  reprXML(): string;
  reprJSON(): [string, string];
  constructor(uriValue: string);
}

export { URIType };
