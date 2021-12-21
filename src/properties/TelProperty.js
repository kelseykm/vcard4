import { BaseProperty } from './BaseProperty.js';
import { MissingArgument, InvalidArgument } from '../errors/index.js';
import {
  ValueParameter,
  MediatypeParameter,
  TypeParameter,
  PIDParameter,
  PrefParameter,
  IndexParameter,
  AltidParameter,
  AnyParameter
} from '../parameters/index.js';
import { URIType, TextType } from '../values/index.js';

export class TelProperty extends BaseProperty {
  static prop = 'TEL';
  static cardinality = '*';
  static acceptableParamTypes = [
    ValueParameter,
    MediatypeParameter,
    TypeParameter,
    PIDParameter,
    PrefParameter,
    IndexParameter,
    AltidParameter,
    AnyParameter
  ];
  static acceptableValTypes = [
    URIType,
    TextType
  ];

  #validate(params, value) {
    if (typeof params === 'undefined' || typeof value === 'undefined')
    throw new MissingArgument('Parameters and value for TelProperty must be supplied');

    else if (!Array.isArray(params))
    throw new InvalidArgument('Parameters for TelProperty must be passed in an array');

    else if (
      !params.every(
        param => this.constructor.acceptableParamTypes.some(
          acceptableParamType => {
            if (acceptableParamType === TypeParameter)
            return (
              (param instanceof acceptableParamType) &&
              /^TelProperty$/i.test(param.targetProp)
            );

            else if (acceptableParamType === ValueParameter)
            return (
              (param instanceof acceptableParamType) &&
              (
                ((param.value === 'uri') && (value instanceof URIType)) ||
                ((param.value === 'text') && (value instanceof TextType))
              )
            );

            else if (acceptableParamType === MediatypeParameter)
            return (
              (param instanceof acceptableParamType) &&
              (value instanceof URIType)
            );

            return param instanceof acceptableParamType;
          }
        )
      )
    )
    throw new TypeError('Some of the parameters passed are not valid parameters for TelProperty');

    else if (
      !this.constructor.acceptableValTypes.some(
        valType => value instanceof valType
      )
    )
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
