import { BaseProperty } from './BaseProperty.js';
import { MissingArgument, InvalidArgument } from '../errors/index.js';
import {
  ValueParameter,
  MediatypeParameter,
  AltidParameter,
  PIDParameter,
  PrefParameter,
  IndexParameter,
  TypeParameter,
  AnyParameter
} from '../parameters/index.js';
import {
  TextType,
  URIType
} from '../values/index.js';

export class KeyProperty extends BaseProperty {
  static prop = 'KEY';
  static cardinality = '*';
  static acceptableParamTypes = [
    ValueParameter,
    MediatypeParameter,
    AltidParameter,
    PIDParameter,
    PrefParameter,
    IndexParameter,
    TypeParameter,
    AnyParameter
  ];
  static acceptableValTypes = [
    TextType,
    URIType
  ];

  #validate(params, value) {
    if (typeof params === 'undefined' || typeof value === 'undefined')
    throw new MissingArgument('Parameters and value for KeyProperty must be supplied');

    else if (!Array.isArray(params))
    throw new InvalidArgument('Parameters for KeyProperty must be passed in an array');

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
              (
                ((param.value === 'uri') && (value instanceof URIType)) ||
                ((param.value === 'text') && (value instanceof TextType))
              )
            );

            return param instanceof acceptableParamType;
          }
        )
      )
    )
    throw new TypeError('Some of the parameters passed are not valid parameters for KeyProperty');

    else if (
      !this.constructor.acceptableValTypes.some(
        valType => value instanceof valType
      )
    )
    throw new TypeError('Invalid type for value of KeyProperty');
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
