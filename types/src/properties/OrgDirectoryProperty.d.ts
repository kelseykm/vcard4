import { 
  LanguageParameter,
  AnyParameter,
  TypeParameter,
  PrefParameter,
  PIDParameter,
  IndexParameter,
  AltidParameter
} from '../parameters/index';
import { URIType } from '../values/index';

export class OrgDirectoryProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (LanguageParameter | PrefParameter | AltidParameter | PIDParameter | TypeParameter | AnyParameter | IndexParameter)[], 
    val: URIType
  );
}
