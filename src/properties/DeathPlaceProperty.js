import { BaseProperty } from './BaseProperty.js';
import { MissingArgument, InvalidArgument } from '../errors/index.js';

export class DeathPlaceProperty extends BaseProperty {
  static identifier = 'DeathPlaceProperty';
  static prop = 'DEATHPLACE';
  static cardinality = '*1';
  static acceptableParamTypes = new Set([
    'ValueParameter',
    'LanguageParameter',
    'AltidParameter',
    'AnyParameter'
  ]);
  static acceptableValTypes = new Set([
    'TextType',
    'URIType'
  ]);

  #validate(params, value) {
    if (typeof params === 'undefined' || typeof value === 'undefined')
    throw new MissingArgument('Parameters and value for DeathPlaceProperty must be supplied');

    else if (!Array.isArray(params))
    throw new InvalidArgument('Parameters for DeathPlaceProperty must be passed in an array');

    else if (
      !params.every(param => {
        if (param.constructor.identifier === 'ValueParameter')
        return (
          ((param.value === 'uri') && (value.constructor.identifier === 'URIType')) ||
          ((param.value === 'text') && (value.constructor.identifier === 'TextType'))
        );

        else if (param.constructor.identifier === 'LanguageParameter')
        return value.constructor.identifier === 'TextType';

        return this.constructor.acceptableParamTypes.has(param.constructor.identifier); 
      })
    )
    throw new TypeError('Some of the parameters passed are not valid parameters for DeathPlaceProperty');

    else if (!this.constructor.acceptableValTypes.has(value.constructor.identifier))
    throw new TypeError('Invalid type for value of DeathPlaceProperty');
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

Object.freeze(DeathPlaceProperty);
