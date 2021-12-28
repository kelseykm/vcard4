import { BaseProperty } from './BaseProperty.js';
import { MissingArgument, InvalidArgument } from '../errors/index.js';
import {
  ValueParameter,
  PIDParameter,
  PrefParameter,
  IndexParameter,
  AltidParameter,
  MediatypeParameter,
  AnyParameter
} from '../parameters/index.js';
import { URIType } from '../values/index.js';

export class SourceProperty extends BaseProperty {
  static identifier = 'SourceProperty';
  static prop = 'SOURCE';
  static cardinality = '*';
  static acceptableParamTypes = [
    ValueParameter,
    PIDParameter,
    PrefParameter,
    IndexParameter,
    AltidParameter,
    MediatypeParameter,
    AnyParameter
  ];
  static acceptableValTypes = URIType;

  #validate(params, value) {
    if (typeof params === 'undefined' || typeof value === 'undefined')
    throw new MissingArgument('Parameters and value for SourceProperty must be supplied');

    else if (!Array.isArray(params))
    throw new InvalidArgument('Parameters for SourceProperty must be passed in an array');

    else if (
      !params.every(
        param =>
        this.constructor.acceptableParamTypes.some(
          acceptableParamType => {
            if (acceptableParamType === ValueParameter)
            return (
              (param instanceof acceptableParamType) &&
              (param.value === 'uri')
            );
            return param instanceof acceptableParamType;
          }
        )
      )
    )
    throw new TypeError('Some of the parameters passed are not valid parameters for SourceProperty');

    else if (!(value instanceof this.constructor.acceptableValTypes))
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

Object.freeze(SourceProperty);
