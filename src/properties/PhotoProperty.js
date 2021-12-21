import { AbstractBaseProperty } from './AbstractBaseProperty.js';
import { MissingArgument, InvalidArgument } from '../errors/index.js';
import {
  ValueParameter,
  AltidParameter,
  TypeParameter,
  MediatypeParameter,
  PrefParameter,
  IndexParameter,
  PIDParameter,
  AnyParameter
} from '../parameters/index.js';
import { URIType } from '../values/index.js';

export class PhotoProperty extends AbstractBaseProperty {
  static prop = 'PHOTO';
  static cardinality = '*';
  static acceptableParamTypes = [
    ValueParameter,
    AltidParameter,
    TypeParameter,
    MediatypeParameter,
    PrefParameter,
    IndexParameter,
    PIDParameter,
    AnyParameter
  ];
  static acceptableValTypes = URIType;

  #validate(params, value) {
    if (typeof params === 'undefined' || typeof value === 'undefined')
    throw new MissingArgument('Parameters and value for PhotoProperty must be supplied');

    else if (!Array.isArray(params))
    throw new InvalidArgument('Parameters for PhotoProperty must be passed in an array');

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
    throw new TypeError('Some of the parameters passed are not valid parameters for PhotoProperty');

    else if (!(value instanceof this.constructor.acceptableValTypes))
    throw new TypeError('Invalid type for value of PhotoProperty');
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
