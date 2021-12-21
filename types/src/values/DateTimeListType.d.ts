import { DateTimeType } from './DateTimeType';

export class DateTimeListType {
  readonly value: string;
  repr(): string;
  constructor(datetimelist: DateTimeType[]);
}
