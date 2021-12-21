import { 
  LanguageParameter,
  AnyParameter,
  TypeParameter,
  PrefParameter,
  PIDParameter,
  IndexParameter,
  AltidParameter,
  ValueParameter
} from '../parameters/index';
import { TextType } from '../values/index';

export class RoleProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (LanguageParameter | ValueParameter | PrefParameter | AltidParameter | PIDParameter | TypeParameter | AnyParameter | IndexParameter)[], 
    val: TextType
  );
}
