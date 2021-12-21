import { BaseProperty } from './BaseProperty.js';
import { MissingArgument, InvalidArgument } from '../errors/index.js';
import {
  ValueParameter,
  SortAsParameter,
  LanguageParameter,
  PIDParameter,
  PrefParameter,
  IndexParameter,
  AltidParameter,
  TypeParameter,
  AnyParameter
} from '../parameters/index.js';
import { SpecialValueType } from '../values/index.js';

export class OrgProperty extends BaseProperty {
  static prop = 'ORG';
  static cardinality = '*';
  static acceptableParamTypes = [
    ValueParameter,
    SortAsParameter,
    LanguageParameter,
    PIDParameter,
    PrefParameter,
    IndexParameter,
    AltidParameter,
    TypeParameter,
    AnyParameter
  ];
  static acceptableValTypes = SpecialValueType;

  #validate(params, value) {
    if (typeof params === 'undefined' || typeof value === 'undefined')
    throw new MissingArgument('Parameters and value for OrgProperty must be supplied');

    else if (!Array.isArray(params))
    throw new InvalidArgument('Parameters for OrgProperty must be passed in an array');

    else if (
      !params.every(
        param => this.constructor.acceptableParamTypes.some(
          acceptableParamType => {
            if (acceptableParamType === TypeParameter)
            return (
              (param instanceof acceptableParamType) &&
              !/^(?:Related|Tel)Property$/i.test(param.targetProp)
            );

            else if (acceptableParamType === ValueParameter)
            return (
              (param instanceof acceptableParamType) &&
              (param.value === 'text')
            );

            return param instanceof acceptableParamType;
          }
        )
      )
    )
    throw new TypeError('Some of the parameters passed are not valid parameters for OrgProperty');

    else if (
      !(value instanceof this.constructor.acceptableValTypes) ||
      !/^OrgProperty$/i.test(value.targetProp)
    )
    throw new TypeError('Invalid type for value of OrgProperty');
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

Object.freeze(OrgProperty);
