import { BaseParameter } from './BaseParameter.js';
import { MissingArgument } from '../errors/index.js';
import { TextType, URIType, DateTimeType } from '../values/index.js';

export class TzParameter extends BaseParameter {
  static param = 'TZ';

  #validate(tzValue) {
    if (typeof tzValue === 'undefined')
    throw new MissingArgument('Value for TzParameter must be supplied');

    const types = [
      TextType,
      URIType,
      DateTimeType
    ];
    if (
      !types.some(type => {
        if (type === DateTimeType)
        return (
          (tzValue instanceof type) &&
          (tzValue.type === 'UTC-OFFSET')
        );

        return tzValue instanceof type;
      })
    )
    throw new TypeError('Invalid type for value for TzParameter');
  }

  constructor(tzValue) {
    super();

    this.#validate(tzValue);
    this.value = `"${tzValue.repr()}"`;

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}
