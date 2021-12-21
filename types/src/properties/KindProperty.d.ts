import { ValueParameter, AnyParameter } from '../parameters/index';
import { SpecialValueType } from '../values/index';

export class KindProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (ValueParameter | AnyParameter)[],
    val: SpecialValueType
  );
}
