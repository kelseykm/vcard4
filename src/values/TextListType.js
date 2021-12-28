import { BaseValue } from './BaseValue.js';
import { MissingArgument } from '../errors/index.js';

export class TextListType extends BaseValue {
  static type = 'TEXT';
  static identifier = 'TextListType';

  #validate(textlist) {
    if (typeof textlist === 'undefined')
    throw new MissingArgument('Value for TextListType must be supplied');

    else if (!Array.isArray(textlist))
    throw new TypeError('Invalid type for value of TextListType. It should be an array of TextTypes');

    for (const text of textlist) {
      if (text.constructor.type !== 'TEXT')
      throw new TypeError('Invalid type for value of TextListType. It should be an array of TextTypes');
    }
  }

  constructor(textlist) {
    super();

    this.#validate(textlist);
    this.value = textlist.reduce((accumulatedTextTypes, currentTextType) => {
      accumulatedTextTypes.push(currentTextType.repr());
      return accumulatedTextTypes;
    }, []).join(',');

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

Object.freeze(TextListType);
