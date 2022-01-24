import { 
  LanguageParameter,
  CalscaleParameter,
  AnyParameter,
  AltidParameter,
  ValueParameter
} from '../parameters/index';
import { DateTimeType, TextType } from '../values/index';

export class DeathDateProperty {
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
    params: (LanguageParameter | ValueParameter | AltidParameter | CalscaleParameter | AnyParameter)[],
    val: DateTimeType | TextType
  );
}
