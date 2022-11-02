import { TextType } from '../values/TextType.js';
import { TextListType } from '../values/TextListType.js';
import { BooleanType } from '../values/BooleanType.js';
import { DateTimeType } from '../values/DateTimeType.js';
import { DateTimeListType } from '../values/DateTimeListType.js';
import { IntegerType } from '../values/IntegerType.js';
import { IntegerListType } from '../values/IntegerListType.js';
import { FloatType } from '../values/FloatType.js';
import { FloatListType } from '../values/FloatListType.js';
import { LanguageTagType } from '../values/LanguageTagType.js';
import { URIType } from '../values/URIType.js';
import { SexType } from '../values/SexType.js';
import { SpecialValueType } from '../values/SpecialValueType.js';

declare class ValueParameter {
  readonly value: string;
  readonly valueXML: string;
  readonly valueJSON: string[];
  repr(): string;
  reprXML(): string;
  reprJSON(): Record<string, string | string[]>;
  constructor(
    valType:
      | TextType
      | TextListType
      | BooleanType
      | DateTimeType
      | DateTimeListType
      | IntegerType
      | IntegerListType
      | FloatType
      | FloatListType
      | LanguageTagType
      | URIType
      | SexType
      | SpecialValueType
  );
}

export { ValueParameter };
