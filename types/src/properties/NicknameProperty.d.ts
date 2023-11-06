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
import { TextType, TextListType } from "../values/index";

export class NicknameProperty extends BaseProperty {
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
      | TypeParameter
      | LanguageParameter
      | AltidParameter
      | PIDParameter
      | PrefParameter
      | IndexParameter
      | AnyParameter
    )[],
    val: TextType | TextListType
  );
}
