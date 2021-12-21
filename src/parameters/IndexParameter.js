import { BaseParameter } from './BaseParameter.js';
import { MissingArgument, InvalidArgument } from '../errors/index.js';
import { IntegerType } from '../values/index.js';

export class IndexParameter extends BaseParameter {
  static param = 'INDEX';

  #validate(indexValue) {
    if (typeof indexValue === 'undefined')
    throw new MissingArgument('Value for IndexParameter must be supplied');

    else if (
      !(indexValue instanceof IntegerType) ||
      !(Number(indexValue.repr()) > 0)
    )
    throw new InvalidArgument('Invalid value for IndexParameter. Must be a positive integer');
  }

  constructor(indexValue) {
    super();

    this.#validate(indexValue);
    this.value = indexValue.repr();

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

Object.freeze(IndexParameter);
