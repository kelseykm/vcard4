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
  readonly value: string;
  constructor(
    params: (ValueParameter | SortAsParameter | LanguageParameter | AltidParameter | AnyParameter)[],
    val: SpecialValueType
  );
}
