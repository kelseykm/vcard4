import { TextType } from "../values/index";

export class CalscaleParameter {
  readonly value: string;
  readonly valueXML: string;
  readonly valueJSON: string[];
  repr(): string;
  reprXML(): string;
  reprJSON(): Record<string, string | string[]>;
  constructor(calscaleValue: TextType);
}
