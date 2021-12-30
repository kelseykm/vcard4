import { BaseValue } from './BaseValue.js';
import { MissingArgument } from '../errors/index.js';

export class FloatListType extends BaseValue {
  static type = 'FLOAT';
  static identifier = 'FloatListType';

  #validate(floatlist) {
    if (typeof floatlist === 'undefined')
    throw new MissingArgument('Value for FloatListType must be supplied');

    else if (!Array.isArray(floatlist))
    throw new TypeError('Value of FloatListType should be passed in an array');

    for (const float of floatlist) {
      if (float.constructor.identifier !== 'FloatType')
      throw new TypeError('Value of FloatListType should be an array of FloatTypes');
    }
  }

  constructor(floatlist) {
    super();

    this.#validate(floatlist);
    this.value = floatlist.reduce((accumulatedFloatTypes, currentFloatType) => {
      accumulatedFloatTypes.push(currentFloatType.repr());
      return accumulatedFloatTypes;
    }, []).join(',');

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

Object.freeze(FloatListType);
