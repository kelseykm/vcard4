import { ValueParameter, AnyParameter } from '../parameters/index';
import { TextType, URIType } from '../values/index';

export class UIDProperty {
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
    params: (ValueParameter | AnyParameter)[], 
    val: URIType | TextType 
  );
}
