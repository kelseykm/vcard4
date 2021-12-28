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
import { TextType, TextListType } from '../values/index.js';

export class NicknameProperty extends BaseProperty {
  static identifier = 'NicknameProperty';
  static prop = 'NICKNAME';
  static cardinality = '*';
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
  static acceptableValTypes = [
    TextType,
    TextListType
  ];

  #validate(params, value) {
    if (typeof params === 'undefined' || typeof value === 'undefined')
    throw new MissingArgument('Parameters and value for NicknameProperty must be supplied');

    else if (!Array.isArray(params))
    throw new InvalidArgument('Parameters for NicknameProperty must be passed in an array');

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
    throw new TypeError('Some of the parameters passed are not valid parameters for NicknameProperty');

    else if (
      !this.constructor.acceptableValTypes.some(
        valType => value instanceof valType
      )
    )
    throw new TypeError('Invalid type for value of NicknameProperty');
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

Object.freeze(NicknameProperty);
