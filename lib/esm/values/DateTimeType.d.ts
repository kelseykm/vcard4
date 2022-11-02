declare class DateTimeType {
  readonly value: string;
  readonly valueXML: string;
  readonly valueJSON: [string, string];
  repr(): string;
  reprXML(): string;
  reprJSON(): [string, string];
  constructor(dateTimeValue: string, type: string);
}

export { DateTimeType };
