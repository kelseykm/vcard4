import { BaseProperty } from './BaseProperty.js';
import { ValueParameter } from '../parameters/ValueParameter.js';
import { AltidParameter } from '../parameters/AltidParameter.js';
import { TextType } from '../values/TextType.js';
import '../parameters/BaseParameter.js';
import '../values/TextListType.js';
import '../values/BaseValue.js';
import '../values/BooleanType.js';
import '../values/DateTimeType.js';
import '../values/DateTimeListType.js';
import '../values/IntegerType.js';
import '../values/IntegerListType.js';
import '../values/FloatType.js';
import '../values/FloatListType.js';
import '../values/LanguageTagType.js';
import '../values/URIType.js';
import '../values/SexType.js';
import '../values/SpecialValueType.js';
import '../values/ParameterValueType.js';

declare class XMLProperty extends BaseProperty {
  readonly params: string;
  readonly paramsXML: string;
  readonly paramsJSON: {};
  readonly value: string;
  readonly valueXML: string;
  readonly valueJSON: {}[];
  repr(): string;
  reprXML(): string;
  reprJSON(): {}[];
  constructor(params: (ValueParameter | AltidParameter)[], val: TextType);
}

export { XMLProperty };
