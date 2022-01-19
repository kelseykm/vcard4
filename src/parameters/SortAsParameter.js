import { BaseParameter } from './BaseParameter.js';
import { MissingArgument } from '../errors/index.js';

export class SortAsParameter extends BaseParameter {
  static param = 'SORT-AS';
  static identifier = 'SortAsParameter';

  #sortValue;

  get value() {
    return this.#sortValue.constructor.identifier === 'TextListType' ? `"${this.#sortValue.repr()}"` : this.#sortValue.repr();
  }

  get valueXML() {
    return this.#sortValue.reprXML();
  }

  get valueJSON() {
    return this.#sortValue.reprJSON();
  }

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
    this.#sortValue = sortValue;

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

Object.freeze(SortAsParameter);
