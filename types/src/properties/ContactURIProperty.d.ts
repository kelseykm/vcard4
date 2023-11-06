import { BaseProperty } from "./BaseProperty";
import {
  PrefParameter,
  IndexParameter,
  ValueParameter,
} from "../parameters/index";
import { URIType } from "../values/index";

export class ContactURIProperty extends BaseProperty {
  readonly params: string;
  readonly paramsXML: string;
  readonly paramsJSON: {};
  readonly value: string;
  readonly valueXML: string;
  readonly valueJSON: {}[];
  repr(): string;
  reprXML(): string;
  reprJSON(): {}[];
  constructor(
    params: (ValueParameter | PrefParameter | IndexParameter)[],
    val: URIType
  );
}
