import { 
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

export class KeyProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (ValueParameter | PrefParameter | AltidParameter | PIDParameter | TypeParameter | MediatypeParameter | AnyParameter | IndexParameter)[], 
    val: TextType | URIType
  );
}
