import { DateTimeType, TextType, URIType } from "../values/index";

export class TzParameter {
  readonly value: string;
  readonly valueXML: string;
  readonly valueJSON: string[];
  repr(): string;
  reprXML(): string;
  reprJSON(): Record<string, string | string[]>;
  constructor(tzValue: TextType | URIType | DateTimeType);
}
