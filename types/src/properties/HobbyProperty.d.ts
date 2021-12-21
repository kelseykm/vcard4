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

export class HobbyProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (PrefParameter | AltidParameter | TypeParameter | AnyParameter | IndexParameter | LevelParameter | LanguageParameter)[], 
    val: TextType 
  );
}
