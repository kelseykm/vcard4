import { ValueParameter, AnyParameter } from '../parameters/index';
import { SpecialValueType, SexType } from '../values/index';

export class GenderProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (ValueParameter | AnyParameter)[],
    val: SexType | SpecialValueType,
  );
}
