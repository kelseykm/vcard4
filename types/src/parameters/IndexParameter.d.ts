import { IntegerType } from "../values/index";

export class IndexParameter {
  readonly value: string;
  readonly valueXML: string;
  readonly valueJSON: (string | number)[];
  repr(): string;
  reprXML(): string;
  reprJSON(): Record<string, string | string[]>;
  constructor(indexValue: IntegerType);
}
