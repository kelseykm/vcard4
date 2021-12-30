import { BaseValue } from './BaseValue.js';
import { MissingArgument } from '../errors/index.js';

export class IntegerListType extends BaseValue {
  static type = 'INTEGER';
  static identifier = 'IntegerListType';

  #validate(integerlist) {
    if (typeof integerlist === 'undefined')
    throw new MissingArgument('Value for IntegerListType must be supplied');

    else if (!Array.isArray(integerlist))
    throw new TypeError('Value for IntegerListType must be passed in an array');

    for (const integer of integerlist) {
      if (integer.constructor.identifier !== 'IntegerType')
      throw new TypeError('Invalid type for value of IntegerListType. It should be an array of IntegerTypes');
    }
  }

  constructor(integerlist) {
    super();

    this.#validate(integerlist);
    this.value = integerlist.reduce((accumulatedIntegerTypes, currentIntegerType) => {
      accumulatedIntegerTypes.push(currentIntegerType.repr());
      return accumulatedIntegerTypes;
    }, []).join(',');

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

Object.freeze(IntegerListType);
