import { BaseParameter } from './BaseParameter.js';
import { MissingArgument, InvalidArgument } from '../errors/index.js';

export class CalscaleParameter extends BaseParameter {
  static param = 'CALSCALE';
  static identifier = 'CalscaleParameter';

  #calscaleValue;
  #calscaleRegExp = /^(?:gregorian|x-[A-Za-z0-9]+)$/;
  
  get value() {
    return this.#calscaleValue.repr();
  }

  get valueXML() {
    return this.#calscaleValue.reprXML();
  }

  #validate(calscaleValue) {
    if (typeof calscaleValue === 'undefined')
    throw new MissingArgument('Value for CalscaleParameter must be supplied');

    else if (calscaleValue.constructor.identifier !== 'TextType')
    throw new MissingArgument('Value for CalscaleParameter must of type TextType');

    else if (!this.#calscaleRegExp.test(calscaleValue.repr()))
    throw new InvalidArgument('Invalid calscale value');
  }

  constructor(calscaleValue) {
    super();

    this.#validate(calscaleValue);
    this.#calscaleValue = calscaleValue;

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

Object.freeze(CalscaleParameter);
