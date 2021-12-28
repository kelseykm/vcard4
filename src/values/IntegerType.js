import { BaseValue } from './BaseValue.js';
import { MissingArgument, InvalidArgument } from '../errors/index.js';

export class IntegerType extends BaseValue {
  static type = 'INTEGER';
  static identifier = 'IntegerType';

  #validate(intValue) {
    if (typeof intValue === 'undefined')
    throw new MissingArgument('Value for IntegerType must be supplied');

    else if ((typeof intValue !== 'number') && (typeof intValue !== 'bigint'))
    throw new TypeError('Value for IntegerType must be of type number or bigint');

    else if (/\./.test(intValue.toString()))
    throw new InvalidArgument('Invalid value for IntegerType');

    else if (
      (typeof intValue === 'number') &&
      (!((-Number.MAX_SAFE_INTEGER < intValue) &&
      (intValue < Number.MAX_SAFE_INTEGER)))
    )
    throw new InvalidArgument(`The maximum value is ${Number.MAX_SAFE_INTEGER}, and the minimum value is ${Number.MIN_SAFE_INTEGER} for number IntegerType`);

    else if (
      (typeof intValue === 'bigint') &&
      (
        !(
          (-9223372036854775809n < intValue) &&
          (intValue < 9223372036854775808n)
        )
      )
    )
    throw new InvalidArgument('The maximum value is 9223372036854775807n, and the minimum value is -9223372036854775808n for bigint IntegerType');
  }

  constructor(intValue) {
    super();

    this.#validate(intValue);
    this.value = intValue.toString();

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

Object.freeze(IntegerType);
