import { BaseValue } from './BaseValue.js';
import { MissingArgument } from '../errors/index.js';

export class BooleanType extends BaseValue {
  static type = 'BOOLEAN';
  static identifier = 'BooleanType';

  #boolValue;

  #validate(boolValue) {
    if (typeof boolValue === 'undefined')
    throw new MissingArgument('boolValue must be supplied');

    else if (typeof boolValue !== 'boolean')
    throw new TypeError('Value for BooleanType should be of type boolean');
  }

  get value() {
    return `${this.#boolValue}`;

  }

  get valueXML() {
    return `<${this.constructor.type.toLowerCase()}>${this.#boolValue}</${this.constructor.type.toLowerCase()}>`;
  }

  get valueJSON() {
    return [ this.constructor.type.toLowerCase(), this.#boolValue ];
  }

  constructor(boolValue) {
    super();

    this.#validate(boolValue);
    this.#boolValue = boolValue;

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

Object.freeze(BooleanType);
