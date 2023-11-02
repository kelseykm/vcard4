import { IntegerType } from './IntegerType.js';
import { TextListType } from './TextListType.js';
import { TextType } from './TextType.js';
import { SexType } from './SexType.js';
import { URIType } from './URIType.js';
import { BaseValue } from './BaseValue.js';

/**
 * For use with the following properties: {@link KindProperty},
 * {@link NProperty}, {@link GenderProperty}, {@link AdrProperty},
 * {@link OrgProperty} and {@link ClientpidmapProperty}
 */
declare class SpecialValueType extends BaseValue {
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

export { SpecialValueType };
