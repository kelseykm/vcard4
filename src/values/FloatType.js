import { BaseValue } from './BaseValue.js';
import { MissingArgument } from '../errors/index.js';

export class FloatType extends BaseValue {
  static type = 'FLOAT';

  #validate(floatValue) {
    if (typeof floatValue === 'undefined')
    throw new MissingArgument('Value for FloatType must be supplied');

    if (
      (
        !(typeof floatValue === 'number') &&
        !/\./.test(floatValue)
      ) ||
      !/^[-+]?\d+\.\d+$/.test(floatValue)
    )
    throw new TypeError('Invalid value for FloatType');
  }

  constructor(floatValue) {
    super();

    this.#validate(floatValue);
    this.value = floatValue.toString();

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

Object.freeze(FloatType);
