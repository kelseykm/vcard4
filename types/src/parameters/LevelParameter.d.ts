import { TextType } from "../values/index";

export class LevelParameter {
  readonly value: string;
  readonly valueXML: string;
  readonly valueJSON: string[];
  repr(): string;
  reprXML(): string;
  reprJSON(): Record<string, string | string[]>;
  constructor(levelValue: TextType, targetProp: string);
}
