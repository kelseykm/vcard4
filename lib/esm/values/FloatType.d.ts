declare class FloatType {
  readonly value: string;
  readonly valueXML: string;
  readonly valueJSON: [string, number];
  repr(): string;
  reprXML(): string;
  reprJSON(): [string, number];
  constructor(floatValue: number);
}

export { FloatType };
