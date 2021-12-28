import { BaseProperty } from './BaseProperty.js';
import { MissingArgument, InvalidArgument } from '../errors/index.js';
import {
  ValueParameter,
  PIDParameter,
  PrefParameter,
  IndexParameter,
  TypeParameter,
  MediatypeParameter,
  AltidParameter,
  AnyParameter
} from '../parameters/index.js';
import { URIType } from '../values/index.js';

export class IMPPProperty extends BaseProperty {
  static identifier = 'IMPPProperty';
  static prop = 'IMPP';
  static cardinality = '*';
  static acceptableParamTypes = [
    ValueParameter,
    PIDParameter,
    PrefParameter,
    IndexParameter,
    TypeParameter,
    MediatypeParameter,
    AltidParameter,
    AnyParameter
  ];
  static acceptableValTypes = URIType;

  #validate(params, value) {
    if (typeof params === 'undefined' || typeof value === 'undefined')
    throw new MissingArgument('Parameters and value for IMPPProperty must be supplied');

    else if (!Array.isArray(params))
    throw new InvalidArgument('Parameters for IMPPProperty must be passed in an array');

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
              (param.value === 'uri')
            );

            return param instanceof acceptableParamType;
          }
        )
      )
    )
    throw new TypeError('Some of the parameters passed are not valid parameters for IMPPProperty');

    else if (!(value instanceof this.constructor.acceptableValTypes))
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

Object.freeze(IMPPProperty);
