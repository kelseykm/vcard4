import {
  MissingArgument,
  InvalidArgument
} from './errors.js';

import {
  TextType,
  TextListType,
  BooleanType,
  DateTimeType,
  IntegerType,
  FloatType,
  LanguageTagType,
  URIType,
  SexType,
  SpecialValueType
} from './values.js';

import {
  LanguageParameter,
  ValueParameter,
  PrefParameter,
  AltidParameter,
  PIDParameter,
  TypeParameter,
  MediatypeParameter,
  CalscaleParameter,
  SortAsParameter,
  GeoParameter,
  TzParameter,
  AnyParameter,
  LabelParameter
} from './parameters.js';

// Abstract Base Class for all properties
class AbstractBaseProperty {
  #abstractPropertiesAndMethods = [
    'prop',
    'cardinality',
    'acceptableParamTypes',
    'acceptableValTypes',
    'params',
    'value',
  ];

  checkAbstractPropertiesAndMethods() {
    if (!this.#abstractPropertiesAndMethods.every(abstractPropertyOrMethod => this.hasOwnProperty(abstractPropertyOrMethod) || Object.getPrototypeOf(this).hasOwnProperty(abstractPropertyOrMethod)))
    throw new Error('All abstract properties and methods in abstract base class must be defined in child class');
  }

  repr() {
    if (this.params === '')
    return `${this.prop}:${this.value}`;
    return `${this.prop};${this.params}:${this.value}`;
  }

  constructor() {
    if (this.constructor === AbstractBaseProperty)
    throw new Error('Cannot create instance of abstract class');
  }
}

// General properties
class BeginProperty extends AbstractBaseProperty {
  prop = 'BEGIN';
  cardinality = '1';
  acceptableParamTypes = [];
  acceptableValTypes = SpecialValueType;

