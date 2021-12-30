import { BaseProperty } from './BaseProperty.js';
import { MissingArgument, InvalidArgument } from '../errors/index.js';

export class ContactURIProperty extends BaseProperty {
  static identifier = 'ContactURIProperty';
  static prop = 'CONTACT-URI';
  static cardinality = '*';
  static acceptableParamTypes = new Set([
    'ValueParameter',
    'PrefParameter',
    'IndexParameter',
  ]);
  static acceptableValTypes = 'URIType';

  #validate(params, value) {
    if (typeof params === 'undefined' || typeof value === 'undefined')
    throw new MissingArgument('Parameters and value for ContactURIProperty must be supplied');

    else if (!Array.isArray(params))
    throw new InvalidArgument('Parameters for ContactURIProperty must be passed in an array');

    else if (
      !params.every(param => {
        if (param.constructor.identifier === 'ValueParameter')
        return param.value === 'uri';

        return this.constructor.acceptableParamTypes.has(param.constructor.identifier);
      })
    )
    throw new TypeError('Some of the parameters passed are not valid parameters for ContactURIProperty');

    else if (value.constructor.identifier !== this.constructor.acceptableValTypes)
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
