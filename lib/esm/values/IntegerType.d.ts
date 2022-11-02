declare class IntegerType {
  readonly value: string;
  readonly valueXML: string;
  readonly valueJSON: [string, number | bigint];
  repr(): string;
  reprXML(): string;
  reprJSON(): [string, number | bigint];
  constructor(intValue: number | bigint);
}

export { IntegerType };
