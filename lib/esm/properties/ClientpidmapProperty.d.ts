import { AnyParameter } from '../parameters/AnyParameter.js';
import { SpecialValueType } from '../values/SpecialValueType.js';
import '../parameters/BaseParameter.js';
import '../values/ParameterValueType.js';
import '../values/BaseValue.js';
import '../values/IntegerType.js';
import '../values/TextListType.js';
import '../values/TextType.js';
import '../values/SexType.js';
import '../values/URIType.js';

declare class ClientpidmapProperty {
  readonly params: string;
  readonly paramsXML: string;
  readonly paramsJSON: {};
  readonly value: string;
  readonly valueXML: string;
  readonly valueJSON: {}[];
  repr(): string;
  reprXML(): string;
  reprJSON(): {}[];
  constructor(params: AnyParameter[], val: SpecialValueType);
}

export { ClientpidmapProperty };
