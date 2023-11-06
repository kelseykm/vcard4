import { BaseProperty } from "./BaseProperty";
import {
  LanguageParameter,
  AnyParameter,
  TypeParameter,
  PrefParameter,
  PIDParameter,
  IndexParameter,
  AltidParameter,
  ValueParameter,
} from "../parameters/index";
import { TextType } from "../values/index";

export class RoleProperty extends BaseProperty {
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
      | ValueParameter
      | PrefParameter
      | AltidParameter
      | PIDParameter
      | TypeParameter
      | AnyParameter
      | IndexParameter
    )[],
    val: TextType
  );
}
