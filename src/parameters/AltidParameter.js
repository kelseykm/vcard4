import { BaseParameter } from './BaseParameter.js';
import { MissingArgument, InvalidArgument } from '../errors/index.js';

export class AltidParameter extends BaseParameter {
  static param = 'ALTID';
  static identifier = 'AltidParameter';

  #altidValue;
  
  get value() {
    return this.#altidValue.repr();
  }

  get valueXML() {
    return this.#altidValue.reprXML();
  }

  #validate(altidValue) {
    if (typeof altidValue === 'undefined')
    throw new MissingArgument('Value for AltidParameter must be supplied');

    else if (altidValue.constructor.identifier !== 'TextType')
    throw new InvalidArgument('Value for AltidParameter must be of type TextType');
  }

  constructor(altidValue) {
    super();

    this.#validate(altidValue);
    this.#altidValue = altidValue;

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

Object.freeze(AltidParameter);
