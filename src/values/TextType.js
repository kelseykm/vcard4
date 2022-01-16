import { BaseValue } from './BaseValue.js';
import { MissingArgument } from '../errors/index.js';

export class TextType extends BaseValue {
  static type = 'TEXT';
  static identifier = 'TextType';

  #textValue;

  #validate(textValue) {
    if (typeof textValue === 'undefined')
    throw new MissingArgument('Value for TextType must be supplied');

    else if (typeof textValue !== 'string')
    throw new TypeError('Only type string allowed for TextType value');
  }

  #cleanUp(textValue) {
    return textValue.replaceAll('\\', '\\\\').replaceAll(',', '\\,').replaceAll(':', '\\:').replaceAll(';', '\\;').replaceAll('\n', '\\n');
  }

  #cleanUpXML(textValue) {
    return textValue.replaceAll('&', '&amp;').replaceAll('>', '&gt;').replaceAll('<', '&lt;').replaceAll('"', '&quot;').replaceAll("'", '&apos;');
  }

  get value() {
    return this.#cleanUp(this.#textValue);
  }

  get valueXML() {
    return `<${this.constructor.type.toLowerCase()}>${this.#cleanUpXML(this.#textValue)}</${this.constructor.type.toLowerCase()}>`;
  }

  get _unsafe_raw_value() {
    return this.#textValue;
  }

  constructor(textValue) {
    super();
    this.#validate(textValue);
    this.#textValue = textValue;

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

Object.freeze(TextType);
