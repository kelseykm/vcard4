import { BaseProperty } from './BaseProperty.js';
import { MissingArgument, InvalidArgument } from '../errors/index.js';

export class XMLProperty extends BaseProperty {
  static identifier = 'XMLProperty';
  static prop = 'XML';
  static cardinality = '*';
  static acceptableParamTypes = new Set([
    'ValueParameter',
    'AltidParameter'
  ]);
  static acceptableValTypes = 'TextType';

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
    return this.#value._unsafe_raw_value;
  }

  get valueJSON() {
    return this.#value.reprJSON();
  }

  #validate(params, value) {
    if (typeof params === 'undefined' || typeof value === 'undefined')
    throw new MissingArgument('Parameters and value for XMLProperty must be supplied');

    else if (!Array.isArray(params))
    throw new InvalidArgument('Parameters for XMLProperty must be passed in an array');

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
        return param.value === 'text';

        return this.constructor.acceptableParamTypes.has(param.constructor.identifier);
      })
    )
    throw new TypeError('Some of the parameters passed are not valid parameters for XMLProperty');

    else if (value.constructor.identifier !== this.constructor.acceptableValTypes)
    throw new TypeError('Invalid type for value of XMLProperty');

    else if (!/xmlns=".+?"/.test(value._unsafe_raw_value))
    throw new InvalidArgument('The XML element namespace must be explicitly specified using the xmlns attribute');

    else if (/xmlns="urn:ietf:params:xml:ns:vcard-4.0"/.test(value._unsafe_raw_value))
    throw new InvalidArgument('The XML element namespace must not be the vCard 4 namespace');
  }

  constructor(params, val) {
    super();

    this.#validate(params, val);
    this.#params = params;
    this.#value = val;

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

Object.freeze(XMLProperty);
