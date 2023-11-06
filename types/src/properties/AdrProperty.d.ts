import { BaseProperty } from "./BaseProperty";
import {
  LanguageParameter,
  GeoParameter,
  AnyParameter,
  LabelParameter,
  TypeParameter,
  PrefParameter,
  PIDParameter,
  IndexParameter,
  AltidParameter,
  ValueParameter,
  TzParameter,
  CCParameter,
} from "../parameters/index";
import { SpecialValueType } from "../values/index";

export class AdrProperty extends BaseProperty {
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
      | GeoParameter
      | TzParameter
      | AnyParameter
      | LabelParameter
      | CCParameter
      | IndexParameter
    )[],
    val: SpecialValueType
  );
}
