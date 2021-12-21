import { BaseParameter } from './BaseParameter.js';
import { MissingArgument, InvalidArgument } from '../errors/index.js';
import {
  TextType,
  BooleanType,
  DateTimeType,
  IntegerType,
  FloatType,
  LanguageTagType,
  URIType,
  SpecialValueType
} from '../values/index.js';

export class ValueParameter extends BaseParameter {
  static param = 'VALUE';

  #valueType;

  get value() {
    const type = this.#valueType.type || this.#valueType.constructor.type;
    return type.toLowerCase();
  }

  #validate(valType) {
    if (typeof valType === 'undefined')
    throw new MissingArgument('Value for ValueParameter must be supplied');

    const types = [
      TextType,
      BooleanType,
      DateTimeType,
      IntegerType,
      FloatType,
      LanguageTagType,
      URIType,
      SpecialValueType
    ];
    if (!types.some(type => valType instanceof type))
    throw new InvalidArgument('Value for ValueParameter not recognized');
  }

  constructor(valType) {
    super();

    this.#validate(valType);
    this.#valueType = valType;

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}
