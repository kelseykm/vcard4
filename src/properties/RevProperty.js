import { BaseProperty } from './BaseProperty.js';
import { MissingArgument, InvalidArgument } from '../errors/index.js';

export class RevProperty extends BaseProperty {
  static identifier = 'RevProperty';
  static prop = 'REV';
  static cardinality = '*1';
  static acceptableParamTypes = new Set([
    'ValueParameter',
    'AnyParameter'
  ]);
  static acceptableValTypes = 'DateTimeType';

  #validate(params, value) {
    if (typeof params === 'undefined' || typeof value === 'undefined')
    throw new MissingArgument('Parameters and value for RevProperty must be supplied');

    else if (!Array.isArray(params))
    throw new InvalidArgument('Parameters for RevProperty must be passed in an array');

    else if (
      !params.every(param => {
        if (param.constructor.identifier === 'ValueParameter')
        return param.value === 'timestamp';

        return this.constructor.acceptableParamTypes.has(param.constructor.identifier);
      })
    )
    throw new TypeError('Some of the parameters passed are not valid parameters for RevProperty');

    else if (
      value.constructor.identifier !== this.constructor.acceptableValTypes ||
      (value.type !== 'TIMESTAMP')
    )
    throw new TypeError('Invalid type for value of RevProperty');
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

Object.freeze(RevProperty);
