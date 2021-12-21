import { 
  AltidParameter,
  ValueParameter,
  CalscaleParameter,
  AnyParameter
} from '../parameters/index';
import { DateTimeType, TextType } from '../values/index';

export class AnniversaryProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (ValueParameter | AltidParameter | CalscaleParameter | AnyParameter)[],
    val: DateTimeType | TextType,
  );
}
