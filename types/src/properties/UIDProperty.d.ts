import { ValueParameter, AnyParameter } from '../parameters/index';
import { TextType, URIType } from '../values/index';

export class UIDProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (ValueParameter | AnyParameter)[], 
    val: URIType | TextType 
  );
}
