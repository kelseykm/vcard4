import { BaseProperty } from './BaseProperty.js';
import { MissingArgument, InvalidArgument } from '../errors/index.js';
import {
  ValueParameter,
  PrefParameter,
  IndexParameter,
} from '../parameters/index.js';
import { URIType } from '../values/index.js';

export class ContactURIProperty extends BaseProperty {
  static identifier = 'ContactURIProperty';
  static prop = 'CONTACT-URI';
  static cardinality = '*';
  static acceptableParamTypes = [
    ValueParameter,
    PrefParameter,
    IndexParameter,
  ];
  static acceptableValTypes = URIType;

  #validate(params, value) {
    if (typeof params === 'undefined' || typeof value === 'undefined')
    throw new MissingArgument('Parameters and value for ContactURIProperty must be supplied');

    else if (!Array.isArray(params))
    throw new InvalidArgument('Parameters for ContactURIProperty must be passed in an array');

    else if (
      !params.every(
        param => this.constructor.acceptableParamTypes.some(
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
    throw new TypeError('Some of the parameters passed are not valid parameters for ContactURIProperty');

    else if (!(value instanceof this.constructor.acceptableValTypes))
    throw new TypeError('Invalid type for value of ContactURIProperty');

    else if (!/^(mailto|https?)/.test(value.repr()))
    throw new InvalidArgument('Value for ContactURIProperty must be a "mailto", "http", or "https" URI value');
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

Object.freeze(ContactURIProperty);
