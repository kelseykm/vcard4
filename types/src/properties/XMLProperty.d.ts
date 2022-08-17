import { AltidParameter, ValueParameter } from "../parameters/index";
import { TextType } from "../values/index";

export class XMLProperty {
  readonly params: string;
  readonly paramsXML: string;
  readonly paramsJSON: {};
  readonly value: string;
  readonly valueXML: string;
  readonly valueJSON: {}[];
  repr(): string;
  reprXML(): string;
  reprJSON(): {}[];
  constructor(params: (ValueParameter | AltidParameter)[], val: TextType);
}
