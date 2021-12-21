import { BaseProperty } from './BaseProperty.js';
import { MissingArgument, InvalidArgument } from '../errors/index.js';
import {
  ValueParameter,
  SortAsParameter,
  LanguageParameter,
  AltidParameter,
  AnyParameter
} from '../parameters/index.js';
import { SpecialValueType } from '../values/index.js';

export class NProperty extends BaseProperty {
  static prop = 'N';
  static cardinality = '*1';
  static acceptableParamTypes = [
    ValueParameter,
    SortAsParameter,
    LanguageParameter,
    AltidParameter,
    AnyParameter
  ];
  static acceptableValTypes = SpecialValueType;

  #validate(params, value) {
    if (typeof params === 'undefined' || typeof value === 'undefined')
    throw new MissingArgument('Parameters and value for NProperty must be supplied');

    else if (!Array.isArray(params))
    throw new InvalidArgument('Parameters for NProperty must be passed in an array');

    else if (
      !params.every(
        param =>
        this.constructor.acceptableParamTypes.some(
          acceptableParamType => {
            if (acceptableParamType === ValueParameter)
            return (
              (param instanceof acceptableParamType) &&
              (param.value === 'text')
            );
            return param instanceof acceptableParamType;
          }
        )
      )
    )
    throw new TypeError('Some of the parameters passed are not valid parameters for NProperty');

    else if (
      !(value instanceof this.constructor.acceptableValTypes) ||
      !/^NProperty$/i.test(value.targetProp)
    )
    throw new TypeError('Invalid type for value of NProperty');
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

Object.freeze(NProperty);
