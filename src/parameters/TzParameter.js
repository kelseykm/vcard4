import { BaseParameter } from './BaseParameter.js';
import { MissingArgument } from '../errors/index.js';

export class TzParameter extends BaseParameter {
  static param = 'TZ';
  static identifier = 'TzParameter';

  #validate(tzValue) {
    if (typeof tzValue === 'undefined')
    throw new MissingArgument('Value for TzParameter must be supplied');

    if (
      tzValue.constructor.identifier !== 'TextType' &&
      tzValue.constructor.identifier !== 'URIType' &&
      !(tzValue.constructor.identifier === 'DateTimeType' && tzValue.type === 'UTC-OFFSET')
    )
    throw new TypeError('Invalid type for value for TzParameter');
  }

  constructor(tzValue) {
    super();

    this.#validate(tzValue);
    this.value = tzValue.constructor.identifier === 'URIType' ? `"${tzValue.repr()}"` : tzValue.repr();

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

Object.freeze(TzParameter);
