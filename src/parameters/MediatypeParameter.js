import { BaseParameter } from './BaseParameter.js';
import { MissingArgument, InvalidArgument } from '../errors/index.js';

export class MediatypeParameter extends BaseParameter {
  static param = 'MEDIATYPE';
  static identifier = 'MediatypeParameter';

  #mediaTypeRegExp = /^(?:[A-Za-z0-9!#\$&\.\+\-\^]){1,127}\/(?:[A-Za-z0-9!#\$&\.\+\-\^]){1,127}$/;
  #attributeRegExp = /^.+=.+$/;

  #validate(mediaValue) {
    if (typeof mediaValue === 'undefined')
    throw new MissingArgument('Value for MediatypeParameter must be supplied');

    else if (
      mediaValue.constructor.type !== 'TEXT' &&
      (Array.isArray(mediaValue) && !mediaValue.every(val => val.constructor.type === 'TEXT'))
    )
    throw new TypeError('Value for MediatypeParameter must be of TextType or an array of TextTypes');

    else if (
      !Array.isArray(mediaValue) &&
      !this.#mediaTypeRegExp.test(mediaValue.repr())
    )
    throw new InvalidArgument('Invalid media type');

    else if (Array.isArray(mediaValue)) {
      if (mediaValue.length !== 2)
      throw new InvalidArgument('Invalid value for MediatypeParameter. It should be an array with a length of 2');

      else if (!this.#mediaTypeRegExp.test(mediaValue[0].repr()))
      throw new InvalidArgument('Invalid media type');

      else if (!this.#attributeRegExp.test(mediaValue[1].repr()))
      throw new InvalidArgument('Invalid media type');
    }
  }

  constructor(mediaValue) {
    super();

    this.#validate(mediaValue);
    this.value = Array.isArray(mediaValue) ?
    `"${mediaValue.reduce((accumulatedTypes, currentType) => {
      accumulatedTypes.push(currentType.repr());
      return accumulatedTypes;
    }, []).join(';')}"` :
    mediaValue.repr();

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

Object.freeze(MediatypeParameter);
