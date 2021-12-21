import { BaseProperty } from './BaseProperty.js';
import { MissingArgument, InvalidArgument } from '../errors/index.js';
import {
  LabelParameter,
  ValueParameter,
  LanguageParameter,
  GeoParameter,
  TzParameter,
  AltidParameter,
  PIDParameter,
  PrefParameter,
  IndexParameter,
  TypeParameter,
  AnyParameter,
  CCParameter
} from '../parameters/index.js';
import { SpecialValueType } from '../values/index.js';

export class AdrProperty extends BaseProperty {
  static prop = 'ADR';
  static cardinality = '*';
  static acceptableParamTypes = [
    LabelParameter,
    ValueParameter,
    LanguageParameter,
    GeoParameter,
    TzParameter,
    AltidParameter,
    PIDParameter,
    PrefParameter,
    IndexParameter,
    TypeParameter,
    AnyParameter,
    CCParameter
  ];
  static acceptableValTypes = SpecialValueType;

  #validate(params, value) {
    if (typeof params === 'undefined' || typeof value === 'undefined')
    throw new MissingArgument('Parameters and value for AdrProperty must be supplied');

    else if (!Array.isArray(params))
    throw new InvalidArgument('Parameters for AdrProperty must be passed in an array');

    else if (
      !params.every(
        param => this.constructor.acceptableParamTypes.some(
          acceptableParamType => {
            if (acceptableParamType === TypeParameter)
            return (
              (param instanceof acceptableParamType) &&
              !/^(?:Related|Tel)Property$/i.test(param.targetProp)
            );

            else if (acceptableParamType === ValueParameter)
            return (
              (param instanceof acceptableParamType) &&
              (param.value === 'text')
            );
            return param instanceof acceptableParamType;
          }
        )
      )
    )
    throw new TypeError('Some of the parameters passed are not valid parameters for AdrProperty');

    else if (
      !(value instanceof this.constructor.acceptableValTypes) ||
      !/^AdrProperty$/i.test(value.targetProp)
    )
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

Object.freeze(AdrProperty);
