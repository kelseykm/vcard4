import { BaseProperty } from './BaseProperty.js';
import { MissingArgument, InvalidArgument } from '../errors/index.js';
import { SpecialValueType } from '../values/index.js';

export class EndProperty extends BaseProperty {
  static prop = 'END';
  static cardinality = '1';
  static acceptableParamTypes = null;
  static acceptableValTypes = SpecialValueType;

  constructor() {
    super();

    this.params = '';
    this.value = new SpecialValueType('VCARD', 'endproperty').repr();

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}
