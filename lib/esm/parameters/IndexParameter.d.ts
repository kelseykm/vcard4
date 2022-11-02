import { IntegerType } from '../values/IntegerType.js';

declare class IndexParameter {
  readonly value: string;
  readonly valueXML: string;
  readonly valueJSON: (string | number)[];
  repr(): string;
  reprXML(): string;
  reprJSON(): Record<string, string | string[]>;
  constructor(indexValue: IntegerType);
}

export { IndexParameter };
