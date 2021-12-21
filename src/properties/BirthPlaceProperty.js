import { AbstractBaseProperty } from './AbstractBaseProperty.js';
import { MissingArgument, InvalidArgument } from '../errors/index.js';
import {
  ValueParameter,
  LanguageParameter,
  AltidParameter,
  AnyParameter
} from '../parameters/index.js';
import {
  TextType,
  URIType
} from '../values/index.js';

export class BirthPlaceProperty extends AbstractBaseProperty {
  static prop = 'BIRTHPLACE';
  static cardinality = '*1';
  static acceptableParamTypes = [
    ValueParameter,
    LanguageParameter,
    AltidParameter,
    AnyParameter
  ];
  static acceptableValTypes = [
    TextType,
    URIType
  ];

  #validate(params, value) {
    if (typeof params === 'undefined' || typeof value === 'undefined')
    throw new MissingArgument('Parameters and value for BirthPlaceProperty must be supplied');

    else if (!Array.isArray(params))
    throw new InvalidArgument('Parameters for BirthPlaceProperty must be passed in an array');

    else if (
      !params.every(
        param =>
        this.constructor.acceptableParamTypes.some(
          acceptableParamType => {
            if (acceptableParamType === ValueParameter)
            return (
              (param instanceof acceptableParamType) &&
              (
                ((param.value === 'uri') && (value instanceof URIType)) ||
                ((param.value === 'text') && (value instanceof TextType))
              )
            );

            else if (acceptableParamType === LanguageParameter)
            return (
              (param instanceof acceptableParamType) &&
              (value instanceof TextType)
            );

            return param instanceof acceptableParamType;
          }
        )
      )
    )
    throw new TypeError('Some of the parameters passed are not valid parameters for BirthPlaceProperty');

    else if (
      !this.constructor.acceptableValTypes.some(
        valType => value instanceof valType
      )
    )
    throw new TypeError('Invalid type for value of BirthPlaceProperty');
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
