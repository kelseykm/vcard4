import { BaseProperty } from './BaseProperty.js';
import { MissingArgument, InvalidArgument } from '../errors/index.js';
import { ValueParameter, AltidParameter } from '../parameters/index.js';
import { TextType } from '../values/index.js';

export class XMLProperty extends BaseProperty {
  static identifier = 'XMLProperty';
  static prop = 'XML';
  static cardinality = '*';
  static acceptableParamTypes = [
    ValueParameter,
    AltidParameter
  ];
  static acceptableValTypes = TextType;

  #validate(params, value) {
    if (typeof params === 'undefined' || typeof value === 'undefined')
    throw new MissingArgument('Parameters and value for XMLProperty must be supplied');

    else if (!Array.isArray(params))
    throw new InvalidArgument('Parameters for XMLProperty must be passed in an array');

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
    throw new TypeError('Some of the parameters passed are not valid parameters for XMLProperty');

    else if (!(value instanceof this.constructor.acceptableValTypes))
    throw new TypeError('Invalid type for value of XMLProperty');
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

Object.freeze(XMLProperty);
