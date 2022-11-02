declare class BooleanType {
  readonly value: string;
  readonly valueXML: string;
  readonly valueJSON: [string, boolean];
  repr(): string;
  reprXML(): string;
  reprJSON(): [string, boolean];
  constructor(boolValue: boolean);
}

export { BooleanType };
