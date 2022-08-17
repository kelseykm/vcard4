import { TextType, IntegerType } from "../values/index";

export class AltidParameter {
  readonly value: string;
  readonly valueXML: string;
  readonly valueJSON: (string | number | bigint)[];
  repr(): string;
  reprXML(): string;
  reprJSON(): Record<string, string | string[]>;
  constructor(altidValue: IntegerType | TextType);
}
