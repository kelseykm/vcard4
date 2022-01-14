import { BaseValue } from './BaseValue.js';
import { MissingArgument } from '../errors/index.js';

export class LanguageTagType extends BaseValue {
  static type = 'LANGUAGE-TAG';
  static identifier = 'LanguageTagType';

  #langTagValue;

  #validate(langTagValue) {
    if (typeof langTagValue === 'undefined')
    throw new MissingArgument('Value for LanguageTagType must be supplied');

    else if (typeof langTagValue !== 'string')
    throw new TypeError('Value for LanguageTagType should be of type string');
  }

  get value() {
    return this.#langTagValue;
  }

  get valueXML() {
    return `<${this.constructor.type.toLowerCase()}>${this.#langTagValue}<${this.constructor.type.toLowerCase()}>`;
  }

  constructor(langTagValue) {
    super();

    this.#validate(langTagValue);
    this.#langTagValue = langTagValue;

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

Object.freeze(LanguageTagType);
