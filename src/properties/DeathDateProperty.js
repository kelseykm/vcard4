import { BaseProperty } from './BaseProperty.js';
import { MissingArgument, InvalidArgument } from '../errors/index.js';

export class DeathDateProperty extends BaseProperty {
  static identifier = 'DeathDateProperty';
  static prop = 'DEATHDATE';
  static cardinality = '*1';
  static acceptableParamTypes = new Set([
    'ValueParameter',
    'LanguageParameter',
    'AltidParameter',
    'CalscaleParameter',
    'AnyParameter'
  ]);
  static acceptableValTypes = new Set([
    'DateTimeType',
    'TextType'
  ]);

  #validate(params, value) {
    if (typeof params === 'undefined' || typeof value === 'undefined')
    throw new MissingArgument('Parameters and value for DeathDateProperty must be supplied');

    else if (!Array.isArray(params))
    throw new InvalidArgument('Parameters for DeathDateProperty must be passed in an array');

    else if (
      !params.every(param => {
        if (param.constructor.identifier === 'ValueParameter')
        return (
          ((param.value === 'date-and-or-time') && (value.constructor.identifier === 'DateTimeType')) ||
          ((param.value === 'text') && (value.constructor.identifier === 'TextType'))
        );

        else if (param.constructor.identifier === 'LanguageParameter')
        return value.constructor.identifier === 'TextType';

        else if (param.constructor.identifier === 'CalscaleParameter')
        return value.constructor.identifier === 'DateTimeType';

        return this.constructor.acceptableParamTypes.has(param.constructor.identifier);
      })
    )
    throw new TypeError('Some of the parameters passed are not valid parameters for DeathDateProperty');

    else if (
      !this.constructor.acceptableValTypes.has(value.constructor.identifier) ||
      ((value.constructor.identifier === 'DateTimeType') && (value.type !== 'DATE-AND-OR-TIME'))
    )
    throw new TypeError('Invalid type for value of DeathDateProperty');
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

Object.freeze(DeathDateProperty);
