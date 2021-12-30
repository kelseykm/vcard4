import { BaseProperty } from './BaseProperty.js';
import { MissingArgument, InvalidArgument } from '../errors/index.js';

export class TzProperty extends BaseProperty {
  static identifier = 'TzProperty';
  static prop = 'TZ';
  static cardinality = '*';
  static acceptableParamTypes = new Set([
    'ValueParameter',
    'AltidParameter',
    'PIDParameter',
    'PrefParameter',
    'IndexParameter',
    'TypeParameter',
    'MediatypeParameter',
    'AnyParameter'
  ]);
  static acceptableValTypes = new Set([
    'TextType',
    'URIType',
    'DateTimeType'
  ]);

  #validate(params, value) {
    if (typeof params === 'undefined' || typeof value === 'undefined')
    throw new MissingArgument('Parameters and value for TzProperty must be supplied');

    else if (!Array.isArray(params))
    throw new InvalidArgument('Parameters for TzProperty must be passed in an array');

    else if (
      !params.every(param => {
        if (param.constructor.identifier === 'TypeParameter')
        return !/^(?:Related|Tel)Property$/i.test(param.targetProp);

        else if (param.constructor.identifier === 'ValueParameter')
        return (
          ((param.value === 'text') && (value.constructor.identifier === 'TextType')) ||
          ((param.value === 'uri') && (value.constructor.identifier === 'URIType')) ||
          ((param.value === 'utc-offset') && (value.constructor.identifier === 'DateTimeType'))
        );

        return this.constructor.acceptableParamTypes.has(param.constructor.identifier);
      })
    )
    throw new TypeError('Some of the parameters passed are not valid parameters for TzProperty');

    else if (
      !this.constructor.acceptableValTypes.has(value.constructor.identifier) ||
      ((value.constructor.identifier === 'DateTimeType') && (value.type !== 'UTC-OFFSET'))
    )
    throw new TypeError('Invalid type for value of TzProperty');
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

Object.freeze(TzProperty);
