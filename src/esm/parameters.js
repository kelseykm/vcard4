import {
  MissingArgument,
  InvalidArgument
} from './errors.js';

import {
  TextType,
  TextListType,
  BooleanType,
  DateTimeType,
  DateTimeListType,
  IntegerType,
  IntegerListType,
  FloatType,
  FloatListType,
  LanguageTagType,
  URIType,
  SexType,
  SpecialValueType
} from './values.js';

// Abstract Base Class for parameters
class AbstractBaseParameter {
  #abstractPropertiesAndMethods = [
    'param',
    'value'
  ];

  checkAbstractPropertiesAndMethods() {
    if (
      !this.#abstractPropertiesAndMethods.every(
        abstractPropertyOrMethod => this.hasOwnProperty(abstractPropertyOrMethod) ||
        Object.getPrototypeOf(this).hasOwnProperty(abstractPropertyOrMethod) ||
        this.constructor.hasOwnProperty(abstractPropertyOrMethod)
      )
    )
    throw new Error('All abstract properties and methods in abstract base class must be defined in child class');
  }

  repr() {
    return `${this.constructor.param || this.param}=${this.value}`;
  }

  constructor() {
    if (this.constructor === AbstractBaseParameter)
    throw new Error('Cannot create instance of abstract class');
  }
}

// Parameters
class LanguageParameter extends AbstractBaseParameter {
  static param = 'LANGUAGE';

  #langTag;

  get value() {
    return this.#langTag.repr();
  }

  #validate(langTag) {
    if (typeof langTag === 'undefined')
    throw new MissingArgument('Language Tag for LanguageParameter must be supplied');

