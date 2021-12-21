import { 
  LanguageParameter,
  AnyParameter,
  TypeParameter,
  LevelParameter,
  PrefParameter,
  IndexParameter,
  AltidParameter
} from '../parameters/index';
import { TextType } from '../values/index';

export class InterestProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (LanguageParameter | PrefParameter | AltidParameter | TypeParameter | AnyParameter | IndexParameter | LevelParameter)[], 
    val: TextType
  );
}
