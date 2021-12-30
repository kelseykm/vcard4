import { BaseProperty } from './BaseProperty.js';
import { MissingArgument, InvalidArgument } from '../errors/index.js';

export class EmailProperty extends BaseProperty {
  static identifier = 'EmailProperty';
  static prop = 'EMAIL';
  static cardinality = '*';
  static acceptableParamTypes = new Set([
    'ValueParameter',
    'PIDParameter',
    'PrefParameter',
    'IndexParameter',
    'TypeParameter',
    'AltidParameter',
    'AnyParameter'
  ]);
  static acceptableValTypes = 'TextType';

  #validate(params, value) {
    if (typeof params === 'undefined' || typeof value === 'undefined')
    throw new MissingArgument('Parameters and value for EmailProperty must be supplied');

    else if (!Array.isArray(params))
    throw new InvalidArgument('Parameters for EmailProperty must be passed in an array');


    else if (
      !params.every(param => {
        if (param.constructor.identifier === 'TypeParameter')
        return !/^(?:Related|Tel)Property$/i.test(param.targetProp);

        else if (param.constructor.identifier === 'ValueParameter')
        return param.value === 'text';

        return this.constructor.acceptableParamTypes.has(param.constructor.identifier);
      })
    )
    throw new TypeError('Some of the parameters passed are not valid parameters for EmailProperty');

    else if (value.constructor.identifier !== this.constructor.acceptableValTypes)
    throw new TypeError('Invalid type for value of EmailProperty');
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

Object.freeze(EmailProperty);
