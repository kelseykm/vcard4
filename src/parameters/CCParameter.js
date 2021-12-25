import { BaseParameter } from './BaseParameter.js';
import { MissingArgument, InvalidArgument } from '../errors/index.js';

export class CCParameter extends BaseParameter {
  static param = 'CC';

  #validate(ccValue) {
    if (typeof ccValue === 'undefined')
    throw new MissingArgument('Value for CCParameter must be supplied');

    else if (
      ccValue.constructor.type !== 'TEXT' ||
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

Object.freeze(CCParameter);
