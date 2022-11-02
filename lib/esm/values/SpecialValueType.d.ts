import { IntegerType } from './IntegerType.js';
import { TextListType } from './TextListType.js';
import { TextType } from './TextType.js';
import { SexType } from './SexType.js';
import { URIType } from './URIType.js';

declare class SpecialValueType {
  readonly value: string;
  readonly valueXML: string;
  readonly valueJSON: (string | string[])[];
  repr(): string;
  reprXML(): string;
  reprJSON(): (string | string[])[];
  constructor(value: (TextType | TextListType)[], targetProp: string);
  constructor(value: [SexType, TextType], targetProp: string);
  constructor(value: [IntegerType, URIType], targetProp: string);
  constructor(value: string, targetProp: string);
}

export { SpecialValueType };
