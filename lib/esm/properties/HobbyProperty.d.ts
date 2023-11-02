import { PrefParameter } from '../parameters/PrefParameter.js';
import { AltidParameter } from '../parameters/AltidParameter.js';
import { TypeParameter } from '../parameters/TypeParameter.js';
import { AnyParameter } from '../parameters/AnyParameter.js';
import { IndexParameter } from '../parameters/IndexParameter.js';
import { LevelParameter } from '../parameters/LevelParameter.js';
import { LanguageParameter } from '../parameters/LanguageParameter.js';
import { TextType } from '../values/TextType.js';
import '../parameters/BaseParameter.js';
import '../values/IntegerType.js';
import '../values/BaseValue.js';
import '../values/ParameterValueType.js';
import '../values/LanguageTagType.js';

declare class HobbyProperty {
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
      | PrefParameter
      | AltidParameter
      | TypeParameter
      | AnyParameter
      | IndexParameter
      | LevelParameter
      | LanguageParameter
    )[],
    val: TextType
  );
}

export { HobbyProperty };
