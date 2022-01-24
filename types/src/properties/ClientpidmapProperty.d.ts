import { AnyParameter } from '../parameters/index';
import { SpecialValueType } from '../values/index';

export class ClientpidmapProperty {
  readonly params: string;
  readonly paramsXML: string;
  readonly paramsJSON: {};
  readonly value: string;
  readonly valueXML: string;
  readonly valueJSON: {}[];
  repr(): string;
  reprXML(): string;
  reprJSON(): {}[];
  constructor(
    params: AnyParameter[], 
    val: SpecialValueType
  );
}
