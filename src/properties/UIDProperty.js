import { BaseProperty } from './BaseProperty.js';
import { MissingArgument, InvalidArgument } from '../errors/index.js';
import { ValueParameter, AnyParameter } from '../parameters/index.js';
import { URIType, TextType } from '../values/index.js';

export class UIDProperty extends BaseProperty {
  static identifier = 'UIDProperty';
  static prop = 'UID';
  static cardinality = '*1';
  static acceptableParamTypes = [
    ValueParameter,
    AnyParameter
  ];
  static acceptableValTypes = [
    URIType,
    TextType
  ];

  #validate(params, value) {
    if (typeof params === 'undefined' || typeof value === 'undefined')
    throw new MissingArgument('Parameters and value for UIDProperty must be supplied');

    else if (!Array.isArray(params))
    throw new InvalidArgument('Parameters for UIDProperty must be passed in an array');

    else if (
      !params.every(
        param => this.constructor.acceptableParamTypes.some(
          acceptableParamType => {
            if (acceptableParamType === ValueParameter)
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
    throw new TypeError('Some of the parameters passed are not valid parameters for UIDProperty');

    else if (
      !this.constructor.acceptableValTypes.some(
        valType => value instanceof valType
      )
    )
    throw new TypeError('Invalid type for value of UIDProperty');
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

Object.freeze(UIDProperty);
