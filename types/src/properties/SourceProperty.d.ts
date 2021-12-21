import { 
  AnyParameter,
  MediatypeParameter,
  PrefParameter,
  PIDParameter,
  IndexParameter,
  AltidParameter,
  ValueParameter
} from '../parameters/index';
import { URIType } from '../values/index';

export class SourceProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (ValueParameter | PIDParameter | PrefParameter | IndexParameter | AltidParameter | MediatypeParameter | AnyParameter)[],
    val: URIType
  );
}
