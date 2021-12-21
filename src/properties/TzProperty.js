import { BaseProperty } from './BaseProperty.js';
import { MissingArgument, InvalidArgument } from '../errors/index.js';
import {
  ValueParameter,
  AltidParameter,
  PIDParameter,
  PrefParameter,
  IndexParameter,
  TypeParameter,
  MediatypeParameter,
  AnyParameter
} from '../parameters/index.js';
import {
  TextType,
  URIType,
  DateTimeType
} from '../values/index.js';

export class TzProperty extends BaseProperty {
  static prop = 'TZ';
  static cardinality = '*';
  static acceptableParamTypes = [
    ValueParameter,
    AltidParameter,
    PIDParameter,
    PrefParameter,
    IndexParameter,
    TypeParameter,
    MediatypeParameter,
    AnyParameter
  ];
  static acceptableValTypes = [
    TextType,
    URIType,
    DateTimeType
  ];

  #validate(params, value) {
    if (typeof params === 'undefined' || typeof value === 'undefined')
    throw new MissingArgument('Parameters and value for TzProperty must be supplied');

    else if (!Array.isArray(params))
    throw new InvalidArgument('Parameters for TzProperty must be passed in an array');

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
                ((param.value === 'text') && (value instanceof TextType)) ||
                ((param.value === 'uri') && (value instanceof URIType)) ||
                ((param.value === 'utc-offset') && (value instanceof DateTimeType))
              )
            );

            return param instanceof acceptableParamType;
          }
        )
      )
    )
    throw new TypeError('Some of the parameters passed are not valid parameters for TzProperty');

    else if (
      !this.constructor.acceptableValTypes.some(
        valType => {
          if (valType === DateTimeType)
          return (
            (value instanceof valType) &&
            (value.type === 'UTC-OFFSET')
          );
          return value instanceof valType;
        }
      )
    )
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
