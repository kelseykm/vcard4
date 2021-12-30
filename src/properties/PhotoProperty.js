import { BaseProperty } from './BaseProperty.js';
import { MissingArgument, InvalidArgument } from '../errors/index.js';

export class PhotoProperty extends BaseProperty {
  static identifier = 'PhotoProperty';
  static prop = 'PHOTO';
  static cardinality = '*';
  static acceptableParamTypes = new Set([
    'ValueParameter',
    'AltidParameter',
    'TypeParameter',
    'MediatypeParameter',
    'PrefParameter',
    'IndexParameter',
    'PIDParameter',
    'AnyParameter'
  ]);
  static acceptableValTypes = 'URIType';

  #validate(params, value) {
    if (typeof params === 'undefined' || typeof value === 'undefined')
    throw new MissingArgument('Parameters and value for PhotoProperty must be supplied');

    else if (!Array.isArray(params))
    throw new InvalidArgument('Parameters for PhotoProperty must be passed in an array');

    else if (
      !params.every(param => {
        if (param.constructor.identifier === 'TypeParameter')
        return !/^(?:Related|Tel)Property$/i.test(param.targetProp);

        else if (param.constructor.identifier === 'ValueParameter')
        return param.value === 'uri';

        return this.constructor.acceptableParamTypes.has(param.constructor.identifier);
      })
    )
    throw new TypeError('Some of the parameters passed are not valid parameters for PhotoProperty');

    else if (value.constructor.identifier !== this.constructor.acceptableValTypes)
    throw new TypeError('Invalid type for value of PhotoProperty');
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

Object.freeze(PhotoProperty);
