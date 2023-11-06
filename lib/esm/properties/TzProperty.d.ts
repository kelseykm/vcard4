import { BaseProperty } from './BaseProperty.js';
import { ValueParameter } from '../parameters/ValueParameter.js';
import { PrefParameter } from '../parameters/PrefParameter.js';
import { AltidParameter } from '../parameters/AltidParameter.js';
import { PIDParameter } from '../parameters/PIDParameter.js';
import { TypeParameter } from '../parameters/TypeParameter.js';
import { MediatypeParameter } from '../parameters/MediatypeParameter.js';
import { AnyParameter } from '../parameters/AnyParameter.js';
import { IndexParameter } from '../parameters/IndexParameter.js';
import { TextType } from '../values/TextType.js';
import { URIType } from '../values/URIType.js';
import { DateTimeType } from '../values/DateTimeType.js';
import '../parameters/BaseParameter.js';
import '../values/TextListType.js';
import '../values/BaseValue.js';
import '../values/BooleanType.js';
import '../values/DateTimeListType.js';
import '../values/IntegerType.js';
import '../values/IntegerListType.js';
import '../values/FloatType.js';
import '../values/FloatListType.js';
import '../values/LanguageTagType.js';
import '../values/SexType.js';
import '../values/SpecialValueType.js';
import '../values/ParameterValueType.js';

declare class TzProperty extends BaseProperty {
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
    params: (
      | ValueParameter
      | PrefParameter
      | AltidParameter
      | PIDParameter
      | TypeParameter
      | MediatypeParameter
      | AnyParameter
      | IndexParameter
    )[],
    val: TextType | URIType | DateTimeType
  );
}

export { TzProperty };
