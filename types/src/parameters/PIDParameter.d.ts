import { IntegerType } from '../values/index';

export class PIDParameter {
  readonly value: string;
  readonly valueXML: string;
  readonly valueJSON: (string | number | bigint)[];
  repr(): string;
  reprXML(): string;
  reprJSON(): Record<string, string | string[]>;
  constructor(pidValue: IntegerType | IntegerType[] | IntegerType[][]);
  constructor(pidValue: (IntegerType | IntegerType[])[]);
}
