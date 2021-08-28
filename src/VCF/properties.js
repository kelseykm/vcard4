import {
  MissingArgument,
  InvalidArgument
} from './errors.js';

import {
  TextType,
  BooleanType,
  DateTimeType,
  IntegerType,
  FloatType,
  LanguageTagType,
  URIType,
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
  AnyParameter
} from './parameters.js';

// Abstract Base Class for all properties
class AbstractBaseProperty {
  #abstractPropertiesAndMethods = [
    'prop',
    'cardinality',
    'acceptableParamTypes',
    'acceptableValType',
    'params',
    'value',
  ];

  checkAbstractPropertiesAndMethods() {
    if (!this.#abstractPropertiesAndMethods.every(abstractPropertyOrMethod => this.hasOwnProperty(abstractPropertyOrMethod) || Object.getPrototypeOf(this).hasOwnProperty(abstractPropertyOrMethod)))
    throw new Error('All abstract properties and methods in abstract base class must be defined in child class');
  }

  repr() {
    if (!this.params)
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
  acceptableParamTypes = null;
  acceptableValType = SpecialValueType;

  constructor() {
    super();

    this.params = null;
    this.value = new SpecialValueType('TEXT', 'VCARD').repr();

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

class EndProperty extends AbstractBaseProperty {
  prop = 'END';
  cardinality = '1';
  acceptableParamTypes = null;
  acceptableValType = SpecialValueType;

  constructor() {
    super();

    this.params = null;
    this.value = new SpecialValueType('TEXT', 'VCARD').repr();

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
  acceptableValType = URIType;

  #validate(params, value) {
    if (typeof params === 'undefined' || typeof value === 'undefined')
    throw new MissingArgument('Parameters and value for SourceProperty must be supplied');
    else if (!Array.isArray(params))
    throw new TypeError('Parameters for SourceProperty must be passed in an array');
    else if (!params.every(param => this.acceptableParamTypes.some(acceptableParamType => param instanceof acceptableParamType)))
    throw new TypeError('Some of the parameters passed are not valid parameters for SourceProperty');
    else if (!(value instanceof this.acceptableValType))
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
  acceptableValType = SpecialValueType;

  #validate(params, value) {
    if (typeof params === 'undefined' || typeof value === 'undefined')
    throw new MissingArgument('Parameters and value for KindProperty must be supplied');
    else if (!Array.isArray(params))
    throw new TypeError('Parameters for KindProperty must be passed in an array');
    else if (!params.every(param => this.acceptableParamTypes.some(acceptableParamType => param instanceof acceptableParamType)))
    throw new TypeError('Some of the parameters passed are not valid parameters for KindProperty');
    else if (!(value instanceof this.acceptableValType))
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
  acceptableValType = TextType;

  #validate(params, value) {
    if (typeof params === 'undefined' || typeof value === 'undefined')
    throw new MissingArgument('Parameters and value for XMLProperty must be supplied');
    else if (!Array.isArray(params))
    throw new TypeError('Parameters for XMLProperty must be passed in an array');
    else if (!params.every(param => this.acceptableParamTypes.some(acceptableParamType => param instanceof acceptableParamType)))
    throw new TypeError('Some of the parameters passed are not valid parameters for XMLProperty');
    else if (!(value instanceof this.acceptableValType))
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

export {
  BeginProperty,
  EndProperty,
  SourceProperty,
  KindProperty,
  XMLProperty
};
