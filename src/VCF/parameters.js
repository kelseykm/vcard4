import {
  MissingArgument,
  InvalidArgument
} from './errors.js';

import {
  TextType,
  TextListType,
  BooleanType,
  DateTimeType,
  IntegerType,
  FloatType,
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
    if (!this.#abstractPropertiesAndMethods.every(abstractPropertyOrMethod => this.hasOwnProperty(abstractPropertyOrMethod) || Object.getPrototypeOf(this).hasOwnProperty(abstractPropertyOrMethod)))
    throw new Error('All abstract properties and methods in abstract base class must be defined in child class');
  }

  repr() {
    return `${this.param}=${this.value}`;
  }

  constructor() {
    if (this.constructor === AbstractBaseParameter)
    throw new Error('Cannot create instance of abstract class');
  }
}

// Parameters
class LanguageParameter extends AbstractBaseParameter {
  param = 'LANGUAGE';

  #langTag;

  get value() {
    return this.#langTag.repr();
  }

  #validate(langTag) {
    if (typeof langTag === 'undefined')
    throw new MissingArgument('Language Tag for LanguageParameter must be supplied');
    else if (!(langTag instanceof LanguageTagType))
    throw new InvalidArgument('The value of the LANGUAGE property parameter should be of type LanguageTagType');
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
  param = 'VALUE';

  #valueType;

  get value() {
    return this.#valueType.type;
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
  param = 'PREF';

  #validate(prefValue) {
    if (typeof prefValue === 'undefined')
    throw new MissingArgument('Value for PrefParameter must be supplied');
    else if (typeof prefValue !== 'number' || !(prefValue >= 1 && prefValue <= 100))
    throw new InvalidArgument('Value for PrefParameter must be an integer between 1 and 100');
  }

