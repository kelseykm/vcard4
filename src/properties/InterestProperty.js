import { BaseProperty } from './BaseProperty.js';
import { MissingArgument, InvalidArgument } from '../errors/index.js';

export class InterestProperty extends BaseProperty {
  static identifier = 'InterestProperty';
  static prop = 'INTEREST';
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

  get value() {
    return this.#value.repr();
  }
  
  get valueXML() {
    return this.#value.reprXML();
  }

  #validate(params, value) {
    if (typeof params === 'undefined' || typeof value === 'undefined')
    throw new MissingArgument('Parameters and value for InterestProperty must be supplied');

    else if (!Array.isArray(params))
    throw new InvalidArgument('Parameters for InterestProperty must be passed in an array');

    else if (
      !params.every(param => {
        if (param.constructor.identifier === 'LevelParameter')
        return /^InterestProperty$/i.test(param.targetProp);

        else if (param.constructor.identifier === 'TypeParameter')
        return !/^(?:Related|Tel)Property$/i.test(param.targetProp);

        return this.constructor.acceptableParamTypes.has(param.constructor.identifier);
      })
    )
    throw new TypeError('Some of the parameters passed are not valid parameters for InterestProperty');

    else if (value.constructor.identifier !== this.constructor.acceptableValTypes)
    throw new TypeError('Invalid type for value of InterestProperty');
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

Object.freeze(InterestProperty);
