import { BaseProperty } from './BaseProperty.js';
import { MissingArgument, InvalidArgument } from '../errors/index.js';
import { AnyParameter } from '../parameters/index.js';
import { SpecialValueType } from '../values/index.js';

export class ClientpidmapProperty extends BaseProperty {
  static identifier = 'ClientpidmapProperty';
  static prop = 'CLIENTPIDMAP';
  static cardinality = '*';
  static acceptableParamTypes = AnyParameter;
  static acceptableValTypes = SpecialValueType;

  #validate(params, value) {
    if (typeof params === 'undefined' || typeof value === 'undefined')
    throw new MissingArgument('Parameters and value for ClientpidmapProperty must be supplied');

    else if (!Array.isArray(params))
    throw new InvalidArgument('Parameters for ClientpidmapProperty must be passed in an array');

    else if (
      !params.every(
        param => param instanceof this.constructor.acceptableParamTypes
      )
    )
    throw new TypeError('Some of the parameters passed are not valid parameters for ClientpidmapProperty');

    else if (!(value instanceof this.constructor.acceptableValTypes))
    throw new TypeError('Invalid type for value of ClientpidmapProperty');
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

Object.freeze(ClientpidmapProperty);
