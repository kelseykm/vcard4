import {
  LanguageParameter,
  AnyParameter,
  TypeParameter,
  LevelParameter,
  PrefParameter,
  IndexParameter,
  AltidParameter,
} from "../parameters/index";
import { TextType } from "../values/index";

export class HobbyProperty {
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
      | PrefParameter
      | AltidParameter
      | TypeParameter
      | AnyParameter
      | IndexParameter
      | LevelParameter
      | LanguageParameter
    )[],
    val: TextType
  );
}
