import { BaseProperty } from "./BaseProperty";
import {
  AnyParameter,
  TypeParameter,
  MediatypeParameter,
  PrefParameter,
  PIDParameter,
  IndexParameter,
  AltidParameter,
  ValueParameter,
} from "../parameters/index";
import { TextType, URIType } from "../values/index";

export class TelProperty extends BaseProperty {
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
    params: (
      | ValueParameter
      | PrefParameter
      | AltidParameter
      | PIDParameter
      | TypeParameter
      | MediatypeParameter
      | AnyParameter
      | IndexParameter
    )[],
    val: URIType | TextType
  );
}
