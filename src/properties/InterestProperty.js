import { AbstractBaseProperty } from './AbstractBaseProperty.js';
import { MissingArgument, InvalidArgument } from '../errors/index.js';
import {
  LevelParameter,
  IndexParameter,
  LanguageParameter,
  PrefParameter,
  AltidParameter,
  TypeParameter,
  AnyParameter
} from '../parameters/index.js';
import { TextType } from '../values/index.js';

export class InterestProperty extends AbstractBaseProperty {
  static prop = 'INTEREST';
  static cardinality = '*';
  static acceptableParamTypes = [
    LevelParameter,
    IndexParameter,
    LanguageParameter,
    PrefParameter,
    AltidParameter,
    TypeParameter,
    AnyParameter
  ];
  static acceptableValTypes = TextType;

  #validate(params, value) {
    if (typeof params === 'undefined' || typeof value === 'undefined')
    throw new MissingArgument('Parameters and value for InterestProperty must be supplied');

    else if (!Array.isArray(params))
    throw new InvalidArgument('Parameters for InterestProperty must be passed in an array');

    else if (
      !params.every(
        param =>
        this.constructor.acceptableParamTypes.some(
          acceptableParamType => {
            if (acceptableParamType === LevelParameter)
            return (
              (param instanceof acceptableParamType) &&
              /^InterestProperty$/i.test(param.targetProp)
            );

            else if (acceptableParamType === TypeParameter)
            return (
              (param instanceof acceptableParamType) &&
              !/^(?:Related|Tel)Property$/i.test(param.targetProp)
            );

            return param instanceof acceptableParamType
          }
        )
      )
    )
    throw new TypeError('Some of the parameters passed are not valid parameters for InterestProperty');

    else if (!(value instanceof this.constructor.acceptableValTypes))
    throw new TypeError('Invalid type for value of InterestProperty');
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