  #validate(params, value) {
    if (!Array.isArray(params))
    throw new TypeError('Parameters for BeginProperty must be passed in an array');
    else if (!params.every(param => this.acceptableParamTypes.some(acceptableParamType => param instanceof acceptableParamType)))
    throw new TypeError('Some of the parameters passed are not valid parameters for BeginProperty');
    else if (!(value instanceof this.acceptableValTypes) || !/^BeginProperty/i.test(value.targetProp))
    throw new TypeError('Invalid type for value of BeginProperty');
  }

  constructor(params, val) {
    super();

    if (typeof params === 'undefined' || typeof val === 'undefined') {
      this.params = '';
      this.value = new SpecialValueType('text', 'VCARD', 'beginproperty').repr();
    } else {
      this.#validate(params, val);
      this.params = params.reduce((parametersArray, currentParameter) => {
        parametersArray.push(currentParameter.repr());
        return parametersArray;
      }, []).join(';');
      this.value = val.repr();
    }

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

class EndProperty extends AbstractBaseProperty {
  prop = 'END';
  cardinality = '1';
  acceptableParamTypes = [];
  acceptableValTypes = SpecialValueType;

  #validate(params, value) {
    if (!Array.isArray(params))
    throw new TypeError('Parameters for EndProperty must be passed in an array');
    else if (!params.every(param => this.acceptableParamTypes.some(acceptableParamType => param instanceof acceptableParamType)))
    throw new TypeError('Some of the parameters passed are not valid parameters for EndProperty');
    else if (!(value instanceof this.acceptableValTypes) || !/^EndProperty$/i.test(value.targetProp))
    throw new TypeError('Invalid type for value of EndProperty');
  }

  constructor(params, val) {
    super();

    if (typeof params === 'undefined' || typeof val === 'undefined') {
      this.params = '';
      this.value = new SpecialValueType('text', 'VCARD', 'endproperty').repr();
    } else {
      this.#validate(params, val);
      this.params = params.reduce((parametersArray, currentParameter) => {
        parametersArray.push(currentParameter.repr());
        return parametersArray;
      }, []).join(';');
      this.value = val.repr();
    }

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

class SourceProperty extends AbstractBaseProperty {
  prop = 'SOURCE';
  cardinality = '*';
  acceptableParamTypes = [
    ValueParameter,
    PIDParameter,
    PrefParameter,
    AltidParameter,
    MediatypeParameter,
    AnyParameter
  ];
  acceptableValTypes = URIType;

  #validate(params, value) {
    if (typeof params === 'undefined' || typeof value === 'undefined')
    throw new MissingArgument('Parameters and value for SourceProperty must be supplied');
    else if (!Array.isArray(params))
    throw new TypeError('Parameters for SourceProperty must be passed in an array');
    else if (!params.every(param => this.acceptableParamTypes.some(acceptableParamType => param instanceof acceptableParamType)))
    throw new TypeError('Some of the parameters passed are not valid parameters for SourceProperty');
    else if (!(value instanceof this.acceptableValTypes))
    throw new TypeError('Invalid type for value of SourceProperty');
  }

  constructor(params, val) {
    super();

    this.#validate(params, val);
    this.params = params.reduce((parametersArray, currentParameter) => {
      parametersArray.push(currentParameter.repr());
      return parametersArray;
    }, []).join(';');
    this.value = val.repr();

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

class KindProperty extends AbstractBaseProperty {
  prop = 'KIND';
  cardinality = '*1';
  acceptableParamTypes = [
    ValueParameter,
    AnyParameter
  ];
  acceptableValTypes = SpecialValueType;

  #validate(params, value) {
    if (typeof params === 'undefined' || typeof value === 'undefined')
    throw new MissingArgument('Parameters and value for KindProperty must be supplied');
    else if (!Array.isArray(params))
    throw new TypeError('Parameters for KindProperty must be passed in an array');
    else if (!params.every(param => this.acceptableParamTypes.some(acceptableParamType => param instanceof acceptableParamType)))
    throw new TypeError('Some of the parameters passed are not valid parameters for KindProperty');
    else if (!(value instanceof this.acceptableValTypes) || !/^KindProperty$/i.test(value.targetProp))
    throw new TypeError('Invalid type for value of KindProperty');
  }

  constructor(params, val) {
    super();

    this.#validate(params, val);
    this.params = params.reduce((parametersArray, currentParameter) => {
      parametersArray.push(currentParameter.repr());
      return parametersArray;
    }, []).join(';');
    this.value = val.repr();

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

class XMLProperty extends AbstractBaseProperty {
  prop = 'XML';
  cardinality = '*';
  acceptableParamTypes = [
    ValueParameter,
    AltidParameter
  ];
  acceptableValTypes = TextType;

  #validate(params, value) {
    if (typeof params === 'undefined' || typeof value === 'undefined')
    throw new MissingArgument('Parameters and value for XMLProperty must be supplied');
    else if (!Array.isArray(params))
    throw new TypeError('Parameters for XMLProperty must be passed in an array');
    else if (!params.every(param => this.acceptableParamTypes.some(acceptableParamType => param instanceof acceptableParamType)))
    throw new TypeError('Some of the parameters passed are not valid parameters for XMLProperty');
    else if (!(value instanceof this.acceptableValTypes))
    throw new TypeError('Invalid type for value of XMLProperty');
  }

  constructor(params, val) {
    super();

    this.#validate(params, val);
    this.params = params.reduce((parametersArray, currentParameter) => {
      parametersArray.push(currentParameter.repr());
      return parametersArray;
    }, []).join(';');
    this.value = val.repr();

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

// Identification properties
class FNProperty extends AbstractBaseProperty {
  prop = 'FN';
  cardinality = '1*';
  acceptableParamTypes = [
    ValueParameter,
    TypeParameter,
    LanguageParameter,
    AltidParameter,
    PIDParameter,
    PrefParameter,
    AnyParameter
  ];
  acceptableValTypes = TextType;

  #validate(params, value) {
    if (typeof params === 'undefined' || typeof value === 'undefined')
    throw new MissingArgument('Parameters and value for FNProperty must be supplied');
    else if (!Array.isArray(params))
    throw new TypeError('Parameters for FNProperty must be passed in an array');
    else if (!params.every(param => this.acceptableParamTypes.some(acceptableParamType => {
      if (acceptableParamType === TypeParameter)
      return param instanceof acceptableParamType && !/^(?:Related|Tel)Property$/i.test(param.targetProp);
      return param instanceof acceptableParamType;
    })))
    throw new TypeError('Some of the parameters passed are not valid parameters for FNProperty');
    else if (!(value instanceof this.acceptableValTypes))
    throw new TypeError('Invalid type for value of FNProperty');
  }

  constructor(params, val) {
    super();

    this.#validate(params, val);
    this.params = params.reduce((parametersArray, currentParameter) => {
      parametersArray.push(currentParameter.repr());
      return parametersArray;
    }, []).join(';');
    this.value = val.repr();

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

class NProperty extends AbstractBaseProperty {
  prop = 'N';
  cardinality = '*1';
  acceptableParamTypes = [
    ValueParameter,
    SortAsParameter,
    LanguageParameter,
    AltidParameter,
    AnyParameter
  ];
  acceptableValTypes = SpecialValueType;

  #validate(params, value) {
    if (typeof params === 'undefined' || typeof value === 'undefined')
    throw new MissingArgument('Parameters and value for NProperty must be supplied');
    else if (!Array.isArray(params))
    throw new TypeError('Parameters for NProperty must be passed in an array');
    else if (!params.every(param => this.acceptableParamTypes.some(acceptableParamType => param instanceof acceptableParamType)))
    throw new TypeError('Some of the parameters passed are not valid parameters for NProperty');
    else if (!(value instanceof this.acceptableValTypes) || !/^NProperty$/i.test(value.targetProp))
    throw new TypeError('Invalid type for value of NProperty');
  }

  constructor(params, val) {
    super();

    this.#validate(params, val);
    this.params = params.reduce((parametersArray, currentParameter) => {
      parametersArray.push(currentParameter.repr());
      return parametersArray;
    }, []).join(';');
    this.value = val.repr();

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

class NicknameProperty extends AbstractBaseProperty {
  prop = 'NICKNAME';
  cardinality = '*';
  acceptableParamTypes = [
    ValueParameter,
    TypeParameter,
    LanguageParameter,
    AltidParameter,
    PIDParameter,
    PrefParameter,
    AnyParameter
  ];
  acceptableValTypes = [
    TextType,
    TextListType
  ];

  #validate(params, value) {
    if (typeof params === 'undefined' || typeof value === 'undefined')
    throw new MissingArgument('Parameters and value for NicknameProperty must be supplied');
    else if (!Array.isArray(params))
    throw new TypeError('Parameters for NicknameProperty must be passed in an array');
    else if (!params.every(param => this.acceptableParamTypes.some(acceptableParamType => {
      if (acceptableParamType === TypeParameter)
      return param instanceof acceptableParamType && !/^(?:Related|Tel)Property$/i.test(param.targetProp);
      return param instanceof acceptableParamType;
    })))
    throw new TypeError('Some of the parameters passed are not valid parameters for NicknameProperty');
    else if (!this.acceptableValTypes.some(valType => value instanceof valType))
    throw new TypeError('Invalid type for value of NicknameProperty');
  }

  constructor(params, val) {
    super();

    this.#validate(params, val);
    this.params = params.reduce((parametersArray, currentParameter) => {
      parametersArray.push(currentParameter.repr());
      return parametersArray;
    }, []).join(';');
    this.value = val.repr();

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

class PhotoProperty extends AbstractBaseProperty {
  prop = 'PHOTO';
  cardinality = '*';
  acceptableParamTypes = [
    ValueParameter,
    AltidParameter,
    TypeParameter,
    MediatypeParameter,
    PrefParameter,
    PIDParameter,
    AnyParameter
  ];
  acceptableValTypes = URIType;

  #validate(params, value) {
    if (typeof params === 'undefined' || typeof value === 'undefined')
    throw new MissingArgument('Parameters and value for PhotoProperty must be supplied');
    else if (!Array.isArray(params))
    throw new TypeError('Parameters for PhotoProperty must be passed in an array');
    else if (!params.every(param => this.acceptableParamTypes.some(acceptableParamType => {
      if (acceptableParamType === TypeParameter)
      return param instanceof acceptableParamType && !/^(?:Related|Tel)Property$/i.test(param.targetProp);
      return param instanceof acceptableParamType;
    })))
    throw new TypeError('Some of the parameters passed are not valid parameters for PhotoProperty');
    else if (!(value instanceof this.acceptableValTypes))
    throw new TypeError('Invalid type for value of PhotoProperty');
  }

  constructor(params, val) {
    super();

    this.#validate(params, val);
    this.params = params.reduce((parametersArray, currentParameter) => {
      parametersArray.push(currentParameter.repr());
      return parametersArray;
    }, []).join(';');
    this.value = val.repr();

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

class BdayProperty extends AbstractBaseProperty {
  prop = 'BDAY';
  cardinality = '*1';
  acceptableParamTypes = [
    ValueParameter,
    LanguageParameter,
    AltidParameter,
    CalscaleParameter,
    AnyParameter
  ];
  acceptableValTypes = [
    DateTimeType,
    TextType
  ];

  #validate(params, value) {
    if (typeof params === 'undefined' || typeof value === 'undefined')
    throw new MissingArgument('Parameters and value for BdayProperty must be supplied');
    else if (!Array.isArray(params))
    throw new TypeError('Parameters for BdayProperty must be passed in an array');
    else if (!params.every(param => this.acceptableParamTypes.some(acceptableParamType => param instanceof acceptableParamType)))
    throw new TypeError('Some of the parameters passed are not valid parameters for BdayProperty');
    else if (!this.acceptableValTypes.some(valType => value instanceof valType))
    throw new TypeError('Invalid type for value of BdayProperty');
  }

  constructor(params, val) {
    super();

    this.#validate(params, val);
    this.params = params.reduce((parametersArray, currentParameter) => {
      parametersArray.push(currentParameter.repr());
      return parametersArray;
    }, []).join(';');
    this.value = val.repr();

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

class AnniversaryProperty extends AbstractBaseProperty {
  prop = 'ANNIVERSARY';
  cardinality = '*1';
  acceptableParamTypes = [
    ValueParameter,
    AltidParameter,
    CalscaleParameter,
    AnyParameter
  ];
  acceptableValTypes = [
    DateTimeType,
    TextType
  ];

  #validate(params, value) {
    if (typeof params === 'undefined' || typeof value === 'undefined')
    throw new MissingArgument('Parameters and value for AnniversaryProperty must be supplied');
    else if (!Array.isArray(params))
    throw new TypeError('Parameters for AnniversaryProperty must be passed in an array');
    else if (!params.every(param => this.acceptableParamTypes.some(acceptableParamType => param instanceof acceptableParamType)))
    throw new TypeError('Some of the parameters passed are not valid parameters for AnniversaryProperty');
    else if (!this.acceptableValTypes.some(valType => value instanceof valType))
    throw new TypeError('Invalid type for value of AnniversaryProperty');
  }

  constructor(params, val) {
    super();

    this.#validate(params, val);
    this.params = params.reduce((parametersArray, currentParameter) => {
      parametersArray.push(currentParameter.repr());
      return parametersArray;
    }, []).join(';');
    this.value = val.repr();

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

class GenderProperty extends AbstractBaseProperty {
  prop = 'GENDER';
  cardinality = '*1';
  acceptableParamTypes = [
    ValueParameter,
    AnyParameter
  ];
  acceptableValTypes = [
    SexType,
    SpecialValueType
  ];

  #validate(params, value) {
    if (typeof params === 'undefined' || typeof value === 'undefined')
    throw new MissingArgument('Parameters and value for GenderProperty must be supplied');
    else if (!Array.isArray(params))
    throw new TypeError('Parameters for GenderProperty must be passed in an array');
    else if (!params.every(param => this.acceptableParamTypes.some(acceptableParamType => param instanceof acceptableParamType)))
    throw new TypeError('Some of the parameters passed are not valid parameters for GenderProperty');
    else if (!this.acceptableValTypes.some(valType => {
      if (valType === SpecialValueType)
      return (value instanceof valType) && /^GenderProperty$/i.test(value.targetProp);
      return value instanceof valType;
    }))
    throw new TypeError('Invalid type for value of GenderProperty');
  }

  constructor(params, val) {
    super();

    this.#validate(params, val);
    this.params = params.reduce((parametersArray, currentParameter) => {
      parametersArray.push(currentParameter.repr());
      return parametersArray;
    }, []).join(';');
    this.value = val.repr();

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

// Delivery Addressing Properties
class AdrProperty extends AbstractBaseProperty {
  prop = 'ADR';
  cardinality = '*';
  acceptableParamTypes = [
    LabelParameter,
    ValueParameter,
    LanguageParameter,
    GeoParameter,
    TzParameter,
    AltidParameter,
    PIDParameter,
    PrefParameter,
    TypeParameter,
    AnyParameter
  ];
  acceptableValTypes = SpecialValueType;

  #validate(params, value) {
    if (typeof params === 'undefined' || typeof value === 'undefined')
    throw new MissingArgument('Parameters and value for AdrProperty must be supplied');
    else if (!Array.isArray(params))
    throw new TypeError('Parameters for AdrProperty must be passed in an array');
    else if (!params.every(param => this.acceptableParamTypes.some(acceptableParamType => {
      if (acceptableParamType === TypeParameter)
      return param instanceof acceptableParamType && !/^(?:Related|Tel)Property$/i.test(param.targetProp);
      return param instanceof acceptableParamType;
    })))
    throw new TypeError('Some of the parameters passed are not valid parameters for AdrProperty');
    else if (!(value instanceof this.acceptableValTypes) || !/^AdrProperty$/i.test(value.targetProp))
    throw new TypeError('Invalid type for value of AdrProperty');
  }

  constructor(params, val) {
    super();

    this.#validate(params, val);
    this.params = params.reduce((parametersArray, currentParameter) => {
      parametersArray.push(currentParameter.repr());
      return parametersArray;
    }, []).join(';');
    this.value = val.repr();

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

// Communications Properties
class TelProperty extends AbstractBaseProperty {
  prop = 'TEL';
  cardinality = '*';
  acceptableParamTypes = [
    ValueParameter,
    TypeParameter,
    PIDParameter,
    PrefParameter,
    AltidParameter,
    AnyParameter
  ];
  acceptableValTypes = URIType;

  #validate(params, value) {
    if (typeof params === 'undefined' || typeof value === 'undefined')
    throw new MissingArgument('Parameters and value for TelProperty must be supplied');
    else if (!Array.isArray(params))
    throw new TypeError('Parameters for TelProperty must be passed in an array');
    else if (!params.every(param => this.acceptableParamTypes.some(acceptableParamType => {
      if (acceptableParamType === TypeParameter)
      return param instanceof acceptableParamType && /^TelProperty$/i.test(param.targetProp);
      return param instanceof acceptableParamType;
    })))
    throw new TypeError('Some of the parameters passed are not valid parameters for TelProperty');
    else if (!(value instanceof this.acceptableValTypes))
    throw new TypeError('Invalid type for value of TelProperty');
  }

  constructor(params, val) {
    super();

    this.#validate(params, val);
    this.params = params.reduce((parametersArray, currentParameter) => {
      parametersArray.push(currentParameter.repr());
      return parametersArray;
    }, []).join(';');
    this.value = val.repr();

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

class EmailProperty extends AbstractBaseProperty {
  prop = 'EMAIL';
  cardinality = '*';
  acceptableParamTypes = [
    ValueParameter,
    PIDParameter,
    PrefParameter,
    TypeParameter,
    AltidParameter,
    AnyParameter
  ];
  acceptableValTypes = TextType;

  #validate(params, value) {
    if (typeof params === 'undefined' || typeof value === 'undefined')
    throw new MissingArgument('Parameters and value for EmailProperty must be supplied');
    else if (!Array.isArray(params))
    throw new TypeError('Parameters for EmailProperty must be passed in an array');
    else if (!params.every(param => this.acceptableParamTypes.some(acceptableParamType => {
      if (acceptableParamType === TypeParameter)
      return param instanceof acceptableParamType && !/^(?:Related|Tel)Property$/i.test(param.targetProp);
      return param instanceof acceptableParamType;
    })))
    throw new TypeError('Some of the parameters passed are not valid parameters for EmailProperty');
    else if (!(value instanceof this.acceptableValTypes))
    throw new TypeError('Invalid type for value of EmailProperty');
  }

  constructor(params, val) {
    super();

    this.#validate(params, val);
    this.params = params.reduce((parametersArray, currentParameter) => {
      parametersArray.push(currentParameter.repr());
      return parametersArray;
    }, []).join(';');
    this.value = val.repr();

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

class IMPPProperty extends AbstractBaseProperty {
  prop = 'IMPP';
  cardinality = '*';
  acceptableParamTypes = [
    ValueParameter,
    PIDParameter,
    PrefParameter,
    TypeParameter,
    MediatypeParameter,
    AltidParameter,
    AnyParameter
  ];
  acceptableValTypes = URIType;

  #validate(params, value) {
    if (typeof params === 'undefined' || typeof value === 'undefined')
    throw new MissingArgument('Parameters and value for IMPPProperty must be supplied');
    else if (!Array.isArray(params))
    throw new TypeError('Parameters for IMPPProperty must be passed in an array');
    else if (!params.every(param => this.acceptableParamTypes.some(acceptableParamType => {
      if (acceptableParamType === TypeParameter)
      return param instanceof acceptableParamType && !/^(?:Related|Tel)Property$/i.test(param.targetProp);
      return param instanceof acceptableParamType;
    })))
    throw new TypeError('Some of the parameters passed are not valid parameters for IMPPProperty');
    else if (!(value instanceof this.acceptableValTypes))
    throw new TypeError('Invalid type for value of IMPPProperty');
  }

  constructor(params, val) {
    super();

    this.#validate(params, val);
    this.params = params.reduce((parametersArray, currentParameter) => {
      parametersArray.push(currentParameter.repr());
      return parametersArray;
    }, []).join(';');
    this.value = val.repr();

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

class LangProperty extends AbstractBaseProperty {
  prop = 'LANG';
  cardinality = '*';
  acceptableParamTypes = [
    ValueParameter,
    PIDParameter,
    PrefParameter,
    AltidParameter,
    TypeParameter,
    AnyParameter
  ];
  acceptableValTypes = LanguageTagType;

  #validate(params, value) {
    if (typeof params === 'undefined' || typeof value === 'undefined')
    throw new MissingArgument('Parameters and value for LangProperty must be supplied');
    else if (!Array.isArray(params))
    throw new TypeError('Parameters for LangProperty must be passed in an array');
    else if (!params.every(param => this.acceptableParamTypes.some(acceptableParamType => {
      if (acceptableParamType === TypeParameter)
      return param instanceof acceptableParamType && !/^(?:Related|Tel)Property$/i.test(param.targetProp);
      return param instanceof acceptableParamType;
    })))
    throw new TypeError('Some of the parameters passed are not valid parameters for LangProperty');
    else if (!(value instanceof this.acceptableValTypes))
    throw new TypeError('Invalid type for value of LangProperty');
  }

  constructor(params, val) {
    super();

    this.#validate(params, val);
    this.params = params.reduce((parametersArray, currentParameter) => {
      parametersArray.push(currentParameter.repr());
      return parametersArray;
    }, []).join(';');
    this.value = val.repr();

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

// Geographical Properties
class TzProperty extends AbstractBaseProperty {
  prop = 'TZ';
  cardinality = '*';
  acceptableParamTypes = [
    ValueParameter,
    AltidParameter,
    PIDParameter,
    PrefParameter,
    TypeParameter,
    MediatypeParameter,
    AnyParameter
  ];
  acceptableValTypes = [
    TextType,
    URIType,
    DateTimeType
  ];

  #validate(params, value) {
    if (typeof params === 'undefined' || typeof value === 'undefined')
    throw new MissingArgument('Parameters and value for TzProperty must be supplied');
    else if (!Array.isArray(params))
    throw new TypeError('Parameters for TzProperty must be passed in an array');
    else if (!params.every(param => this.acceptableParamTypes.some(acceptableParamType => {
      if (acceptableParamType === TypeParameter)
      return param instanceof acceptableParamType && !/^(?:Related|Tel)Property$/i.test(param.targetProp);
      return param instanceof acceptableParamType;
    })))
    throw new TypeError('Some of the parameters passed are not valid parameters for TzProperty');
    else if (!this.acceptableValTypes.some(valType => {
      if (valType === DateTimeType)
      return value instanceof valType && value.type === 'UTC-OFFSET';
      return value instanceof valType;
    }))
    throw new TypeError('Invalid type for value of TzProperty');
  }

  constructor(params, val) {
    super();

    this.#validate(params, val);
    this.params = params.reduce((parametersArray, currentParameter) => {
      parametersArray.push(currentParameter.repr());
      return parametersArray;
    }, []).join(';');
    this.value = val.repr();

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

class GeoProperty extends AbstractBaseProperty {
  prop = 'GEO';
  cardinality = '*';
  acceptableParamTypes = [
    ValueParameter,
    PIDParameter,
    PrefParameter,
    TypeParameter,
    MediatypeParameter,
    AltidParameter,
    AnyParameter
  ];
  acceptableValTypes = URIType;

  #validate(params, value) {
    if (typeof params === 'undefined' || typeof value === 'undefined')
    throw new MissingArgument('Parameters and value for GeoProperty must be supplied');
    else if (!Array.isArray(params))
    throw new TypeError('Parameters for GeoProperty must be passed in an array');
    else if (!params.every(param => this.acceptableParamTypes.some(acceptableParamType => {
      if (acceptableParamType === TypeParameter)
      return param instanceof acceptableParamType && !/^(?:Related|Tel)Property$/i.test(param.targetProp);
      return param instanceof acceptableParamType;
    })))
    throw new TypeError('Some of the parameters passed are not valid parameters for GeoProperty');
    else if (!(value instanceof this.acceptableValTypes))
    throw new TypeError('Invalid type for value of GeoProperty');
  }

  constructor(params, val) {
    super();

    this.#validate(params, val);
    this.params = params.reduce((parametersArray, currentParameter) => {
      parametersArray.push(currentParameter.repr());
      return parametersArray;
    }, []).join(';');
    this.value = val.repr();

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

// Organizational Properties
class TitleProperty extends AbstractBaseProperty {
  prop = 'TITLE';
  cardinality = '*';
  acceptableParamTypes = [
    ValueParameter,
    LanguageParameter,
    PIDParameter,
    PrefParameter,
    AltidParameter,
    TypeParameter,
    AnyParameter
  ];
  acceptableValTypes = TextType;

  #validate(params, value) {
    if (typeof params === 'undefined' || typeof value === 'undefined')
    throw new MissingArgument('Parameters and value for TitleProperty must be supplied');
    else if (!Array.isArray(params))
    throw new TypeError('Parameters for TitleProperty must be passed in an array');
    else if (!params.every(param => this.acceptableParamTypes.some(acceptableParamType => {
      if (acceptableParamType === TypeParameter)
      return param instanceof acceptableParamType && !/^(?:Related|Tel)Property$/i.test(param.targetProp);
      return param instanceof acceptableParamType;
    })))
    throw new TypeError('Some of the parameters passed are not valid parameters for TitleProperty');
    else if (!(value instanceof this.acceptableValTypes))
    throw new TypeError('Invalid type for value of TitleProperty');
  }

  constructor(params, val) {
    super();

    this.#validate(params, val);
    this.params = params.reduce((parametersArray, currentParameter) => {
      parametersArray.push(currentParameter.repr());
      return parametersArray;
    }, []).join(';');
    this.value = val.repr();

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

class RoleProperty extends AbstractBaseProperty {
  prop = 'ROLE';
  cardinality = '*';
  acceptableParamTypes = [
    ValueParameter,
    LanguageParameter,
    PIDParameter,
    PrefParameter,
    TypeParameter,
    AltidParameter,
    AnyParameter
  ];
  acceptableValTypes = TextType;

  #validate(params, value) {
    if (typeof params === 'undefined' || typeof value === 'undefined')
    throw new MissingArgument('Parameters and value for RoleProperty must be supplied');
    else if (!Array.isArray(params))
    throw new TypeError('Parameters for RoleProperty must be passed in an array');
    else if (!params.every(param => this.acceptableParamTypes.some(acceptableParamType => {
      if (acceptableParamType === TypeParameter)
      return param instanceof acceptableParamType && !/^(?:Related|Tel)Property$/i.test(param.targetProp);
      return param instanceof acceptableParamType;
    })))
    throw new TypeError('Some of the parameters passed are not valid parameters for RoleProperty');
    else if (!(value instanceof this.acceptableValTypes))
    throw new TypeError('Invalid type for value of RoleProperty');
  }

  constructor(params, val) {
    super();

    this.#validate(params, val);
    this.params = params.reduce((parametersArray, currentParameter) => {
      parametersArray.push(currentParameter.repr());
      return parametersArray;
    }, []).join(';');
    this.value = val.repr();

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

class LogoProperty extends AbstractBaseProperty {
  prop = 'LOGO';
  cardinality = '*';
  acceptableParamTypes = [
    ValueParameter,
    LanguageParameter,
    PIDParameter,
    PrefParameter,
    TypeParameter,
    MediatypeParameter,
    AltidParameter,
    AnyParameter
  ];
  acceptableValTypes = URIType;

  #validate(params, value) {
    if (typeof params === 'undefined' || typeof value === 'undefined')
    throw new MissingArgument('Parameters and value for LogoProperty must be supplied');
    else if (!Array.isArray(params))
    throw new TypeError('Parameters for LogoProperty must be passed in an array');
    else if (!params.every(param => this.acceptableParamTypes.some(acceptableParamType => {
      if (acceptableParamType === TypeParameter)
      return param instanceof acceptableParamType && !/^(?:Related|Tel)Property$/i.test(param.targetProp);
      return param instanceof acceptableParamType;
    })))
    throw new TypeError('Some of the parameters passed are not valid parameters for LogoProperty');
    else if (!(value instanceof this.acceptableValTypes))
    throw new TypeError('Invalid type for value of LogoProperty');
  }

  constructor(params, val) {
    super();

    this.#validate(params, val);
    this.params = params.reduce((parametersArray, currentParameter) => {
      parametersArray.push(currentParameter.repr());
      return parametersArray;
    }, []).join(';');
    this.value = val.repr();

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

class OrgProperty extends AbstractBaseProperty {
  prop = 'ORG';
  cardinality = '*';
  acceptableParamTypes = [
    ValueParameter,
    SortAsParameter,
    LanguageParameter,
    PIDParameter,
    PrefParameter,
    AltidParameter,
    TypeParameter,
    AnyParameter
  ];
  acceptableValTypes = SpecialValueType;

  #validate(params, value) {
    if (typeof params === 'undefined' || typeof value === 'undefined')
    throw new MissingArgument('Parameters and value for OrgProperty must be supplied');
    else if (!Array.isArray(params))
    throw new TypeError('Parameters for OrgProperty must be passed in an array');
    else if (!params.every(param => this.acceptableParamTypes.some(acceptableParamType => {
      if (acceptableParamType === TypeParameter)
      return param instanceof acceptableParamType && !/^(?:Related|Tel)Property$/i.test(param.targetProp);
      return param instanceof acceptableParamType;
    })))
    throw new TypeError('Some of the parameters passed are not valid parameters for OrgProperty');
    else if (!(value instanceof this.acceptableValTypes) || !/^OrgProperty$/i.test(value.targetProp))
    throw new TypeError('Invalid type for value of OrgProperty');
  }

  constructor(params, val) {
    super();

    this.#validate(params, val);
    this.params = params.reduce((parametersArray, currentParameter) => {
      parametersArray.push(currentParameter.repr());
      return parametersArray;
    }, []).join(';');
    this.value = val.repr();

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

class MemberProperty extends AbstractBaseProperty {
  prop = 'MEMBER';
  cardinality = '*';
  acceptableParamTypes = [
    ValueParameter,
    PIDParameter,
    PrefParameter,
    AltidParameter,
    MediatypeParameter,
    AnyParameter
  ];
  acceptableValTypes = URIType;

  #validate(params, value) {
    if (typeof params === 'undefined' || typeof value === 'undefined')
    throw new MissingArgument('Parameters and value for MemberProperty must be supplied');
    else if (!Array.isArray(params))
    throw new TypeError('Parameters for MemberProperty must be passed in an array');
    else if (!params.every(param => this.acceptableParamTypes.some(acceptableParamType => param instanceof acceptableParamType)))
    throw new TypeError('Some of the parameters passed are not valid parameters for MemberProperty');
    else if (!(value instanceof this.acceptableValTypes))
    throw new TypeError('Invalid type for value of MemberProperty');
  }

  constructor(params, val) {
    super();

    this.#validate(params, val);
    this.params = params.reduce((parametersArray, currentParameter) => {
      parametersArray.push(currentParameter.repr());
      return parametersArray;
    }, []).join(';');
    this.value = val.repr();

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

class RelatedProperty extends AbstractBaseProperty {
  prop = 'RELATED';
  cardinality = '*';
  acceptableParamTypes = [
    ValueParameter,
    LanguageParameter,
    MediatypeParameter,
    PIDParameter,
    PrefParameter,
    AltidParameter,
    TypeParameter,
    AnyParameter
  ];
  acceptableValTypes = [
    URIType,
    TextType
  ];

  #validate(params, value) {
    if (typeof params === 'undefined' || typeof value === 'undefined')
    throw new MissingArgument('Parameters and value for RelatedProperty must be supplied');
    else if (!Array.isArray(params))
    throw new TypeError('Parameters for RelatedProperty must be passed in an array');
    else if (!params.every(param => this.acceptableParamTypes.some(acceptableParamType => {
      if (acceptableParamType === TypeParameter)
      return param instanceof acceptableParamType && /^RelatedProperty$/i.test(param.targetProp);
      return param instanceof acceptableParamType;
    })))
    throw new TypeError('Some of the parameters passed are not valid parameters for RelatedProperty');
    else if (!this.acceptableValTypes.some(valType => value instanceof valType))
    throw new TypeError('Invalid type for value of RelatedProperty');
  }

  constructor(params, val) {
    super();

    this.#validate(params, val);
    this.params = params.reduce((parametersArray, currentParameter) => {
      parametersArray.push(currentParameter.repr());
      return parametersArray;
    }, []).join(';');
    this.value = val.repr();

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

export {
  BeginProperty,
  EndProperty,
  SourceProperty,
  KindProperty,
  XMLProperty,
  FNProperty,
  NProperty,
  NicknameProperty,
  PhotoProperty,
  BdayProperty,
  AnniversaryProperty,
  GenderProperty,
  AdrProperty,
  TelProperty,
  EmailProperty,
  IMPPProperty,
  LangProperty,
  TzProperty,
  GeoProperty,
  TitleProperty,
  RoleProperty,
  LogoProperty,
  OrgProperty,
  MemberProperty,
  RelatedProperty
};
