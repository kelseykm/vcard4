import { IntegerType } from "./IntegerType";
import { TextListType } from "./TextListType";
import { TextType } from "./TextType";
import { SexType } from "./SexType";
import { URIType } from "./URIType";
import { BaseValue } from "./BaseValue";

/**
 * For use with the following properties: {@link KindProperty},
 * {@link NProperty}, {@link GenderProperty}, {@link AdrProperty},
 * {@link OrgProperty} and {@link ClientpidmapProperty}
 */
export class SpecialValueType extends BaseValue {
  reprJSON(): (string | string[])[];
  /**
   * @param value - the value
   * @param targetProp - the name of the target property (case insensitive)
   * @see For comprehensive explanation and examples of usage, see the
   * documentation
   * {@link https://kelseykm.github.io/vcard4/documentation/values/specialvaluetype}
   */
  constructor(value: (TextType | TextListType)[], targetProp: string);
  constructor(value: [SexType, TextType], targetProp: string);
  constructor(value: [IntegerType, URIType], targetProp: string);
  constructor(value: string, targetProp: string);
}
