import { ValueParameter } from '../parameters/ValueParameter.js';
import { AnyParameter } from '../parameters/AnyParameter.js';
import { SexType } from '../values/SexType.js';
import { SpecialValueType } from '../values/SpecialValueType.js';
import '../parameters/BaseParameter.js';
import '../values/TextType.js';
import '../values/BaseValue.js';
import '../values/TextListType.js';
import '../values/BooleanType.js';
import '../values/DateTimeType.js';
import '../values/DateTimeListType.js';
import '../values/IntegerType.js';
import '../values/IntegerListType.js';
import '../values/FloatType.js';
import '../values/FloatListType.js';
import '../values/LanguageTagType.js';
import '../values/URIType.js';

declare class GenderProperty {
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
    val: SexType | SpecialValueType
  );
}

export { GenderProperty };
