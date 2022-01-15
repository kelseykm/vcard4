import { BaseProperty } from './BaseProperty.js';
import { MissingArgument, InvalidArgument } from '../errors/index.js';

export class AdrProperty extends BaseProperty {
  static identifier = 'AdrProperty';
  static prop = 'ADR';
  static cardinality = '*';
  static acceptableParamTypes = new Set([
    'LabelParameter',
    'ValueParameter',
    'LanguageParameter',
    'GeoParameter',
    'TzParameter',
    'AltidParameter',
    'PIDParameter',
    'PrefParameter',
    'IndexParameter',
    'TypeParameter',
    'AnyParameter',
    'CCParameter'
  ]);
  static acceptableValTypes = 'SpecialValueType';

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
    throw new MissingArgument('Parameters and value for AdrProperty must be supplied');

    else if (!Array.isArray(params))
    throw new InvalidArgument('Parameters for AdrProperty must be passed in an array');

    else if (
      !params.every(param => {
        if (param.constructor.identifier === 'TypeParameter')
        return !/^(?:Related|Tel)Property$/i.test(param.targetProp);

        else if (param.constructor.identifier === 'ValueParameter')
        return param.value === 'text';

        return this.constructor.acceptableParamTypes.has(param.constructor.identifier);
      })
    )
    throw new TypeError('Some of the parameters passed are not valid parameters for AdrProperty');

    else if (
      value.constructor.identifier !== this.constructor.acceptableValTypes ||
      !/^AdrProperty$/i.test(value.targetProp)
    )
    throw new TypeError('Invalid type for value of AdrProperty');
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

Object.freeze(AdrProperty);
