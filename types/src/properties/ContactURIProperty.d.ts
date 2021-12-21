import { 
  PrefParameter,
  IndexParameter,
  ValueParameter
} from '../parameters/index';
import { URIType } from '../values/index';

export class ContactURIProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (ValueParameter | PrefParameter | IndexParameter)[], 
    val: URIType
  );
}
