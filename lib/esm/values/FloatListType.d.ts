import { FloatType } from './FloatType.js';

declare class FloatListType {
  readonly value: string;
  readonly valueXML: string;
  readonly valueJSON: (string | number)[];
  repr(): string;
  reprXML(): string;
  reprJSON(): (string | number)[];
  constructor(floatlist: FloatType[]);
}

export { FloatListType };
