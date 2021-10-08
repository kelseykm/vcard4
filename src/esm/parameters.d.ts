export class LanguageParameter extends AbstractBaseParameter {
    static param: string;
    constructor(langTag: any);
    get value(): any;
    #private;
}
export class ValueParameter extends AbstractBaseParameter {
    static param: string;
    constructor(valType: any);
    get value(): any;
    #private;
}
export class PrefParameter extends AbstractBaseParameter {
    static param: string;
    constructor(prefValue: any);
    value: any;
    #private;
}
export class AltidParameter extends AbstractBaseParameter {
    static param: string;
    constructor(altidValue: any);
    value: any;
    #private;
}
export class PIDParameter extends AbstractBaseParameter {
    static param: string;
    constructor(pidValue: any);
    value: any;
    #private;
}
export class TypeParameter extends AbstractBaseParameter {
    static param: string;
    constructor(typeValue: any, targetProp: any);
    value: any;
    targetProp: any;
    #private;
}
export class MediatypeParameter extends AbstractBaseParameter {
    static param: string;
    constructor(mediaValue: any);
    value: any;
    #private;
}
export class CalscaleParameter extends AbstractBaseParameter {
    static param: string;
    constructor(calscaleValue: any);
    value: any;
    #private;
}
export class SortAsParameter extends AbstractBaseParameter {
    static param: string;
    constructor(sortValue: any);
    value: any;
    #private;
}
export class GeoParameter extends AbstractBaseParameter {
    static param: string;
    constructor(geoValue: any);
    value: string;
    #private;
}
export class TzParameter extends AbstractBaseParameter {
    static param: string;
    constructor(tzValue: any);
    value: string;
    #private;
}
export class AnyParameter extends AbstractBaseParameter {
    constructor(param: any, value: any);
    param: any;
    value: any;
    #private;
}
export class LabelParameter extends AbstractBaseParameter {
    static param: string;
    constructor(value: any);
    value: string;
    #private;
}
declare class AbstractBaseParameter {
    checkAbstractPropertiesAndMethods(): void;
    repr(): string;
    #private;
}
export {};
