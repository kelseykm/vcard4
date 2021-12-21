import { AbstractBaseParameter } from './AbstractBaseParameter.js';
import { MissingArgument, InvalidArgument } from '../errors/index.js';
import { IntegerType, TextType } from '../values/index.js';

export class AltidParameter extends AbstractBaseParameter {
  static param = 'ALTID';

  #validate(altidValue) {
    if (typeof altidValue === 'undefined')
    throw new MissingArgument('Value for AltidParameter must be supplied');

    else if (
      !(altidValue instanceof IntegerType) &&
      !(altidValue instanceof TextType)
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
