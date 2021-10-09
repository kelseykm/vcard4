export class TextType extends AbstractBaseValue {
    static type: string;
    constructor(textValue: any);
    value: any;
    #private;
}
export class TextListType extends AbstractBaseValue {
    static type: string;
    constructor(textlist: any);
    value: any;
    #private;
}
export class BooleanType extends AbstractBaseValue {
    static type: string;
    constructor(boolValue: any);
    value: string;
    #private;
}
export class DateTimeType extends AbstractBaseValue {
    constructor(dateTimeValue: any, type: any);
    type: string;
    value: any;
    #private;
}
export class DateTimeListType extends AbstractBaseValue {
    constructor(datetimelist: any);
    value: any;
    type: any;
    #private;
}
export class IntegerType extends AbstractBaseValue {
    static type: string;
    constructor(intValue: any);
    value: any;
    #private;
}
export class IntegerListType extends AbstractBaseValue {
    static type: string;
    constructor(integerlist: any);
    value: any;
    #private;
}
export class FloatType extends AbstractBaseValue {
    static type: string;
    constructor(floatValue: any);
    value: any;
    #private;
}
export class FloatListType extends AbstractBaseValue {
    static type: string;
    constructor(floatlist: any);
    value: any;
    #private;
}
export class LanguageTagType extends AbstractBaseValue {
    static type: string;
    constructor(langTagValue: any);
    value: any;
    #private;
}
export class URIType extends AbstractBaseValue {
    static type: string;
    constructor(uriValue: any);
    value: any;
    #private;
}
export class SexType extends AbstractBaseValue {
    static type: string;
    constructor(sexValue: any);
    value: any;
    #private;
}
export class SpecialValueType extends AbstractBaseValue {
    constructor(value: any, targetProp: any);
    targetProp: any;
    value: any;
    type: string;
    #private;
}
declare class AbstractBaseValue {
    checkAbstractPropertiesAndMethods(): void;
    repr(): any;
    #private;
}
export {};
