import { BaseProperty } from "./BaseProperty";
import {
  AltidParameter,
  ValueParameter,
  CalscaleParameter,
  AnyParameter,
} from "../parameters/index";
import { DateTimeType, TextType } from "../values/index";

export class AnniversaryProperty extends BaseProperty {
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
      | AltidParameter
      | CalscaleParameter
      | AnyParameter
    )[],
    val: DateTimeType | TextType
  );
}
