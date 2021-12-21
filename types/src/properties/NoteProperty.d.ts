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

export class NoteProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (ValueParameter | LanguageParameter | PrefParameter | AltidParameter | PIDParameter | TypeParameter | AnyParameter | IndexParameter)[], 
    val: TextType
  );
}
