import { BaseProperty } from './BaseProperty.js';
import { MissingArgument, InvalidArgument } from '../errors/index.js';
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
  LabelParameter,
  CCParameter,
  IndexParameter,
  LevelParameter
} from '../parameters/index.js';
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
} from '../values/index.js';

export class ExtendedProperty extends BaseProperty {
  static identifier = 'ExtendedProperty';
  static cardinality = '*';
  static acceptableParamTypes = [
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
    LabelParameter,
    CCParameter,
    IndexParameter,
    LevelParameter
  ];
  static acceptableValTypes = [
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
  ];

  #propRegExp = /^[Xx]-[A-Za-z0-9]+$/;

  #validate(prop, params, value) {
    if (typeof prop === 'undefined' || typeof params === 'undefined' || typeof value === 'undefined')
    throw new MissingArgument('Property, parameter and value for ExtendedProperty must be supplied');

    else if (!Array.isArray(params))
    throw new InvalidArgument('Parameters for ExtendedProperty must be passed in an array');

    else if (!this.#propRegExp.test(prop))
    throw new InvalidArgument('Invalid property for ExtendedProperty');

    else if (
      !params.every(
        param =>
        this.constructor.acceptableParamTypes.some(
          acceptableParamType => {
            if (acceptableParamType === ValueParameter)
            return (
              (param instanceof acceptableParamType) &&
              (param.value === value.repr().toLowerCase())
            );
            return param instanceof acceptableParamType;
          }
        )
      )
    )
    throw new TypeError('Some of the parameters passed are not valid parameters for ExtendedProperty');

    else if (
      !this.constructor.acceptableValTypes.some(
        valType => value instanceof valType
      )
    )
    throw new TypeError('Invalid type for value of ExtendedProperty');
  }

  constructor(prop, params, value) {
    super();

    this.#validate(prop, params, value);
    this.prop = prop.toString().toUpperCase();
    this.params = params.reduce((parametersArray, currentParameter) => {
      parametersArray.push(currentParameter.repr());
      return parametersArray;
    }, []).join(';');
    this.value = value.repr();

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

Object.freeze(ExtendedProperty);
