import { BaseValue } from './BaseValue.js';
import { MissingArgument } from '../errors/index.js';

export class LanguageTagType extends BaseValue {
  static type = 'LANGUAGE-TAG';

  #validate(langTagValue) {
    if (typeof langTagValue === 'undefined')
    throw new MissingArgument('Value for LanguageTagType must be supplied');

    else if (typeof langTagValue !== 'string')
    throw new TypeError('Value for LanguageTagType should be of type string');
  }

  constructor(langTagValue) {
    super();

    this.#validate(langTagValue);
    this.value = langTagValue;

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}
