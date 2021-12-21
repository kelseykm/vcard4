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
import { URIType } from '../values/index';

export class PhotoProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (ValueParameter | AltidParameter | TypeParameter | MediatypeParameter | PrefParameter | IndexParameter | PIDParameter | AnyParameter)[],
    val: URIType,
  );
}