    else if (!(langTag instanceof LanguageTagType))
    throw new TypeError('The value of the LANGUAGE property parameter should be of type LanguageTagType');
  }

  constructor(langTag) {
    super();

    this.#validate(langTag);
    this.#langTag = langTag;

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

class ValueParameter extends AbstractBaseParameter {
  static param = 'VALUE';

  #valueType;

  get value() {
    let type = this.#valueType.type || this.#valueType.constructor.type;
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

class PrefParameter extends AbstractBaseParameter {
  static param = 'PREF';

  #validate(prefValue) {
    if (typeof prefValue === 'undefined')
    throw new MissingArgument('Value for PrefParameter must be supplied');

    else if (!(prefValue instanceof IntegerType))
    throw new TypeError('Value for PrefParameter should be of type IntegerType');

    else if (
      (Number(prefValue.repr()) < 1) ||
      (Number(prefValue.repr()) > 100)
    )
    throw new InvalidArgument('Value for PrefParameter must be between 1 and 100');
  }

  constructor(prefValue) {
    super();

    this.#validate(prefValue);
    this.value = prefValue.repr();

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

class AltidParameter extends AbstractBaseParameter {
  static param = 'ALTID';

  #validate(altidValue) {
    if (typeof altidValue === 'undefined')
    throw new MissingArgument('Value for AltidParameter must be supplied');

    else if (
      !(altidValue instanceof IntegerType) &&
      !(altidValue instanceof TextType)
    )
    throw new InvalidArgument('Value for AltidParameter must be of type number or string');
  }

  constructor(altidValue) {
    super();

    this.#validate(altidValue);
    this.value = altidValue.repr();

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

class PIDParameter extends AbstractBaseParameter {
  static param = 'PID';

  #pidRegExp = /^\d+(?:\.\d+)?$/;

  #validate(pidValue) {
    if (typeof pidValue === 'undefined')
    throw new MissingArgument('Value for PIDParameter must be supplied');

    else if (
      !Array.isArray(pidValue) &&
      !(pidValue instanceof IntegerType)
    )
    throw new InvalidArgument('Invalid value for PIDParameter');

    else if (
      Array.isArray(pidValue) &&
      !pidValue.every(val1 => {
        if (Array.isArray(val1))
        return val1.every(
          val2 => val2 instanceof IntegerType
        );
        return val1 instanceof IntegerType;
      })
    )
    throw new InvalidArgument('Invalid value for PIDParameter');
  }

  constructor(pidValue) {
    super();

    this.#validate(pidValue);
    this.value = Array.isArray(pidValue) ?

    `${pidValue.reduce((accumulatedTypes, currentType) => {
      if (Array.isArray(currentType)) {
        accumulatedTypes.push(
          currentType.reduce((accumType, currType) => {
            accumType.push(currType.repr());
            return accumType;
          }, []).join('.')
        );
      }
      else accumulatedTypes.push(currentType.repr());

      return accumulatedTypes;
    }, []).join(',')}` :

    pidValue.repr();

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

class TypeParameter extends AbstractBaseParameter {
  static param = 'TYPE';

  #typeRegExp = /^(?:work|home|A-GNSS|A-GPS|AOA|best-guess|Cell|DBH|DBH_HELO|Derived|Device-Assisted_A-GPS|Device-Assisted_EOTD|Device-Based_A-GPS|Device-Based_EOTD|DHCP|E-CID|ELS-BLE|ELS-WiFi|GNSS|GPS|Handset_AFLT|Handset_EFLT|Hybrid_A-GPS|hybridAGPS_AFLT|hybridCellSector_AGPS|hybridTDOA_AOA|hybridTDOA_AGPS|hybridTDOA_AGPS_AOA|IPDL|LLDP-MED|Manual|MBS|MPL|NEAD-BLE|NEAD-WiFi|networkRFFingerprinting|networkTDOA|networkTOA|NMR|OTDOA|RFID|RSSI|RSSI-RTT|RTT|TA|TA-NMR|Triangulation|UTDOA|Wiremap|802\.11|x-[A-Za-z0-9]+)$/i;

  #telTypeRegExp = /^(?:text|voice|fax|cell|video|pager|textphone)$/i;

  #relatedTypeRegExp = /(?:contact|acquaintance|friend|met|co-worker|colleague|co-resident|neighbor|child|parent|sibling|spouse|kin|muse|crush|date|sweetheart|me|agent|emergency)/i;

  #validate(typeValue, targetProp) {
    if (
      (typeof typeValue === 'undefined') ||
      (typeof targetProp === 'undefined')
    )
    throw new MissingArgument('Value and target property for TypeParameter must be supplied');

    else if (
      !(typeValue instanceof TextType) &&
      !(typeValue instanceof TextListType)
    )
    throw new TypeError('Value for TypeParameter must be of type TextType or TextListType');

    switch (true) {
      case /^TelProperty$/i.test(targetProp):
        let telre = new RegExp(`(?:${this.#telTypeRegExp.source}|${this.#typeRegExp.source})`, 'i');

        if (
          (typeValue instanceof TextType) &&
          !telre.test(typeValue.repr())
        )
        throw new InvalidArgument('Invalid value for TypeParameter for TelProperty');

        else if (
          (typeValue instanceof TextListType) &&
          !typeValue.repr().split(',').every(type => telre.test(type))
        )
        throw new InvalidArgument('Invalid value for TypeParameter for TelProperty');

        break;
      case /^RelatedProperty$/i.test(targetProp):
        let relatedre = new RegExp(`(?:${this.#relatedTypeRegExp.source}|${this.#typeRegExp.source})`, 'i');

        if (
          (typeValue instanceof TextType) &&
          !relatedre.test(typeValue.repr())
        )
        throw new InvalidArgument('Invalid value for TypeParameter for RelatedProperty');

        else if (
          (typeValue instanceof TextListType) &&
          !typeValue.repr().split(',').every(type => relatedre.test(type))
        )
        throw new InvalidArgument('Invalid value for TypeParameter for RelatedProperty');

        break;
      default:
        if (
          (typeValue instanceof TextType) &&
          !this.#typeRegExp.test(typeValue.repr())
        )
        throw new InvalidArgument('Invalid value for TypeParameter');

        else if (
          (typeValue instanceof TextListType) &&
          !typeValue.repr().split(',').every(type => this.#typeRegExp.test(type))
        )
        throw new InvalidArgument('Invalid value for TypeParameter');
    }
  }

  constructor(typeValue, targetProp) {
    super();

    this.#validate(typeValue, targetProp);

    this.value = typeValue instanceof TextListType ?
    `"${typeValue.repr()}"` :
    typeValue.repr();

    this.targetProp = targetProp;

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

class MediatypeParameter extends AbstractBaseParameter {
  static param = 'MEDIATYPE';

  #mediaTypeRegExp = /^(?:[A-Za-z0-9!#\$&\.\+\-\^]){1,127}\/(?:[A-Za-z0-9!#\$&\.\+\-\^]){1,127}$/;
  #attributeRegExp = /^.+=.+$/;

  #validate(mediaValue) {
    if (typeof mediaValue === 'undefined')
    throw new MissingArgument('Value for MediatypeParameter must be supplied');

    else if (
      !Array.isArray(mediaValue) &&
      !this.#mediaTypeRegExp.test(mediaValue)
    )
    throw new InvalidArgument('Invalid media type');

    else if (Array.isArray(mediaValue)) {
      if (mediaValue.length !== 2)
      throw new InvalidArgument('Invalid value for MediatypeParameter. It should be an array with a length of 2');

      else if (!this.#mediaTypeRegExp.test(mediaValue[0]))
      throw new InvalidArgument('Invalid media type');

      else if (!this.#attributeRegExp.test(mediaValue[1]))
      throw new InvalidArgument('Invalid media type');
    }
  }

  constructor(mediaValue) {
    super();

    this.#validate(mediaValue);
    this.value = Array.isArray(mediaValue) ?
    `"${mediaValue.reduce((accumulatedTypes, currentType) => {
      accumulatedTypes.push(currentType.toString());
      return accumulatedTypes;
    }, []).join(';')}"` :
    mediaValue.toString();

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

class CalscaleParameter extends AbstractBaseParameter {
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

class SortAsParameter extends AbstractBaseParameter {
  static param = 'SORT-AS';

  #validate(sortValue) {
    if (typeof sortValue === 'undefined')
    throw new MissingArgument('Value for SortAsParameter must be supplied');
  }

  constructor(sortValue) {
    super();

    this.#validate(sortValue);
    this.value = Array.isArray(sortValue) ?
    `"${sortValue.reduce((accumulatedTypes, currentType) => {
      accumulatedTypes.push(currentType.toString());
      return accumulatedTypes;
    }, []).join(',')}"` :
    sortValue.toString();

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

class GeoParameter extends AbstractBaseParameter {
  static param = 'GEO';

  #validate(geoValue) {
    if (typeof geoValue === 'undefined')
    throw new MissingArgument('Value for GeoParameter must be supplied');

    else if (!(geoValue instanceof URIType))
    throw new TypeError('Value for GeoParameter must be of type URIType');
  }

  constructor(geoValue) {
    super();

    this.#validate(geoValue);
    this.value = `"${geoValue.repr()}"`;

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

class TzParameter extends AbstractBaseParameter {
  static param = 'TZ';

  #validate(tzValue) {
    if (typeof tzValue === 'undefined')
    throw new MissingArgument('Value for TzParameter must be supplied');

    let types = [
      TextType,
      URIType,
      DateTimeType
    ];
    if (
      !types.some(type => {
        if (type === DateTimeType)
        return (
          (tzValue instanceof type) &&
          (tzValue.type === 'UTC-OFFSET')
        );

        return tzValue instanceof type;
      })
    )
    throw new TypeError('Invalid type for value for TzParameter');
  }

  constructor(tzValue) {
    super();

    this.#validate(tzValue);
    this.value = `"${tzValue.repr()}"`;

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

class AnyParameter extends AbstractBaseParameter {
  #paramRegExp = /^(?:A-GNSS|A-GPS|AOA|best-guess|Cell|DBH|DBH_HELO|Derived|Device-Assisted_A-GPS|Device-Assisted_EOTD|Device-Based_A-GPS|Device-Based_EOTD|DHCP|E-CID|ELS-BLE|ELS-WiFi|GNSS|GPS|Handset_AFLT|Handset_EFLT|Hybrid_A-GPS|hybridAGPS_AFLT|hybridCellSector_AGPS|hybridTDOA_AOA|hybridTDOA_AGPS|hybridTDOA_AGPS_AOA|IPDL|LLDP-MED|Manual|MBS|MPL|NEAD-BLE|NEAD-WiFi|networkRFFingerprinting|networkTDOA|networkTOA|NMR|OTDOA|RFID|RSSI|RSSI-RTT|RTT|TA|TA-NMR|Triangulation|UTDOA|Wiremap|802\.11|x-[A-Za-z0-9]+)$/i;

  #validate(param, value) {
    if (typeof param === 'undefined' || typeof value === 'undefined')
    throw new MissingArgument('Parameter and value for AnyParameter must be supplied');

    else if (!this.#paramRegExp.test(param))
    throw new InvalidArgument('Invalid parameter for AnyParameter');
  }

  constructor(param, value) {
    super();

    this.#validate(param, value);
    this.param = param.toString();
    this.value = value.toString();

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

class LabelParameter extends AbstractBaseParameter {
  static param = 'LABEL';

  #validate(value) {
    if (typeof value === 'undefined')
    throw new MissingArgument('Value for LabelParameter must be supplied');

    else if (typeof value !== 'string')
    throw new TypeError('Only type string allowed for LabelParameter value');
  }

  #cleanUp(value) {
    return value.replaceAll('\n', '\\n');
  }

  constructor(value) {
    super();

    this.#validate(value);
    this.value = `"${this.#cleanUp(value)}"`;

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

export {
  LanguageParameter,
  ValueParameter,
  PrefParameter,
  AltidParameter,
  PIDParameter,
  TypeParameter,
  MediatypeParameter,
  CalscaleParameter,
  SortAsParameter,
  GeoParameter,
  TzParameter,
  AnyParameter,
  LabelParameter
};
