import { 
  AnyParameter,
  TypeParameter,
  PrefParameter,
  PIDParameter,
  IndexParameter,
  AltidParameter,
  ValueParameter
} from '../parameters/index';
import { TextType } from '../values/index';

export class EmailProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (ValueParameter | PrefParameter | AltidParameter | PIDParameter | TypeParameter | AnyParameter | IndexParameter)[], 
    val: TextType
  );
}
