import { BaseProperty } from './BaseProperty.js';
import { MissingArgument, InvalidArgument } from '../errors/index.js';

export class IMPPProperty extends BaseProperty {
  static identifier = 'IMPPProperty';
  static prop = 'IMPP';
  static cardinality = '*';
  static acceptableParamTypes = [
    'ValueParameter',
    'PIDParameter',
    'PrefParameter',
    'IndexParameter',
    'TypeParameter',
    'MediatypeParameter',
    'AltidParameter',
    'AnyParameter'
  ];
  static acceptableValTypes = 'URIType';

  #validate(params, value) {
    if (typeof params === 'undefined' || typeof value === 'undefined')
    throw new MissingArgument('Parameters and value for IMPPProperty must be supplied');

    else if (!Array.isArray(params))
    throw new InvalidArgument('Parameters for IMPPProperty must be passed in an array');

    else if (
      !params.every(param => {
        if (param.constructor.identifier === 'TypeParameter')
        return !/^(?:Related|Tel)Property$/i.test(param.targetProp);

        else if (param.constructor.identifier === 'ValueParameter')
        return param.value === 'uri';

        return this.constructor.acceptableParamTypes.has(param.constructor.identifier);
      })
    )
    throw new TypeError('Some of the parameters passed are not valid parameters for IMPPProperty');

    else if (value.constructor.identifier !== this.constructor.acceptableValTypes)
    throw new TypeError('Invalid type for value of IMPPProperty');
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

Object.freeze(IMPPProperty);
