import { LanguageParameter } from '../parameters/LanguageParameter.js';
import { ValueParameter } from '../parameters/ValueParameter.js';
import { PrefParameter } from '../parameters/PrefParameter.js';
import { AltidParameter } from '../parameters/AltidParameter.js';
import { PIDParameter } from '../parameters/PIDParameter.js';
import { TypeParameter } from '../parameters/TypeParameter.js';
import { GeoParameter } from '../parameters/GeoParameter.js';
import { TzParameter } from '../parameters/TzParameter.js';
import { AnyParameter } from '../parameters/AnyParameter.js';
import { LabelParameter } from '../parameters/LabelParameter.js';
import { CCParameter } from '../parameters/CCParameter.js';
import { IndexParameter } from '../parameters/IndexParameter.js';
import { SpecialValueType } from '../values/SpecialValueType.js';
import '../parameters/BaseParameter.js';
import '../values/LanguageTagType.js';
import '../values/BaseValue.js';
import '../values/TextType.js';
import '../values/TextListType.js';
import '../values/BooleanType.js';
import '../values/DateTimeType.js';
import '../values/DateTimeListType.js';
import '../values/IntegerType.js';
import '../values/IntegerListType.js';
import '../values/FloatType.js';
import '../values/FloatListType.js';
import '../values/URIType.js';
import '../values/SexType.js';

declare class AdrProperty {
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
      | LanguageParameter
      | ValueParameter
      | PrefParameter
      | AltidParameter
      | PIDParameter
      | TypeParameter
      | GeoParameter
      | TzParameter
      | AnyParameter
      | LabelParameter
      | CCParameter
      | IndexParameter
    )[],
    val: SpecialValueType
  );
}

export { AdrProperty };
