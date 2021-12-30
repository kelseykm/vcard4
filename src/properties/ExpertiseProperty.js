import { BaseProperty } from './BaseProperty.js';
import { MissingArgument, InvalidArgument } from '../errors/index.js';

export class ExpertiseProperty extends BaseProperty {
  static identifier = 'ExpertiseProperty';
  static prop = 'EXPERTISE';
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

  #validate(params, value) {
    if (typeof params === 'undefined' || typeof value === 'undefined')
    throw new MissingArgument('Parameters and value for ExpertiseProperty must be supplied');

    else if (!Array.isArray(params))
    throw new InvalidArgument('Parameters for ExpertiseProperty must be passed in an array');

    else if (
      !params.every(param => {
        if (param.constructor.identifier === 'LevelParameter')
        return /^ExpertiseProperty$/i.test(param.targetProp);

        else if (param.constructor.identifier === 'TypeParameter')
        return !/^(?:Related|Tel)Property$/i.test(param.targetProp);

        return this.constructor.acceptableParamTypes.has(param.constructor.identifier);
      })
    )
    throw new TypeError('Some of the parameters passed are not valid parameters for ExpertiseProperty');

    else if (value.constructor.identifier !== this.constructor.acceptableValTypes)
    throw new TypeError('Invalid type for value of ExpertiseProperty');
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

Object.freeze(ExpertiseProperty);
