import { BaseProperty } from './BaseProperty.js';
import { MissingArgument, InvalidArgument } from '../errors/index.js';
import { ValueParameter, AnyParameter } from '../parameters/index.js';
import { SexType, SpecialValueType } from '../values/index.js';

export class GenderProperty extends BaseProperty {
  static prop = 'GENDER';
  static cardinality = '*1';
  static acceptableParamTypes = [
    ValueParameter,
    AnyParameter
  ];
  static acceptableValTypes = [
    SexType,
    SpecialValueType
  ];

  #validate(params, value) {
    if (typeof params === 'undefined' || typeof value === 'undefined')
    throw new MissingArgument('Parameters and value for GenderProperty must be supplied');

    else if (!Array.isArray(params))
    throw new InvalidArgument('Parameters for GenderProperty must be passed in an array');

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
    throw new TypeError('Some of the parameters passed are not valid parameters for GenderProperty');

    else if (
      !this.constructor.acceptableValTypes.some(
        valType => {
          if (valType === SpecialValueType)
          return (
            (value instanceof valType) &&
            /^GenderProperty$/i.test(value.targetProp)
          );
          return value instanceof valType;
        }
      )
    )
    throw new TypeError('Invalid type for value of GenderProperty');
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

Object.freeze(GenderProperty);
