import { AbstractBaseProperty } from './AbstractBaseProperty.js';
import { MissingArgument, InvalidArgument } from '../errors/index.js';
import {
  ValueParameter,
  PIDParameter,
  PrefParameter,
  IndexParameter,
  AltidParameter,
  TypeParameter,
  AnyParameter
} from '../parameters/index.js';
import { LanguageTagType } from '../values/index.js';

export class LangProperty extends AbstractBaseProperty {
  static prop = 'LANG';
  static cardinality = '*';
  static acceptableParamTypes = [
    ValueParameter,
    PIDParameter,
    PrefParameter,
    IndexParameter,
    AltidParameter,
    TypeParameter,
    AnyParameter
  ];
  static acceptableValTypes = LanguageTagType;

  #validate(params, value) {
    if (typeof params === 'undefined' || typeof value === 'undefined')
    throw new MissingArgument('Parameters and value for LangProperty must be supplied');

    else if (!Array.isArray(params))
    throw new InvalidArgument('Parameters for LangProperty must be passed in an array');

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
              (param.value === 'language-tag')
            );

            return param instanceof acceptableParamType;
          }
        )
      )
    )
    throw new TypeError('Some of the parameters passed are not valid parameters for LangProperty');

    else if (!(value instanceof this.constructor.acceptableValTypes))
    throw new TypeError('Invalid type for value of LangProperty');
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
