import { BaseParameter } from './BaseParameter.js';
import { MissingArgument } from '../errors/index.js';

export class SortAsParameter extends BaseParameter {
  static param = 'SORT-AS';
  static identifier = 'SortAsParameter';

  #validate(sortValue) {
    if (typeof sortValue === 'undefined')
    throw new MissingArgument('Value for SortAsParameter must be supplied');

    else if (
      sortValue.constructor.identifier !== 'TextType' &&
      sortValue.constructor.identifier !== 'TextListType'
    )
    throw new TypeError('Value for SortAsParameter must be of type TextType or TextListType');
  }

  constructor(sortValue) {
    super();

    this.#validate(sortValue);
    this.value = sortValue.constructor.identifier === 'TextListType' ? `"${sortValue.repr()}"` : sortValue.repr();

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

Object.freeze(SortAsParameter);
