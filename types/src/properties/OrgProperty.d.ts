import { 
  LanguageParameter,
  SortAsParameter,
  AnyParameter,
  TypeParameter,
  PrefParameter,
  PIDParameter,
  IndexParameter,
  AltidParameter,
  ValueParameter
} from '../parameters/index';
import { SpecialValueType } from '../values/index';

export class OrgProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (LanguageParameter | ValueParameter | PrefParameter | AltidParameter | PIDParameter | TypeParameter | SortAsParameter | AnyParameter | IndexParameter)[], 
    val: SpecialValueType
  );
}
