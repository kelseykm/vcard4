import { BaseParameter } from './BaseParameter.js';
import { MissingArgument } from '../errors/index.js';

export class LanguageParameter extends BaseParameter {
  static param = 'LANGUAGE';
  static identifier = 'LanguageParameter';

  #langTag;

  get value() {
    return this.#langTag.repr();
  }

  get valueXML() {
    return this.#langTag.reprXML();
  }

  #validate(langTag) {
    if (typeof langTag === 'undefined')
    throw new MissingArgument('Language Tag for LanguageParameter must be supplied');

    else if (langTag.constructor.identifier !== 'LanguageTagType')
    throw new TypeError('The value of the LANGUAGE property parameter should be of type LanguageTagType');
  }

  constructor(langTag) {
    super();

    this.#validate(langTag);
    this.#langTag = langTag;

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

Object.freeze(LanguageParameter);
