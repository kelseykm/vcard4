import { AbstractBaseProperty } from './AbstractBaseProperty.js';
import { MissingArgument, InvalidArgument } from '../errors/index.js';
import { SpecialValueType } from '../values/index.js';

export class BeginProperty extends AbstractBaseProperty {
  static prop = 'BEGIN';
  static cardinality = '1';
  static acceptableParamTypes = null;
  static acceptableValTypes = SpecialValueType;

  constructor() {
    super();

    this.params = '';
    this.value = new SpecialValueType('VCARD', 'beginproperty').repr();

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}
