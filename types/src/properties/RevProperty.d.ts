import { ValueParameter, AnyParameter } from '../parameters/index';
import { DateTimeType } from '../values/index';

export class RevProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (ValueParameter | AnyParameter)[], 
    val: DateTimeType
  );
}
