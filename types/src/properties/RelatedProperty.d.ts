import {
  LanguageParameter,
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

export class RelatedProperty {
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
      | LanguageParameter
      | PrefParameter
      | AltidParameter
      | PIDParameter
      | MediatypeParameter
      | TypeParameter
      | AnyParameter
      | IndexParameter
    )[],
    val: URIType | TextType
  );
}
