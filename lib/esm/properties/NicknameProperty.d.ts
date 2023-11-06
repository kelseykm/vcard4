import { BaseProperty } from './BaseProperty.js';
import { ValueParameter } from '../parameters/ValueParameter.js';
import { TypeParameter } from '../parameters/TypeParameter.js';
import { LanguageParameter } from '../parameters/LanguageParameter.js';
import { AltidParameter } from '../parameters/AltidParameter.js';
import { PIDParameter } from '../parameters/PIDParameter.js';
import { PrefParameter } from '../parameters/PrefParameter.js';
import { IndexParameter } from '../parameters/IndexParameter.js';
import { AnyParameter } from '../parameters/AnyParameter.js';
import { TextType } from '../values/TextType.js';
import { TextListType } from '../values/TextListType.js';
import '../parameters/BaseParameter.js';
import '../values/BooleanType.js';
import '../values/BaseValue.js';
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

declare class NicknameProperty extends BaseProperty {
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
      | TypeParameter
      | LanguageParameter
      | AltidParameter
      | PIDParameter
      | PrefParameter
      | IndexParameter
      | AnyParameter
    )[],
    val: TextType | TextListType
  );
}

export { NicknameProperty };