  constructor(prefValue) {
    super();

    this.#validate(prefValue);
    this.value = prefValue.toString();

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

class AltidParameter extends AbstractBaseParameter {
  param = 'ALTID';

  #validate(altidValue) {
    if (typeof altidValue === 'undefined')
    throw new MissingArgument('Value for AltidParameter must be supplied');
  }

  constructor(altidValue) {
    super();

    this.#validate(altidValue);
    this.value = altidValue.toString();

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

class PIDParameter extends AbstractBaseParameter {
  param = 'PID';

  #pidRegExp = /^\d+\.?\d+(?:,\d+\.?\d+)*$/;

  #validate(pidValue) {
    if (typeof pidValue === 'undefined')
    throw new MissingArgument('Value for PIDParameter must be supplied');
    else if (!this.#pidRegExp.test(pidValue))
    throw new InvalidArgument('Invalid value for PIDParameter');
  }

  constructor(pidValue) {
    super();

    this.#validate(pidValue);
    this.value = pidValue.toString();

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

class TypeParameter extends AbstractBaseParameter {
  param = 'TYPE';

  #typeRegExp = /^(?:work|home|text|voice|fax|cell|video|pager|textphone|contact|acquaintance|friend|met|co-worker|colleague|co-resident|neighbor|child|parent|sibling|spouse|kin|muse|crush|date|sweetheart|me|agent|emergency|A-GNSS|A-GPS|AOA|best-guess|Cell|DBH|DBH_HELO|Derived|Device-Assisted_A-GPS|Device-Assisted_EOTD|Device-Based_A-GPS|Device-Based_EOTD|DHCP|E-CID|ELS-BLE|ELS-WiFi|GNSS|GPS|Handset_AFLT|Handset_EFLT|Hybrid_A-GPS|hybridAGPS_AFLT|hybridCellSector_AGPS|hybridTDOA_AOA|hybridTDOA_AGPS|hybridTDOA_AGPS_AOA|IPDL|LLDP-MED|Manual|MBS|MPL|NEAD-BLE|NEAD-WiFi|networkRFFingerprinting|networkTDOA|networkTOA|NMR|OTDOA|RFID|RSSI|RSSI-RTT|RTT|TA|TA-NMR|Triangulation|UTDOA|Wiremap|802\.11|x-[A-Za-z0-9]+)(?:,(?:work|home|text|voice|fax|cell|video|pager|textphone|contact|acquaintance|friend|met|co-worker|colleague|co-resident|neighbor|child|parent|sibling|spouse|kin|muse|crush|date|sweetheart|me|agent|emergency|A-GNSS|A-GPS|AOA|best-guess|Cell|DBH|DBH_HELO|Derived|Device-Assisted_A-GPS|Device-Assisted_EOTD|Device-Based_A-GPS|Device-Based_EOTD|DHCP|E-CID|ELS-BLE|ELS-WiFi|GNSS|GPS|Handset_AFLT|Handset_EFLT|Hybrid_A-GPS|hybridAGPS_AFLT|hybridCellSector_AGPS|hybridTDOA_AOA|hybridTDOA_AGPS|hybridTDOA_AGPS_AOA|IPDL|LLDP-MED|Manual|MBS|MPL|NEAD-BLE|NEAD-WiFi|networkRFFingerprinting|networkTDOA|networkTOA|NMR|OTDOA|RFID|RSSI|RSSI-RTT|RTT|TA|TA-NMR|Triangulation|UTDOA|Wiremap|802\.11|x-[A-Za-z0-9]+))*$/i;

  #validate(typeValue) {
    if (typeof typeValue === 'undefined')
    throw new MissingArgument('Value for TypeParameter must be supplied');
    else if (!this.#typeRegExp.test(typeValue))
    throw new InvalidArgument('Invalid value for TypeParameter');
  }

  constructor(typeValue) {
    super();

    this.#validate(typeValue);
    this.value = typeValue.toString();

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

class MediatypeParameter extends AbstractBaseParameter {
  param = 'MEDIATYPE';

  #mediaTypeRegExp = /^(?:[A-Za-z0-9!#\$&\.\+\-\^]){1,127}\/(?:[A-Za-z0-9!#\$&\.\+\-\^]){1,127}(?:;.+=.+)*$/;

  #validate(mediaValue) {
    if (typeof mediaValue === 'undefined')
    throw new MissingArgument('Value for MediatypeParameter must be supplied');
    else if (!this.#mediaTypeRegExp.test(mediaValue))
    throw new InvalidArgument('Invalid media type');
  }

  constructor(mediaValue) {
    super();

    this.#validate(mediaValue);
    this.value = mediaValue.toString();

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

class CalscaleParameter extends AbstractBaseParameter {
  param = 'CALSCALE';

  #calscaleRegExp = /^(?:gregorian|x-[A-Za-z0-9]+)$/;

  #validate(calscaleValue) {
    if (typeof calscaleValue === 'undefined')
    throw new MissingArgument('Value for CalscaleParameter must be supplied');
    else if (!this.#calscaleRegExp.test(calscaleValue))
    throw new InvalidArgument('Invalid calscale value');
  }

  constructor(calscaleValue) {
    super();

    this.#validate(calscaleValue);
    this.value = calscaleValue;

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

class SortAsParameter extends AbstractBaseParameter {
  param = 'SORT-AS';

  #validate(sortValue) {
    if (typeof sortValue === 'undefined')
    throw new MissingArgument('Value for SortAsParameter must be supplied');
  }

  constructor(sortValue) {
    super();

    this.#validate(sortValue);
    this.value = sortValue.toString();

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

class GeoParameter extends AbstractBaseParameter {
  param = 'GEO';

  //Credit for the following regex goes to Jonas Hermsmeier, who got it from Jeff Roberson and added capture groups
  #uriRegExp = new RegExp("([A-Za-z][A-Za-z0-9+\\-.]*):(?:(//)(?:((?:[A-Za-z0-9\\-._~!$&'()*+,;=:]|%[0-9A-Fa-f]{2})*)@)?((?:\\[(?:(?:(?:(?:[0-9A-Fa-f]{1,4}:){6}|::(?:[0-9A-Fa-f]{1,4}:){5}|(?:[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){4}|(?:(?:[0-9A-Fa-f]{1,4}:){0,1}[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){3}|(?:(?:[0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){2}|(?:(?:[0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})?::[0-9A-Fa-f]{1,4}:|(?:(?:[0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})?::)(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))|(?:(?:[0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})?::[0-9A-Fa-f]{1,4}|(?:(?:[0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})?::)|[Vv][0-9A-Fa-f]+\\.[A-Za-z0-9\\-._~!$&'()*+,;=:]+)\\]|(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)|(?:[A-Za-z0-9\\-._~!$&'()*+,;=]|%[0-9A-Fa-f]{2})*))(?::([0-9]*))?((?:/(?:[A-Za-z0-9\\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})*)*)|/((?:(?:[A-Za-z0-9\\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})+(?:/(?:[A-Za-z0-9\\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})*)*)?)|((?:[A-Za-z0-9\\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})+(?:/(?:[A-Za-z0-9\\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})*)*)|)(?:\\?((?:[A-Za-z0-9\\-._~!$&'()*+,;=:@/?]|%[0-9A-Fa-f]{2})*))?(?:\\#((?:[A-Za-z0-9\\-._~!$&'()*+,;=:@/?]|%[0-9A-Fa-f]{2})*))?");

  #validate(geoValue) {
    if (typeof geoValue === 'undefined')
    throw new MissingArgument('Value for GeoParameter must be supplied');
    else if (!(this.#uriRegExp.test(geoValue)))
    throw new InvalidArgument('Invalid value for GeoParameter');
  }

  constructor(geoValue) {
    super();

    this.#validate(geoValue);
    this.value = `"${geoValue}"`;

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

class TzParameter extends AbstractBaseParameter {
  param = 'TZ';

  //Credit for the following regex goes to Jonas Hermsmeier, who got it from Jeff Roberson and added capture groups
  #uriRegExp = new RegExp("([A-Za-z][A-Za-z0-9+\\-.]*):(?:(//)(?:((?:[A-Za-z0-9\\-._~!$&'()*+,;=:]|%[0-9A-Fa-f]{2})*)@)?((?:\\[(?:(?:(?:(?:[0-9A-Fa-f]{1,4}:){6}|::(?:[0-9A-Fa-f]{1,4}:){5}|(?:[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){4}|(?:(?:[0-9A-Fa-f]{1,4}:){0,1}[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){3}|(?:(?:[0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){2}|(?:(?:[0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})?::[0-9A-Fa-f]{1,4}:|(?:(?:[0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})?::)(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))|(?:(?:[0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})?::[0-9A-Fa-f]{1,4}|(?:(?:[0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})?::)|[Vv][0-9A-Fa-f]+\\.[A-Za-z0-9\\-._~!$&'()*+,;=:]+)\\]|(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)|(?:[A-Za-z0-9\\-._~!$&'()*+,;=]|%[0-9A-Fa-f]{2})*))(?::([0-9]*))?((?:/(?:[A-Za-z0-9\\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})*)*)|/((?:(?:[A-Za-z0-9\\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})+(?:/(?:[A-Za-z0-9\\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})*)*)?)|((?:[A-Za-z0-9\\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})+(?:/(?:[A-Za-z0-9\\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})*)*)|)(?:\\?((?:[A-Za-z0-9\\-._~!$&'()*+,;=:@/?]|%[0-9A-Fa-f]{2})*))?(?:\\#((?:[A-Za-z0-9\\-._~!$&'()*+,;=:@/?]|%[0-9A-Fa-f]{2})*))?");

  #validate(tzValue) {
    if (typeof tzValue === 'undefined')
    throw new MissingArgument('Value for TzParameter must be supplied');
    else if (!(this.#uriRegExp.test(tzValue)))
    throw new InvalidArgument('Invalid value for TzParameter');
  }

  constructor(tzValue) {
    super();

    this.#validate(tzValue);
    this.value = `"${tzValue}"`;

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

class AnyParameter extends AbstractBaseParameter {
  #anyParamRegExp = /^(?:A-GNSS|A-GPS|AOA|best-guess|Cell|DBH|DBH_HELO|Derived|Device-Assisted_A-GPS|Device-Assisted_EOTD|Device-Based_A-GPS|Device-Based_EOTD|DHCP|E-CID|ELS-BLE|ELS-WiFi|GNSS|GPS|Handset_AFLT|Handset_EFLT|Hybrid_A-GPS|hybridAGPS_AFLT|hybridCellSector_AGPS|hybridTDOA_AOA|hybridTDOA_AGPS|hybridTDOA_AGPS_AOA|IPDL|LLDP-MED|Manual|MBS|MPL|NEAD-BLE|NEAD-WiFi|networkRFFingerprinting|networkTDOA|networkTOA|NMR|OTDOA|RFID|RSSI|RSSI-RTT|RTT|TA|TA-NMR|Triangulation|UTDOA|Wiremap|802\.11|x-[A-Za-z0-9]+)$/i;

  #validate(param, value) {
    if (typeof param === 'undefined' || typeof value === 'undefined')
    throw new MissingArgument('Param and value for AnyParameter must be supplied');
    else if (!this.#anyParamRegExp.test(param))
    throw new InvalidArgument('Invalid param for AnyParameter');
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
  AnyParameter
};
