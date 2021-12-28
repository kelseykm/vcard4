import { BaseValue } from './BaseValue.js';
import { MissingArgument } from '../errors/index.js';

export class BooleanType extends BaseValue {
  static type = 'BOOLEAN';
  static identifier = 'BooleanType';

  #validate(boolValue) {
    if (typeof boolValue === 'undefined')
    throw new MissingArgument('boolValue must be supplied');

    else if (typeof boolValue !== 'boolean')
    throw new TypeError('Value for BooleanType should be of type boolean');
  }

  constructor(boolValue) {
    super();

    this.#validate(boolValue);
    this.value = boolValue ? 'TRUE' : 'FALSE';

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

Object.freeze(BooleanType);
