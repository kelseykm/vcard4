import { BaseParameter } from './BaseParameter.js';
import { MissingArgument, InvalidArgument } from '../errors/index.js';
import { IntegerType } from '../values/index.js';

export class PrefParameter extends BaseParameter {
  static param = 'PREF';

  #validate(prefValue) {
    if (typeof prefValue === 'undefined')
    throw new MissingArgument('Value for PrefParameter must be supplied');

    else if (!(prefValue instanceof IntegerType))
    throw new TypeError('Value for PrefParameter should be of type IntegerType');

    else if (
      (Number(prefValue.repr()) < 1) ||
      (Number(prefValue.repr()) > 100)
    )
    throw new InvalidArgument('Value for PrefParameter must be between 1 and 100');
  }

  constructor(prefValue) {
    super();

    this.#validate(prefValue);
    this.value = prefValue.repr();

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}
