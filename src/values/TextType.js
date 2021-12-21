import { BaseValue } from './BaseValue.js';
import { MissingArgument } from '../errors/index.js';

export class TextType extends BaseValue {
  static type = 'TEXT';

  #validate(textValue) {
    if (typeof textValue === 'undefined')
    throw new MissingArgument('Value for TextType must be supplied');

    else if (typeof textValue !== 'string')
    throw new TypeError('Only type string allowed for TextType value');
  }

  #cleanUp(textValue) {
    return textValue.replaceAll('\\', '\\\\').replaceAll(',', '\\,').replaceAll(':', '\\:').replaceAll(';', '\\;').replaceAll('\n', '\\n');
  }

  constructor(textValue) {
    super();
    this.#validate(textValue);
    this.value = this.#cleanUp(textValue);

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}
