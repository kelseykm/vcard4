import { BaseProperty } from './BaseProperty.js';
import { MissingArgument, InvalidArgument } from '../errors/index.js';
import { ValueParameter, AnyParameter } from '../parameters/index.js';
import { TextType } from '../values/index.js';

export class VersionProperty extends BaseProperty {
  static prop = 'VERSION';
  static cardinality = '1';
  static acceptableParamTypes = [
    ValueParameter,
    AnyParameter
  ];
  static acceptableValTypes = TextType;

  constructor() {
    super();

    this.params = '';
    this.value = new TextType('4.0').repr();

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

Object.freeze(VersionProperty);
