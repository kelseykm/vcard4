import {
  ValueParameter,
  AltidParameter,
  LanguageParameter,
  AnyParameter,
} from "../parameters/index";
import { TextType, URIType } from "../values/index";

export class BirthPlaceProperty {
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
      | AltidParameter
      | AnyParameter
    )[],
    val: TextType | URIType
  );
}
