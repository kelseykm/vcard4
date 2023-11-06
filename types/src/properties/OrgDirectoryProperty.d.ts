import { BaseProperty } from "./BaseProperty";
import {
  LanguageParameter,
  AnyParameter,
  TypeParameter,
  PrefParameter,
  PIDParameter,
  IndexParameter,
  AltidParameter,
} from "../parameters/index";
import { URIType } from "../values/index";

export class OrgDirectoryProperty extends BaseProperty {
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
      | LanguageParameter
      | PrefParameter
      | AltidParameter
      | PIDParameter
      | TypeParameter
      | AnyParameter
      | IndexParameter
    )[],
    val: URIType
  );
}
