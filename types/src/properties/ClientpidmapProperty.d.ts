import { AnyParameter } from '../parameters/index';
import { SpecialValueType } from '../values/index';

export class ClientpidmapProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: AnyParameter[], 
    val: SpecialValueType
  );
}
