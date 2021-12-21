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

export class FNProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (ValueParameter | TypeParameter | LanguageParameter | AltidParameter | PIDParameter | PrefParameter | IndexParameter | AnyParameter)[],
    val: TextType
  );
}
