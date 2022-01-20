import { BaseProperty } from './BaseProperty.js';
import { MissingArgument, InvalidArgument } from '../errors/index.js';

export class ExtendedProperty extends BaseProperty {
  static identifier = 'ExtendedProperty';
  static cardinality = '*';
  static acceptableParamTypes = new Set([
    'LanguageParameter',
    'ValueParameter',
    'PrefParameter',
    'AltidParameter',
    'PIDParameter',
    'TypeParameter',
    'MediatypeParameter',
    'CalscaleParameter',
    'SortAsParameter',
    'GeoParameter',
    'TzParameter',
    'AnyParameter',
    'LabelParameter',
    'CCParameter',
    'IndexParameter',
    'LevelParameter'
  ]);
  static acceptableValTypes = new Set([
    'TextType',
    'TextListType',
    'BooleanType',
    'DateTimeType',
    'DateTimeListType',
    'IntegerType',
    'IntegerListType',
    'FloatType',
    'FloatListType',
    'LanguageTagType',
    'URIType',
    'SexType',
    'SpecialValueType'
  ]);

  #propRegExp = /^[Xx]-[A-Za-z0-9]+$/;
  #params;
  #value;

  get params() {
    return this.#params.reduce((parametersArray, currentParameter) => {
      parametersArray.push(currentParameter.repr());
      return parametersArray;
    }, []).join(';');
  }
  
  get paramsXML() {
    return this.#params.reduce((accumulatedParameters, currentParameter) => accumulatedParameters + currentParameter.reprXML(), '');
  }

  get paramsJSON() {
    return this.#params.reduce(
      (accumulatedParameters, currentParameter) => ({ ...currentParameter.reprJSON(), ...accumulatedParameters }),
      {}
    );
  }

  get value() {
    return this.#value.repr();
  }
  
  get valueXML() {
    return this.#value.reprXML();
  }

  get valueJSON() {
    return this.#value.reprJSON();
  }

  #validate(prop, params, value) {
    if (typeof prop === 'undefined' || typeof params === 'undefined' || typeof value === 'undefined')
    throw new MissingArgument('Property, parameter and value for ExtendedProperty must be supplied');

    else if (!Array.isArray(params))
    throw new InvalidArgument('Parameters for ExtendedProperty must be passed in an array');

    else if (!this.#propRegExp.test(prop))
    throw new InvalidArgument('Invalid property for ExtendedProperty');

    const parameterInstanceCount = new Set();

    if (
      !params.every(param => {
        if (param.constructor.identifier !== 'AnyParameter') {
          if (parameterInstanceCount.has(param.constructor.identifier))
          throw new InvalidArgument('Parameters must not have more than one instance supplied');
          else parameterInstanceCount.add(param.constructor.identifier);
        } else {
          if (parameterInstanceCount.has(param.param))
          throw new InvalidArgument('Parameters must not have more than one instance supplied');
          else parameterInstanceCount.add(param.param);
        }

        if (param.constructor.identifier === 'ValueParameter')
        return param.value === value.repr().toLowerCase();
        return this.constructor.acceptableParamTypes.has(param.constructor.identifier);
      })
    )
    throw new TypeError('Some of the parameters passed are not valid parameters for ExtendedProperty');

    else if (!this.constructor.acceptableValTypes.has(value.constructor.identifier))
    throw new TypeError('Invalid type for value of ExtendedProperty');
  }

  constructor(prop, params, value) {
    super();

    this.#validate(prop, params, value);
    this.prop = prop.toString().toUpperCase();
    this.#params = params;
    this.#value = value;

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

Object.freeze(ExtendedProperty);
