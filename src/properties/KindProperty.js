import { BaseProperty } from './BaseProperty.js';
import { MissingArgument, InvalidArgument } from '../errors/index.js';
import { ValueParameter, AnyParameter } from '../parameters/index.js';
import { SpecialValueType } from '../values/index.js';

export class KindProperty extends BaseProperty {
  static identifier = 'KindProperty';
  static prop = 'KIND';
  static cardinality = '*1';
  static acceptableParamTypes = [
    ValueParameter,
    AnyParameter
  ];
  static acceptableValTypes = SpecialValueType;

  #validate(params, value) {
    if (typeof params === 'undefined' || typeof value === 'undefined')
    throw new MissingArgument('Parameters and value for KindProperty must be supplied');

    else if (!Array.isArray(params))
    throw new InvalidArgument('Parameters for KindProperty must be passed in an array');

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
    throw new TypeError('Some of the parameters passed are not valid parameters for KindProperty');

    else if (
      !(value instanceof this.constructor.acceptableValTypes) ||
      !/^KindProperty$/i.test(value.targetProp)
    )
    throw new TypeError('Invalid type for value of KindProperty');
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

Object.freeze(KindProperty);
