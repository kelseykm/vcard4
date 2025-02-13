import { BaseProperty } from './BaseProperty.js';
import { LanguageParameter } from '../parameters/LanguageParameter.js';
import { PrefParameter } from '../parameters/PrefParameter.js';
import { AltidParameter } from '../parameters/AltidParameter.js';
import { TypeParameter } from '../parameters/TypeParameter.js';
import { AnyParameter } from '../parameters/AnyParameter.js';
import { IndexParameter } from '../parameters/IndexParameter.js';
import { LevelParameter } from '../parameters/LevelParameter.js';
import { TextType } from '../values/TextType.js';
import '../parameters/BaseParameter.js';
import '../values/LanguageTagType.js';
import '../values/BaseValue.js';
import '../values/IntegerType.js';
import '../values/ParameterValueType.js';

declare class InterestProperty extends BaseProperty {
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
      | PrefParameter
      | AltidParameter
      | TypeParameter
      | AnyParameter
      | IndexParameter
      | LevelParameter
    )[],
    val: TextType
  );
}

export { InterestProperty };
