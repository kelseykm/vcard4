import { BaseProperty } from './BaseProperty.js';
import { MissingArgument, InvalidArgument } from '../errors/index.js';
import {
  ValueParameter,
  LanguageParameter,
  AltidParameter,
  CalscaleParameter,
  AnyParameter
} from '../parameters/index.js';
import {
  DateTimeType,
  TextType
} from '../values/index.js';

export class DeathDateProperty extends BaseProperty {
  static identifier = 'DeathDateProperty';
  static prop = 'DEATHDATE';
  static cardinality = '*1';
  static acceptableParamTypes = [
    ValueParameter,
    LanguageParameter,
    AltidParameter,
    CalscaleParameter,
    AnyParameter
  ];
  static acceptableValTypes = [
    DateTimeType,
    TextType
  ];

  #validate(params, value) {
    if (typeof params === 'undefined' || typeof value === 'undefined')
    throw new MissingArgument('Parameters and value for DeathDateProperty must be supplied');

    else if (!Array.isArray(params))
    throw new InvalidArgument('Parameters for DeathDateProperty must be passed in an array');

    else if (
      !params.every(
        param =>
        this.constructor.acceptableParamTypes.some(
          acceptableParamType => {
            if (acceptableParamType === ValueParameter)
            return (
              (param instanceof acceptableParamType) &&
              (
                ((param.value === 'date-and-or-time') && (value instanceof DateTimeType)) ||
                ((param.value === 'text') && (value instanceof TextType))
              )
            );

            else if (acceptableParamType === LanguageParameter)
            return (
              (param instanceof acceptableParamType) &&
              (value instanceof TextType)
            );

            else if (acceptableParamType === CalscaleParameter)
            return (
              (param instanceof acceptableParamType) &&
              (value instanceof DateTimeType)
            );

            return param instanceof acceptableParamType;
          }
        )
      )
    )
    throw new TypeError('Some of the parameters passed are not valid parameters for DeathDateProperty');

    else if (
      !this.constructor.acceptableValTypes.some(
        valType => {
          if (valType === DateTimeType)
          return (
            (value instanceof valType) &&
            (value.type === 'DATE-AND-OR-TIME')
          );
          return value instanceof valType;
        }
      )
    )
    throw new TypeError('Invalid type for value of DeathDateProperty');
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

Object.freeze(DeathDateProperty);
