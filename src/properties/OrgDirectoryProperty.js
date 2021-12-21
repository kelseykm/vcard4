import { BaseProperty } from './BaseProperty.js';
import { MissingArgument, InvalidArgument } from '../errors/index.js';
import {
  PrefParameter,
  IndexParameter,
  LanguageParameter,
  PIDParameter,
  AltidParameter,
  TypeParameter,
  AnyParameter
} from '../parameters/index.js';
import { URIType } from '../values/index.js';

export class OrgDirectoryProperty extends BaseProperty {
  static prop = 'ORG-DIRECTORY';
  static cardinality = '*';
  static acceptableParamTypes = [
    PrefParameter,
    IndexParameter,
    LanguageParameter,
    PIDParameter,
    AltidParameter,
    TypeParameter,
    AnyParameter
  ];
  static acceptableValTypes = URIType;

  #validate(params, value) {
    if (typeof params === 'undefined' || typeof value === 'undefined')
    throw new MissingArgument('Parameters and value for OrgDirectoryProperty must be supplied');

    else if (!Array.isArray(params))
    throw new InvalidArgument('Parameters for OrgDirectoryProperty must be passed in an array');

    else if (
      !params.every(
        param => this.constructor.acceptableParamTypes.some(
          acceptableParamType => {
            if (acceptableParamType === TypeParameter)
            return (
              (param instanceof acceptableParamType) &&
              !/^(?:Related|Tel)Property$/i.test(param.targetProp)
            );

            return param instanceof acceptableParamType
          }
        )
      )
    )
    throw new TypeError('Some of the parameters passed are not valid parameters for OrgDirectoryProperty');

    else if (!(value instanceof this.constructor.acceptableValTypes))
    throw new TypeError('Invalid type for value of OrgDirectoryProperty');
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

Object.freeze(OrgDirectoryProperty);
