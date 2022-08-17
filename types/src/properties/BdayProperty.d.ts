import {
  LanguageParameter,
  CalscaleParameter,
  AnyParameter,
  AltidParameter,
  ValueParameter,
} from "../parameters/index";
import { DateTimeType, TextType } from "../values/index";

export class BdayProperty {
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
      | CalscaleParameter
      | AnyParameter
    )[],
    val: DateTimeType | TextType
  );
}
