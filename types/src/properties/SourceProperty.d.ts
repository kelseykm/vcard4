import {
  AnyParameter,
  MediatypeParameter,
  PrefParameter,
  PIDParameter,
  IndexParameter,
  AltidParameter,
  ValueParameter,
} from "../parameters/index";
import { URIType } from "../values/index";

export class SourceProperty {
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
      | PIDParameter
      | PrefParameter
      | IndexParameter
      | AltidParameter
      | MediatypeParameter
      | AnyParameter
    )[],
    val: URIType
  );
}
