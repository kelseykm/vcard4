import { BaseParameter } from './BaseParameter.js';
import { MissingArgument, InvalidArgument } from '../errors/index.js';

export class AltidParameter extends BaseParameter {
  static param = 'ALTID';
  static identifier = 'AltidParameter';

  #validate(altidValue) {
    if (typeof altidValue === 'undefined')
    throw new MissingArgument('Value for AltidParameter must be supplied');

    else if (
      altidValue.constructor.identifier !== 'IntegerType' &&
      altidValue.constructor.identifier !== 'TextType'
    )
    throw new InvalidArgument('Value for AltidParameter must be of type IntegerType or TextType');
  }

  constructor(altidValue) {
    super();

    this.#validate(altidValue);
    this.value = altidValue.repr();

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

Object.freeze(AltidParameter);
