import { 
  LanguageParameter,
  GeoParameter,
  AnyParameter,
  LabelParameter,
  TypeParameter,
  PrefParameter,
  PIDParameter,
  IndexParameter,
  AltidParameter,
  ValueParameter,
  TzParameter,
  CCParameter
} from '../parameters/index';
import { SpecialValueType } from '../values/index';

export class AdrProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (LanguageParameter | ValueParameter | PrefParameter | AltidParameter | PIDParameter | TypeParameter | GeoParameter | TzParameter | AnyParameter | LabelParameter | CCParameter | IndexParameter)[], 
    val: SpecialValueType
  );
}
