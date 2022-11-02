import { DateTimeType } from './DateTimeType.js';

declare class DateTimeListType {
  readonly value: string;
  readonly valueXML: string;
  readonly valueJSON: string[];
  repr(): string;
  reprXML(): string;
  reprJSON(): string[];
  constructor(datetimelist: DateTimeType[]);
}

export { DateTimeListType };
