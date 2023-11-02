import { LanguageParameter } from '../parameters/LanguageParameter.js';
import { ValueParameter } from '../parameters/ValueParameter.js';
import { PrefParameter } from '../parameters/PrefParameter.js';
import { AltidParameter } from '../parameters/AltidParameter.js';
import { PIDParameter } from '../parameters/PIDParameter.js';
import { TypeParameter } from '../parameters/TypeParameter.js';
import { MediatypeParameter } from '../parameters/MediatypeParameter.js';
import { CalscaleParameter } from '../parameters/CalscaleParameter.js';
import { SortAsParameter } from '../parameters/SortAsParameter.js';
import { GeoParameter } from '../parameters/GeoParameter.js';
import { TzParameter } from '../parameters/TzParameter.js';
import { AnyParameter } from '../parameters/AnyParameter.js';
import { LabelParameter } from '../parameters/LabelParameter.js';
import { CCParameter } from '../parameters/CCParameter.js';
import { IndexParameter } from '../parameters/IndexParameter.js';
import { LevelParameter } from '../parameters/LevelParameter.js';
import { TextType } from '../values/TextType.js';
import { TextListType } from '../values/TextListType.js';
import { BooleanType } from '../values/BooleanType.js';
import { DateTimeType } from '../values/DateTimeType.js';
import { IntegerType } from '../values/IntegerType.js';
import { FloatType } from '../values/FloatType.js';
import { LanguageTagType } from '../values/LanguageTagType.js';
import { URIType } from '../values/URIType.js';
import { SexType } from '../values/SexType.js';
import { SpecialValueType } from '../values/SpecialValueType.js';
import '../parameters/BaseParameter.js';
import '../values/DateTimeListType.js';
import '../values/BaseValue.js';
import '../values/IntegerListType.js';
import '../values/FloatListType.js';

declare class ExtendedProperty {
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
    prop: string,
    params: (
      | LanguageParameter
      | ValueParameter
      | PrefParameter
      | AltidParameter
      | PIDParameter
      | TypeParameter
      | MediatypeParameter
      | CalscaleParameter
      | SortAsParameter
      | GeoParameter
      | TzParameter
      | AnyParameter
      | LabelParameter
      | CCParameter
      | IndexParameter
      | LevelParameter
    )[],
    val:
      | TextType
      | TextListType
      | BooleanType
      | DateTimeType
      | IntegerType
      | FloatType
      | LanguageTagType
      | URIType
      | SexType
      | SpecialValueType
  );
}

export { ExtendedProperty };
