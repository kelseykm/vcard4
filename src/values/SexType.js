import { BaseValue } from './BaseValue.js';
import { MissingArgument, InvalidArgument } from '../errors/index.js';

export class SexType extends BaseValue {
  static type = 'TEXT';
  static identifier = 'SexType';

  #sexRegExp = /^[MFONU]$/;

  #validate(sexValue) {
    if (typeof sexValue === 'undefined')
    throw new MissingArgument('Value for SEXType must be supplied');

    else if (!this.#sexRegExp.test(sexValue))
    throw new InvalidArgument('Invalid sex');
  }

  constructor(sexValue) {
    super();

    this.#validate(sexValue);
    this.value = sexValue;

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

Object.freeze(SexType);
