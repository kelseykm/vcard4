import { 
  LanguageParameter,
  SortAsParameter,
  AnyParameter,
  AltidParameter,
  ValueParameter
} from '../parameters/index';
import { SpecialValueType } from '../values/index';

export class NProperty {
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
    params: (ValueParameter | SortAsParameter | LanguageParameter | AltidParameter | AnyParameter)[],
    val: SpecialValueType
  );
}
