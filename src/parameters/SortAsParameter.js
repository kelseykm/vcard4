import { BaseParameter } from './BaseParameter.js';
import { MissingArgument } from '../errors/index.js';

export class SortAsParameter extends BaseParameter {
  static param = 'SORT-AS';

  #validate(sortValue) {
    if (typeof sortValue === 'undefined')
    throw new MissingArgument('Value for SortAsParameter must be supplied');

    else if (sortValue.constructor.type !== 'TEXT')
    throw new TypeError('Value for SortAsParameter must be of type TextType or TextListType');
  }

  constructor(sortValue) {
    super();

    this.#validate(sortValue);
    this.value = /,/.test(sortValue.repr()) ? `"${sortValue.repr()}"` : sortValue.repr();

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

Object.freeze(SortAsParameter);
