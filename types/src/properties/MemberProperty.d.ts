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

export class MemberProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (ValueParameter | PrefParameter | AltidParameter | PIDParameter | MediatypeParameter | AnyParameter | IndexParameter)[], 
    val: URIType
  );
}
