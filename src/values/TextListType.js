import { BaseValue } from './BaseValue.js';
import { MissingArgument } from '../errors/index.js';

export class TextListType extends BaseValue {
  static type = 'TEXT';
  static identifier = 'TextListType';

  #textlist;

  get value() {
    return this.#textlist.reduce((accumulatedTextTypes, currentTextType) => {
      accumulatedTextTypes.push(currentTextType.repr());
      return accumulatedTextTypes;
    }, []).join(',');
  }

  get valueXML() {
    return this.#textlist.reduce(
      (accumulatedTextTypes, currentTextType) => accumulatedTextTypes + currentTextType.reprXML()
    , '');
  }

  get valueJSON() {
    const value = this.#textlist.reduce((accumulatedTextTypes, currentTextType) => {
      accumulatedTextTypes.push(
        currentTextType.reprJSON().pop()
      );
      return accumulatedTextTypes;
    }, []);

    value.unshift(this.constructor.type.toLowerCase());

    return value;
  }

  #validate(textlist) {
    if (typeof textlist === 'undefined')
    throw new MissingArgument('Value for TextListType must be supplied');

    else if (!Array.isArray(textlist))
    throw new TypeError('Value for TextListType must be passed in an array');

    for (const text of textlist) {
      if (text.constructor.identifier !== 'TextType')
      throw new TypeError('Invalid type for value of TextListType. It should be an array of TextTypes');
    }
  }

  constructor(textlist) {
    super();

    this.#validate(textlist);
    this.#textlist = textlist;

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

Object.freeze(TextListType);
