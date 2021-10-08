export class BeginProperty extends AbstractBaseProperty {
    static prop: string;
    static cardinality: string;
    static acceptableParamTypes: any;
    static acceptableValTypes: typeof SpecialValueType;
    params: string;
    value: any;
    #private;
}
export class EndProperty extends AbstractBaseProperty {
    static prop: string;
    static cardinality: string;
    static acceptableParamTypes: any;
    static acceptableValTypes: typeof SpecialValueType;
    params: string;
    value: any;
    #private;
}
export class SourceProperty extends AbstractBaseProperty {
    static prop: string;
    static cardinality: string;
    static acceptableParamTypes: (typeof ValueParameter | typeof PrefParameter | typeof AltidParameter | typeof PIDParameter | typeof MediatypeParameter | typeof AnyParameter)[];
    static acceptableValTypes: typeof URIType;
    constructor(params: any, val: any);
    params: any;
    value: any;
    #private;
}
export class KindProperty extends AbstractBaseProperty {
    static prop: string;
    static cardinality: string;
    static acceptableParamTypes: (typeof ValueParameter | typeof AnyParameter)[];
    static acceptableValTypes: typeof SpecialValueType;
    constructor(params: any, val: any);
    params: any;
    value: any;
    #private;
}
export class XMLProperty extends AbstractBaseProperty {
    static prop: string;
    static cardinality: string;
    static acceptableParamTypes: (typeof ValueParameter | typeof AltidParameter)[];
    static acceptableValTypes: typeof TextType;
    constructor(params: any, val: any);
    params: any;
    value: any;
    #private;
}
export class FNProperty extends AbstractBaseProperty {
    static prop: string;
    static cardinality: string;
    static acceptableParamTypes: (typeof LanguageParameter | typeof ValueParameter | typeof PrefParameter | typeof AltidParameter | typeof PIDParameter | typeof TypeParameter | typeof AnyParameter)[];
    static acceptableValTypes: typeof TextType;
    constructor(params: any, val: any);
    params: any;
    value: any;
    #private;
}
export class NProperty extends AbstractBaseProperty {
    static prop: string;
    static cardinality: string;
    static acceptableParamTypes: (typeof LanguageParameter | typeof ValueParameter | typeof AltidParameter | typeof SortAsParameter | typeof AnyParameter)[];
    static acceptableValTypes: typeof SpecialValueType;
    constructor(params: any, val: any);
    params: any;
    value: any;
    #private;
}
export class NicknameProperty extends AbstractBaseProperty {
    static prop: string;
    static cardinality: string;
    static acceptableParamTypes: (typeof LanguageParameter | typeof ValueParameter | typeof PrefParameter | typeof AltidParameter | typeof PIDParameter | typeof TypeParameter | typeof AnyParameter)[];
    static acceptableValTypes: (typeof TextType | typeof TextListType)[];
    constructor(params: any, val: any);
    params: any;
    value: any;
    #private;
}
export class PhotoProperty extends AbstractBaseProperty {
    static prop: string;
    static cardinality: string;
    static acceptableParamTypes: (typeof ValueParameter | typeof PrefParameter | typeof AltidParameter | typeof PIDParameter | typeof TypeParameter | typeof MediatypeParameter | typeof AnyParameter)[];
    static acceptableValTypes: typeof URIType;
    constructor(params: any, val: any);
    params: any;
    value: any;
    #private;
}
export class BdayProperty extends AbstractBaseProperty {
    static prop: string;
    static cardinality: string;
    static acceptableParamTypes: (typeof LanguageParameter | typeof ValueParameter | typeof AltidParameter | typeof CalscaleParameter | typeof AnyParameter)[];
    static acceptableValTypes: (typeof TextType | typeof DateTimeType)[];
    constructor(params: any, val: any);
    params: any;
    value: any;
    #private;
}
export class AnniversaryProperty extends AbstractBaseProperty {
    static prop: string;
    static cardinality: string;
    static acceptableParamTypes: (typeof ValueParameter | typeof AltidParameter | typeof CalscaleParameter | typeof AnyParameter)[];
    static acceptableValTypes: (typeof TextType | typeof DateTimeType)[];
    constructor(params: any, val: any);
    params: any;
    value: any;
    #private;
}
export class GenderProperty extends AbstractBaseProperty {
    static prop: string;
    static cardinality: string;
    static acceptableParamTypes: (typeof ValueParameter | typeof AnyParameter)[];
    static acceptableValTypes: (typeof SexType | typeof SpecialValueType)[];
    constructor(params: any, val: any);
    params: any;
    value: any;
    #private;
}
export class AdrProperty extends AbstractBaseProperty {
    static prop: string;
    static cardinality: string;
    static acceptableParamTypes: (typeof LanguageParameter | typeof ValueParameter | typeof PrefParameter | typeof AltidParameter | typeof PIDParameter | typeof TypeParameter | typeof GeoParameter | typeof TzParameter | typeof AnyParameter | typeof LabelParameter)[];
    static acceptableValTypes: typeof SpecialValueType;
    constructor(params: any, val: any);
    params: any;
    value: any;
    #private;
}
export class TelProperty extends AbstractBaseProperty {
    static prop: string;
    static cardinality: string;
    static acceptableParamTypes: (typeof ValueParameter | typeof PrefParameter | typeof AltidParameter | typeof PIDParameter | typeof TypeParameter | typeof MediatypeParameter | typeof AnyParameter)[];
    static acceptableValTypes: (typeof TextType | typeof URIType)[];
    constructor(params: any, val: any);
    params: any;
    value: any;
    #private;
}
export class EmailProperty extends AbstractBaseProperty {
    static prop: string;
    static cardinality: string;
    static acceptableParamTypes: (typeof ValueParameter | typeof PrefParameter | typeof AltidParameter | typeof PIDParameter | typeof TypeParameter | typeof AnyParameter)[];
    static acceptableValTypes: typeof TextType;
    constructor(params: any, val: any);
    params: any;
    value: any;
    #private;
}
export class IMPPProperty extends AbstractBaseProperty {
    static prop: string;
    static cardinality: string;
    static acceptableParamTypes: (typeof ValueParameter | typeof PrefParameter | typeof AltidParameter | typeof PIDParameter | typeof TypeParameter | typeof MediatypeParameter | typeof AnyParameter)[];
    static acceptableValTypes: typeof URIType;
    constructor(params: any, val: any);
    params: any;
    value: any;
    #private;
}
export class LangProperty extends AbstractBaseProperty {
    static prop: string;
    static cardinality: string;
    static acceptableParamTypes: (typeof ValueParameter | typeof PrefParameter | typeof AltidParameter | typeof PIDParameter | typeof TypeParameter | typeof AnyParameter)[];
    static acceptableValTypes: typeof LanguageTagType;
    constructor(params: any, val: any);
    params: any;
    value: any;
    #private;
}
export class TzProperty extends AbstractBaseProperty {
    static prop: string;
    static cardinality: string;
    static acceptableParamTypes: (typeof ValueParameter | typeof PrefParameter | typeof AltidParameter | typeof PIDParameter | typeof TypeParameter | typeof MediatypeParameter | typeof AnyParameter)[];
    static acceptableValTypes: (typeof TextType | typeof DateTimeType | typeof URIType)[];
    constructor(params: any, val: any);
    params: any;
    value: any;
    #private;
}
export class GeoProperty extends AbstractBaseProperty {
    static prop: string;
    static cardinality: string;
    static acceptableParamTypes: (typeof ValueParameter | typeof PrefParameter | typeof AltidParameter | typeof PIDParameter | typeof TypeParameter | typeof MediatypeParameter | typeof AnyParameter)[];
    static acceptableValTypes: typeof URIType;
    constructor(params: any, val: any);
    params: any;
    value: any;
    #private;
}
export class TitleProperty extends AbstractBaseProperty {
    static prop: string;
    static cardinality: string;
    static acceptableParamTypes: (typeof LanguageParameter | typeof ValueParameter | typeof PrefParameter | typeof AltidParameter | typeof PIDParameter | typeof TypeParameter | typeof AnyParameter)[];
    static acceptableValTypes: typeof TextType;
    constructor(params: any, val: any);
    params: any;
    value: any;
    #private;
}
export class RoleProperty extends AbstractBaseProperty {
    static prop: string;
    static cardinality: string;
    static acceptableParamTypes: (typeof LanguageParameter | typeof ValueParameter | typeof PrefParameter | typeof AltidParameter | typeof PIDParameter | typeof TypeParameter | typeof AnyParameter)[];
    static acceptableValTypes: typeof TextType;
    constructor(params: any, val: any);
    params: any;
    value: any;
    #private;
}
export class LogoProperty extends AbstractBaseProperty {
    static prop: string;
    static cardinality: string;
    static acceptableParamTypes: (typeof LanguageParameter | typeof ValueParameter | typeof PrefParameter | typeof AltidParameter | typeof PIDParameter | typeof TypeParameter | typeof MediatypeParameter | typeof AnyParameter)[];
    static acceptableValTypes: typeof URIType;
    constructor(params: any, val: any);
    params: any;
    value: any;
    #private;
}
export class OrgProperty extends AbstractBaseProperty {
    static prop: string;
    static cardinality: string;
    static acceptableParamTypes: (typeof LanguageParameter | typeof ValueParameter | typeof PrefParameter | typeof AltidParameter | typeof PIDParameter | typeof TypeParameter | typeof SortAsParameter | typeof AnyParameter)[];
    static acceptableValTypes: typeof SpecialValueType;
    constructor(params: any, val: any);
    params: any;
    value: any;
    #private;
}
export class MemberProperty extends AbstractBaseProperty {
    static prop: string;
    static cardinality: string;
    static acceptableParamTypes: (typeof ValueParameter | typeof PrefParameter | typeof AltidParameter | typeof PIDParameter | typeof MediatypeParameter | typeof AnyParameter)[];
    static acceptableValTypes: typeof URIType;
    constructor(params: any, val: any);
    params: any;
    value: any;
    #private;
}
export class RelatedProperty extends AbstractBaseProperty {
    static prop: string;
    static cardinality: string;
    static acceptableParamTypes: (typeof LanguageParameter | typeof ValueParameter | typeof PrefParameter | typeof AltidParameter | typeof PIDParameter | typeof TypeParameter | typeof MediatypeParameter | typeof AnyParameter)[];
    static acceptableValTypes: (typeof TextType | typeof URIType)[];
    constructor(params: any, val: any);
    params: any;
    value: any;
    #private;
}
export class CategoriesProperty extends AbstractBaseProperty {
    static prop: string;
    static cardinality: string;
    static acceptableParamTypes: (typeof ValueParameter | typeof PrefParameter | typeof AltidParameter | typeof PIDParameter | typeof TypeParameter | typeof AnyParameter)[];
    static acceptableValTypes: (typeof TextType | typeof TextListType)[];
    constructor(params: any, val: any);
    params: any;
    value: any;
    #private;
}
export class NoteProperty extends AbstractBaseProperty {
    static prop: string;
    static cardinality: string;
    static acceptableParamTypes: (typeof LanguageParameter | typeof ValueParameter | typeof PrefParameter | typeof AltidParameter | typeof PIDParameter | typeof TypeParameter | typeof AnyParameter)[];
    static acceptableValTypes: typeof TextType;
    constructor(params: any, val: any);
    params: any;
    value: any;
    #private;
}
export class ProdidProperty extends AbstractBaseProperty {
    static prop: string;
    static cardinality: string;
    static acceptableParamTypes: (typeof ValueParameter | typeof AnyParameter)[];
    static acceptableValTypes: typeof TextType;
    constructor(params: any, val: any);
    params: any;
    value: any;
    #private;
}
export class RevProperty extends AbstractBaseProperty {
    static prop: string;
    static cardinality: string;
    static acceptableParamTypes: (typeof ValueParameter | typeof AnyParameter)[];
    static acceptableValTypes: typeof DateTimeType;
    constructor(params: any, val: any);
    params: any;
    value: any;
    #private;
}
export class SoundProperty extends AbstractBaseProperty {
    static prop: string;
    static cardinality: string;
    static acceptableParamTypes: (typeof LanguageParameter | typeof ValueParameter | typeof PrefParameter | typeof AltidParameter | typeof PIDParameter | typeof TypeParameter | typeof MediatypeParameter | typeof AnyParameter)[];
    static acceptableValTypes: typeof URIType;
    constructor(params: any, val: any);
    params: any;
    value: any;
    #private;
}
export class UIDProperty extends AbstractBaseProperty {
    static prop: string;
    static cardinality: string;
    static acceptableParamTypes: (typeof ValueParameter | typeof AnyParameter)[];
    static acceptableValTypes: (typeof TextType | typeof URIType)[];
    constructor(params: any, val: any);
    params: any;
    value: any;
    #private;
}
export class ClientpidmapProperty extends AbstractBaseProperty {
    static prop: string;
    static cardinality: string;
    static acceptableParamTypes: typeof AnyParameter;
    static acceptableValTypes: typeof SpecialValueType;
    constructor(params: any, val: any);
    params: any;
    value: any;
    #private;
}
export class URLProperty extends AbstractBaseProperty {
    static prop: string;
    static cardinality: string;
    static acceptableParamTypes: (typeof ValueParameter | typeof PrefParameter | typeof AltidParameter | typeof PIDParameter | typeof TypeParameter | typeof MediatypeParameter | typeof AnyParameter)[];
    static acceptableValTypes: typeof URIType;
    constructor(params: any, val: any);
    params: any;
    value: any;
    #private;
}
export class VersionProperty extends AbstractBaseProperty {
    static prop: string;
    static cardinality: string;
    static acceptableParamTypes: (typeof ValueParameter | typeof AnyParameter)[];
    static acceptableValTypes: typeof TextType;
    params: string;
    value: any;
    #private;
}
export class KeyProperty extends AbstractBaseProperty {
    static prop: string;
    static cardinality: string;
    static acceptableParamTypes: (typeof ValueParameter | typeof PrefParameter | typeof AltidParameter | typeof PIDParameter | typeof TypeParameter | typeof MediatypeParameter | typeof AnyParameter)[];
    static acceptableValTypes: (typeof TextType | typeof URIType)[];
    constructor(params: any, val: any);
    params: any;
    value: any;
    #private;
}
export class FburlProperty extends AbstractBaseProperty {
    static prop: string;
    static cardinality: string;
    static acceptableParamTypes: (typeof ValueParameter | typeof PrefParameter | typeof AltidParameter | typeof PIDParameter | typeof TypeParameter | typeof MediatypeParameter | typeof AnyParameter)[];
    static acceptableValTypes: typeof URIType;
    constructor(params: any, val: any);
    params: any;
    value: any;
    #private;
}
export class CaladruriProperty extends AbstractBaseProperty {
    static prop: string;
    static cardinality: string;
    static acceptableParamTypes: (typeof ValueParameter | typeof PrefParameter | typeof AltidParameter | typeof PIDParameter | typeof TypeParameter | typeof MediatypeParameter | typeof AnyParameter)[];
    static acceptableValTypes: typeof URIType;
    constructor(params: any, val: any);
    params: any;
    value: any;
    #private;
}
export class CaluriProperty extends AbstractBaseProperty {
    static prop: string;
    static cardinality: string;
    static acceptableParamTypes: (typeof ValueParameter | typeof PrefParameter | typeof AltidParameter | typeof PIDParameter | typeof TypeParameter | typeof MediatypeParameter | typeof AnyParameter)[];
    static acceptableValTypes: typeof URIType;
    constructor(params: any, val: any);
    params: any;
    value: any;
    #private;
}
export class ExtendedProperty extends AbstractBaseProperty {
    static cardinality: string;
    static acceptableParamTypes: (typeof LanguageParameter | typeof ValueParameter | typeof PrefParameter | typeof AltidParameter | typeof PIDParameter | typeof TypeParameter | typeof MediatypeParameter | typeof CalscaleParameter | typeof SortAsParameter | typeof GeoParameter | typeof TzParameter | typeof AnyParameter | typeof LabelParameter)[];
    static acceptableValTypes: (typeof TextType | typeof TextListType | typeof BooleanType | typeof DateTimeType | typeof IntegerType | typeof FloatType | typeof LanguageTagType | typeof URIType | typeof SexType | typeof SpecialValueType)[];
    constructor(prop: any, params: any, value: any);
    prop: any;
    params: any;
    value: any;
    #private;
}
declare class AbstractBaseProperty {
    checkAbstractPropertiesAndMethods(): void;
    repr(): string;
    #private;
}
import { SpecialValueType } from "./values.js";
import { ValueParameter } from "./parameters.js";
import { PrefParameter } from "./parameters.js";
import { AltidParameter } from "./parameters.js";
import { PIDParameter } from "./parameters.js";
import { MediatypeParameter } from "./parameters.js";
import { AnyParameter } from "./parameters.js";
import { URIType } from "./values.js";
import { TextType } from "./values.js";
import { LanguageParameter } from "./parameters.js";
import { TypeParameter } from "./parameters.js";
import { SortAsParameter } from "./parameters.js";
import { TextListType } from "./values.js";
import { CalscaleParameter } from "./parameters.js";
import { DateTimeType } from "./values.js";
import { SexType } from "./values.js";
import { GeoParameter } from "./parameters.js";
import { TzParameter } from "./parameters.js";
import { LabelParameter } from "./parameters.js";
import { LanguageTagType } from "./values.js";
import { BooleanType } from "./values.js";
import { IntegerType } from "./values.js";
import { FloatType } from "./values.js";
export {};
