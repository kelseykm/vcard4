import { BaseProperty } from './BaseProperty.js';
import { MissingArgument, InvalidArgument } from '../errors/index.js';
import {
  ValueParameter,
  TypeParameter,
  LanguageParameter,
  AltidParameter,
  PIDParameter,
  PrefParameter,
  IndexParameter,
  AnyParameter
} from '../parameters/index.js';
import { TextType } from '../values/index.js';

export class FNProperty extends BaseProperty {
  static identifier = 'FNProperty';
  static prop = 'FN';
  static cardinality = '1*';
  static acceptableParamTypes = [
    ValueParameter,
    TypeParameter,
    LanguageParameter,
    AltidParameter,
    PIDParameter,
    PrefParameter,
    IndexParameter,
    AnyParameter
  ];
  static acceptableValTypes = TextType;

  #validate(params, value) {
    if (typeof params === 'undefined' || typeof value === 'undefined')
    throw new MissingArgument('Parameters and value for FNProperty must be supplied');

    else if (!Array.isArray(params))
    throw new InvalidArgument('Parameters for FNProperty must be passed in an array');

    else if (
      !params.every(param =>
        this.constructor.acceptableParamTypes.some(
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
    throw new TypeError('Some of the parameters passed are not valid parameters for FNProperty');

    else if (!(value instanceof this.constructor.acceptableValTypes))
    throw new TypeError('Invalid type for value of FNProperty');
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

Object.freeze(FNProperty);
