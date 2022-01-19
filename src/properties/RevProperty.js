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

  #params;
  #value;

  get params() {
    return this.#params.reduce((parametersArray, currentParameter) => {
      parametersArray.push(currentParameter.repr());
      return parametersArray;
    }, []).join(';');
  }
  
  get paramsXML() {
    return this.#params.reduce((accumulatedParameters, currentParameter) => accumulatedParameters + currentParameter.reprXML(), '');
  }

  get paramsJSON() {
    return this.#params.reduce(
      (accumulatedParameters, currentParameter) => ({ ...currentParameter.reprJSON(), ...accumulatedParameters }),
      {}
    );
  }

  get value() {
    return this.#value.repr();
  }
  
  get valueXML() {
    return this.#value.reprXML();
  }

  get valueJSON() {
    return this.#value.reprJSON();
  }

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
    this.#params = params;
    this.#value = val;

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

Object.freeze(RevProperty);
