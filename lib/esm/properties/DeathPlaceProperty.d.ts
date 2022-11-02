import { LanguageParameter } from '../parameters/LanguageParameter.js';
import { ValueParameter } from '../parameters/ValueParameter.js';
import { AltidParameter } from '../parameters/AltidParameter.js';
import { AnyParameter } from '../parameters/AnyParameter.js';
import { TextType } from '../values/TextType.js';
import { URIType } from '../values/URIType.js';
import '../values/LanguageTagType.js';
import '../values/TextListType.js';
import '../values/BooleanType.js';
import '../values/DateTimeType.js';
import '../values/DateTimeListType.js';
import '../values/IntegerType.js';
import '../values/IntegerListType.js';
import '../values/FloatType.js';
import '../values/FloatListType.js';
import '../values/SexType.js';
import '../values/SpecialValueType.js';

declare class DeathPlaceProperty {
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
      | AltidParameter
      | AnyParameter
    )[],
    val: TextType | URIType
  );
}

export { DeathPlaceProperty };
