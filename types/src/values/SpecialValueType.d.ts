import { IntegerType } from "./IntegerType";
import { TextListType } from "./TextListType";
import { TextType } from "./TextType";
import { SexType } from "./SexType";
import { URIType } from "./URIType";

export class SpecialValueType {
  readonly value: string;
  repr(): string;
  constructor(value: (TextType | TextListType)[], targetProp: string);
  constructor(value: [SexType, TextType], targetProp: string);
  constructor(value: [IntegerType, URIType], targetProp: string);
  constructor(value: string, targetProp: string);
}
