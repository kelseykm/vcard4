import { AbstractBaseParameter } from './AbstractBaseParameter.js';
import { MissingArgument, InvalidArgument } from '../errors/index.js';
import { TextType } from '../values/index.js';

export class CalscaleParameter extends AbstractBaseParameter {
  static param = 'CALSCALE';

  #calscaleRegExp = /^(?:gregorian|x-[A-Za-z0-9]+)$/;

  #validate(calscaleValue) {
    if (typeof calscaleValue === 'undefined')
    throw new MissingArgument('Value for CalscaleParameter must be supplied');

    else if (!(calscaleValue instanceof TextType))
    throw new MissingArgument('Value for CalscaleParameter must of type TextType');

    else if (!this.#calscaleRegExp.test(calscaleValue.repr()))
    throw new InvalidArgument('Invalid calscale value');
  }

  constructor(calscaleValue) {
    super();

    this.#validate(calscaleValue);
    this.value = calscaleValue.repr();

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}
