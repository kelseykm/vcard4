import { 
  LanguageParameter,
  CalscaleParameter,
  AnyParameter,
  AltidParameter,
  ValueParameter
} from '../parameters/index';
import { DateTimeType, TextType } from '../values/index';

export class BdayProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (ValueParameter | LanguageParameter | AltidParameter | CalscaleParameter | AnyParameter)[],
    val: DateTimeType | TextType,
  );
}
