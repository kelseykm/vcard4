import { AbstractBaseParameter } from './AbstractBaseParameter.js';
import { MissingArgument, InvalidArgument } from '../errors/index.js';
import { TextType } from '../values/index.js';

export class CCParameter extends AbstractBaseParameter {
  static param = 'CC';

  #validate(ccValue) {
    if (typeof ccValue === 'undefined')
    throw new MissingArgument('Value for CCParameter must be supplied');

    else if (
      !(ccValue instanceof TextType) ||
      !/^[A-Za-z0-9]{2}$/.test(ccValue.repr())
    )
    throw new InvalidArgument('Invalid value for CCParameter');
  }

  constructor(ccValue) {
    super();

    this.#validate(ccValue);
    this.value = ccValue.repr();

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}
