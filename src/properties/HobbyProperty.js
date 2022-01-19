import { BaseProperty } from './BaseProperty.js';
import { MissingArgument, InvalidArgument } from '../errors/index.js';

export class HobbyProperty extends BaseProperty {
  static identifier = 'HobbyProperty';
  static prop = 'HOBBY';
  static cardinality = '*';
  static acceptableParamTypes = new Set([
    'LevelParameter',
    'IndexParameter',
    'LanguageParameter',
    'PrefParameter',
    'AltidParameter',
    'TypeParameter',
    'AnyParameter'
  ]);
  static acceptableValTypes = 'TextType';

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
    throw new MissingArgument('Parameters and value for HobbyProperty must be supplied');

    else if (!Array.isArray(params))
    throw new InvalidArgument('Parameters for HobbyProperty must be passed in an array');

    else if (
      !params.every(param => {
        if (param.constructor.identifier === 'LevelParameter')
        return /^HobbyProperty$/i.test(param.targetProp);

        else if (param.constructor.identifier === 'TypeParameter')
        return !/^(?:Related|Tel)Property$/i.test(param.targetProp);

        return this.constructor.acceptableParamTypes.has(param.constructor.identifier);
      })
    )
    throw new TypeError('Some of the parameters passed are not valid parameters for HobbyProperty');

    else if (value.constructor.identifier !== this.constructor.acceptableValTypes)
    throw new TypeError('Invalid type for value of HobbyProperty');
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

Object.freeze(HobbyProperty);
