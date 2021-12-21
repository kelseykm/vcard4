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
import { TextType, TextListType } from '../values/index';

export class NicknameProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (ValueParameter | TypeParameter | LanguageParameter | AltidParameter | PIDParameter | PrefParameter | IndexParameter | AnyParameter)[],
    val: TextType| TextListType,
  );
}
