import { BaseProperty } from './BaseProperty.js';
import { MissingArgument, InvalidArgument } from '../errors/index.js';

export class RelatedProperty extends BaseProperty {
  static identifier = 'RelatedProperty';
  static prop = 'RELATED';
  static cardinality = '*';
  static acceptableParamTypes = new Set([
    'ValueParameter',
    'LanguageParameter',
    'MediatypeParameter',
    'PIDParameter',
    'PrefParameter',
    'IndexParameter',
    'AltidParameter',
    'TypeParameter',
    'AnyParameter'
  ]);
  static acceptableValTypes = new Set([
    'URIType',
    'TextType'
  ]);

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
    throw new MissingArgument('Parameters and value for RelatedProperty must be supplied');

    else if (!Array.isArray(params))
    throw new InvalidArgument('Parameters for RelatedProperty must be passed in an array');

    else if (
      !params.every(param => {
        if (param.constructor.identifier === 'TypeParameter')
        return /^RelatedProperty$/i.test(param.targetProp);

        else if (param.constructor.identifier === 'ValueParameter')
        return (
          ((param.value === 'uri') && (value.constructor.identifier === 'URIType')) ||
          ((param.value === 'text') && (value.constructor.identifier === 'TextType'))
        );

        return this.constructor.acceptableParamTypes.has(param.constructor.identifier);
      })
    )
    throw new TypeError('Some of the parameters passed are not valid parameters for RelatedProperty');

    else if (!this.constructor.acceptableValTypes.has(value.constructor.identifier))
    throw new TypeError('Invalid type for value of RelatedProperty');
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

Object.freeze(RelatedProperty);
