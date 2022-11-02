import { IntegerType } from '../values/IntegerType.js';
import { TextType } from '../values/TextType.js';

declare class AltidParameter {
  readonly value: string;
  readonly valueXML: string;
  readonly valueJSON: (string | number | bigint)[];
  repr(): string;
  reprXML(): string;
  reprJSON(): Record<string, string | string[]>;
  constructor(altidValue: IntegerType | TextType);
}

export { AltidParameter };
