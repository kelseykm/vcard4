import { AbstractBaseValue } from './AbstractBaseValue.js';
import { MissingArgument } from '../errors/index.js';
import { TextType } from './TextType.js';

export class TextListType extends AbstractBaseValue {
  static type = 'TEXT';

  #validate(textlist) {
    if (typeof textlist === 'undefined')
    throw new MissingArgument('Value for TextListType must be supplied');

    else if (!Array.isArray(textlist))
    throw new TypeError('Invalid type for value of TextListType. It should be an array of TextTypes');

    else if (
      !textlist.every(
        text => text instanceof TextType
      )
    )
    throw new TypeError('Invalid type for value of TextListType. It should be an array of TextTypes');
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
