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
  readonly value: string;
  constructor(
    params: (LanguageParameter | ValueParameter | AltidParameter | CalscaleParameter | AnyParameter)[],
    val: DateTimeType | TextType
  );
}
