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
   * @param targetProp - the name of the target property (case insensitive)
   * @param value - the value
   * @see For comprehensive explanation and examples of usage, see the
   * documentation
   * {@link https://kelseykm.github.io/vcard4/documentation/values/specialvaluetype}
   */
  constructor(targetProp: string, value: (TextType | TextListType)[]);
  constructor(targetProp: string, value: [SexType, TextType]);
  constructor(targetProp: string, value: [IntegerType, URIType]);
  constructor(targetProp: string, value: string);
}
