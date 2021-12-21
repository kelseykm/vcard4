import { BaseParameter } from './BaseParameter.js';
import { MissingArgument } from '../errors/index.js';

export class LabelParameter extends BaseParameter {
  static param = 'LABEL';

  #validate(value) {
    if (typeof value === 'undefined')
    throw new MissingArgument('Value for LabelParameter must be supplied');

    else if (typeof value !== 'string')
    throw new TypeError('Only type string allowed for LabelParameter value');
  }

  #cleanUp(value) {
    return value.replaceAll('^', '^^').replaceAll('\n', '^n').replaceAll('"', '^’');
  }

  constructor(value) {
    super();

    this.#validate(value);
    this.value = `"${this.#cleanUp(value)}"`;

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

Object.freeze(LabelParameter);
