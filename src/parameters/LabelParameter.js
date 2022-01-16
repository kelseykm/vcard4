import { BaseParameter } from './BaseParameter.js';
import { MissingArgument } from '../errors/index.js';

export class LabelParameter extends BaseParameter {
  static param = 'LABEL';
  static identifier = 'LabelParameter';

  #labelValue;
  
  get value() {
    return `"${this.#cleanUp(this.#labelValue)}"`;
  }

  get valueXML() {
    return `<text>${this.#cleanUpXML(this.#labelValue)}</text>`;
  }

  #validate(labelValue) {
    if (typeof labelValue === 'undefined')
    throw new MissingArgument('Value for LabelParameter must be supplied');

    else if (typeof labelValue !== 'string')
    throw new TypeError('Only type string allowed for LabelParameter value');
  }

  #cleanUp(labelValue) {
    return labelValue.replaceAll('^', '^^').replaceAll('\n', '^n').replaceAll('"', '^’');
  }

  #cleanUpXML(textValue) {
    return textValue.replaceAll('&', '&amp;').replaceAll('>', '&gt;').replaceAll('<', '&lt;').replaceAll('"', '&quot;').replaceAll("'", '&apos;');
  }

  constructor(labelValue) {
    super();

    this.#validate(labelValue);
    this.#labelValue = labelValue;

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

Object.freeze(LabelParameter);
