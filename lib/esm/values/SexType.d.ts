declare class SexType {
  readonly value: string;
  readonly valueXML: string;
  readonly valueJSON: [string, string];
  repr(): string;
  reprXML(): string;
  reprJSON(): [string, string];
  constructor(sexValue: string);
}

export { SexType };
