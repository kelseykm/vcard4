import { ValueParameter, AnyParameter } from '../parameters/index';
import { TextType } from '../values/index';

export class ProdidProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (ValueParameter | AnyParameter)[], 
    val: TextType
  );
}
