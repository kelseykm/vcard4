import { TextType } from '../values/TextType.js';
import { URIType } from '../values/URIType.js';
import { DateTimeType } from '../values/DateTimeType.js';

declare class TzParameter {
  readonly value: string;
  readonly valueXML: string;
  readonly valueJSON: string[];
  repr(): string;
  reprXML(): string;
  reprJSON(): Record<string, string | string[]>;
  constructor(tzValue: TextType | URIType | DateTimeType);
}

export { TzParameter };
