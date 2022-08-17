import { ValueParameter, AnyParameter } from "../parameters/index";
import { SpecialValueType } from "../values/index";

export class KindProperty {
  readonly params: string;
  readonly paramsXML: string;
  readonly paramsJSON: {};
  readonly value: string;
  readonly valueXML: string;
  readonly valueJSON: {}[];
  repr(): string;
  reprXML(): string;
  reprJSON(): {}[];
  constructor(params: (ValueParameter | AnyParameter)[], val: SpecialValueType);
}
