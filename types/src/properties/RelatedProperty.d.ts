import { 
  LanguageParameter,
  AnyParameter,
  TypeParameter,
  MediatypeParameter,
  PrefParameter,
  PIDParameter,
  IndexParameter,
  AltidParameter,
  ValueParameter
} from '../parameters/index';
import { TextType, URIType } from '../values/index';

export class RelatedProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (ValueParameter | LanguageParameter | PrefParameter | AltidParameter | PIDParameter | MediatypeParameter | TypeParameter | AnyParameter | IndexParameter)[], 
    val: URIType | TextType
  );
}
