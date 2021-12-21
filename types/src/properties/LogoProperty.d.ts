import { 
  LanguageParameter,
  CalscaleParameter,
  AnyParameter,
  TypeParameter,
  MediatypeParameter,
  PrefParameter,
  PIDParameter,
  IndexParameter,
  AltidParameter,
  ValueParameter
} from '../parameters/index';
import { URIType } from '../values/index';

export class LogoProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (LanguageParameter | ValueParameter | PrefParameter | AltidParameter | PIDParameter | TypeParameter | MediatypeParameter | CalscaleParameter | AnyParameter | IndexParameter)[], 
    val: URIType
  );
}
