import { BaseValue } from './BaseValue.js';
import { MissingArgument } from '../errors/index.js';

export class FloatType extends BaseValue {
  static type = 'FLOAT';
  static identifier = 'FloatType';

  #floatValue;

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

  get value() {
    return `${this.#floatValue}`;
  }

  get valueXML() {
    return `<${this.constructor.type.toLowerCase()}>${this.#floatValue}</${this.constructor.type.toLowerCase()}>`;
  }

  constructor(floatValue) {
    super();

    this.#validate(floatValue);
    this.#floatValue = floatValue;

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

Object.freeze(FloatType);
