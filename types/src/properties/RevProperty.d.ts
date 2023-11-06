import { BaseProperty } from "./BaseProperty";
import { ValueParameter, AnyParameter } from "../parameters/index";
import { DateTimeType } from "../values/index";

export class RevProperty extends BaseProperty {
  readonly params: string;
  readonly paramsXML: string;
  readonly paramsJSON: {};
  readonly value: string;
  readonly valueXML: string;
  readonly valueJSON: {}[];
  repr(): string;
  reprXML(): string;
  reprJSON(): {}[];
  constructor(params: (ValueParameter | AnyParameter)[], val: DateTimeType);
}
