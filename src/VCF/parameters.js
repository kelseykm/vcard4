import {
  MissingArgument,
  InvalidArgument
} from './errors.js';

import {
  TextType,
  BooleanType,
  DateTimeType,
  IntegerType,
  FloatType,
  LanguageTagType,
  URIType
} from './values.js';

class LanguageParameter {
  param = 'LANGUAGE';

  #langTag;

  get value() {
    return this.#langTag.value;
  }

  constructor(langTag) {
    if (typeof langTag === 'undefined')
    throw new MissingArgument('Language Tag for LanguageParameter must be supplied');
    else if (!(langTag instanceof LanguageTagType))
    throw new InvalidArgument('The value of the LANGUAGE property parameter should be of type LanguageTagType');

    this.#langTag = langTag;
    Object.freeze(this);
  }
}

class ValueParameter {
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
      URIType
    ];
    if (!types.some(type => valType instanceof type))
    throw new InvalidArgument('Value for ValueParameter not recognized');
  }

  constructor(valType) {
    this.#validate(valType);
    this.#valueType = valType;

    Object.freeze(this);
  }
}

class PrefParameter {
  param = 'PREF';

  #validate(prefValue) {
    if (typeof prefValue === 'undefined')
    throw new MissingArgument('Value for PrefParameter must be supplied');
    else if (typeof prefValue !== 'number' || !(prefValue >= 1 && prefValue <= 100))
    throw new InvalidArgument('Value for PrefParameter must be an integer between 1 and 100');
  }

  constructor(prefValue) {
    this.#validate(prefValue);
    this.value = prefValue.toString();

    Object.freeze(this);
  }
}

class AltidParameter {
  param = 'ALTID';

  #validate(altidValue) {
    if (typeof altidValue === 'undefined')
    throw new MissingArgument('Value for AltidParameter must be supplied');
  }

  constructor(altidValue) {
    this.#validate(altidValue);
    this.value = altidValue.toString();

    Object.freeze(this);
  }
}

class PIDParameter {
  param = 'PID';

  #pidRegExp = /^\d+\.?\d+(?:,\d+\.?\d+)*$/;

  #validate(pidValue) {
    if (typeof pidValue === 'undefined')
    throw new MissingArgument('Value for PIDParameter must be supplied');
    else if (!this.#pidRegExp.test(pidValue))
    throw new InvalidArgument('Invalid value for PIDParameter');
  }

  constructor(pidValue) {
    this.#validate(pidValue);
    this.value = pidValue.toString();

    Object.freeze(this);
  }
}

class TypeParameter {
  param = 'TYPE';

  #typeRegExp = /^(?:work|home|text|voice|fax|cell|video|pager|textphone|contact|acquaintance|friend|met|co-worker|colleague|co-resident|neighbor|child|parent|sibling|spouse|kin|muse|crush|date|sweetheart|me|agent|emergency|A-GNSS|A-GPS|AOA|best-guess|Cell|DBH|DBH_HELO|Derived|Device-Assisted_A-GPS|Device-Assisted_EOTD|Device-Based_A-GPS|Device-Based_EOTD|DHCP|E-CID|ELS-BLE|ELS-WiFi|GNSS|GPS|Handset_AFLT|Handset_EFLT|Hybrid_A-GPS|hybridAGPS_AFLT|hybridCellSector_AGPS|hybridTDOA_AOA|hybridTDOA_AGPS|hybridTDOA_AGPS_AOA|IPDL|LLDP-MED|Manual|MBS|MPL|NEAD-BLE|NEAD-WiFi|networkRFFingerprinting|networkTDOA|networkTOA|NMR|OTDOA|RFID|RSSI|RSSI-RTT|RTT|TA|TA-NMR|Triangulation|UTDOA|Wiremap|802\.11|x-[A-Za-z0-9]+)(?:,(?:work|home|text|voice|fax|cell|video|pager|textphone|contact|acquaintance|friend|met|co-worker|colleague|co-resident|neighbor|child|parent|sibling|spouse|kin|muse|crush|date|sweetheart|me|agent|emergency|A-GNSS|A-GPS|AOA|best-guess|Cell|DBH|DBH_HELO|Derived|Device-Assisted_A-GPS|Device-Assisted_EOTD|Device-Based_A-GPS|Device-Based_EOTD|DHCP|E-CID|ELS-BLE|ELS-WiFi|GNSS|GPS|Handset_AFLT|Handset_EFLT|Hybrid_A-GPS|hybridAGPS_AFLT|hybridCellSector_AGPS|hybridTDOA_AOA|hybridTDOA_AGPS|hybridTDOA_AGPS_AOA|IPDL|LLDP-MED|Manual|MBS|MPL|NEAD-BLE|NEAD-WiFi|networkRFFingerprinting|networkTDOA|networkTOA|NMR|OTDOA|RFID|RSSI|RSSI-RTT|RTT|TA|TA-NMR|Triangulation|UTDOA|Wiremap|802\.11|x-[A-Za-z0-9]+))*$/i;

  #validate(typeValue) {
    if (typeof typeValue === 'undefined')
    throw new MissingArgument('Value for TypeParameter must be supplied');
    else if (!this.#typeRegExp.test(typeValue))
    throw new InvalidArgument('Invalid value for TypeParameter');
  }

  constructor(typeValue) {
    this.#validate(typeValue);
    this.value = typeValue.toString();

    Object.freeze(this);
  }
}

class MediatypeParameter {
  param = 'MEDIATYPE';

  #mediaTypeRegExp = /^(?:[A-Za-z0-9!#\$&\.\+\-\^]){1,127}\/(?:[A-Za-z0-9!#\$&\.\+\-\^]){1,127}(?:;.+=.+)*$/;

  #validate(mediaValue) {
    if (typeof mediaValue === 'undefined')
    throw new MissingArgument('Value for MediatypeParameter must be supplied');
    else if (!this.#mediaTypeRegExp.test(mediaValue))
    throw new InvalidArgument('Invalid media type');
  }

  constructor(mediaValue) {
    this.#validate(mediaValue);
    this.value = mediaValue.toString();

    Object.freeze(this);
  }
}

class CalscaleParameter {
  param = 'CALSCALE';

  #calscaleRegExp = /^(?:gregorian|x-[A-Za-z0-9]+)$/;

  #validate(calscaleValue) {
    if (typeof calscaleValue === 'undefined')
    throw new MissingArgument('Value for CalscaleParameter must be supplied');
    else if (!this.#calscaleRegExp.test(calscaleValue))
    throw new InvalidArgument('Invalid calscale value');
  }

  constructor(calscaleValue) {
    this.#validate(calscaleValue);
    this.value = calscaleValue;

    Object.freeze(this);
  }
}

class SortAsParameter {
  param = 'SORT-AS';

  #validate(sortValue) {
    if (typeof sortValue === 'undefined')
    throw new MissingArgument('Value for SortAsParameter must be supplied');
  }

  constructor(sortValue) {
    this.#validate(sortValue);
    this.value = sortValue.toString();

    Object.freeze(this);
  }
}

class GeoParameter {
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
    this.#validate(geoValue);
    this.value = `"${geoValue}"`;

    Object.freeze(this);
  }
}

class TzParameter {
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
    this.#validate(tzValue);
    this.value = `"${tzValue}"`;

    Object.freeze(this);
  }
}

class AnyParameter {
  #anyParamRegExp = /^(?:A-GNSS|A-GPS|AOA|best-guess|Cell|DBH|DBH_HELO|Derived|Device-Assisted_A-GPS|Device-Assisted_EOTD|Device-Based_A-GPS|Device-Based_EOTD|DHCP|E-CID|ELS-BLE|ELS-WiFi|GNSS|GPS|Handset_AFLT|Handset_EFLT|Hybrid_A-GPS|hybridAGPS_AFLT|hybridCellSector_AGPS|hybridTDOA_AOA|hybridTDOA_AGPS|hybridTDOA_AGPS_AOA|IPDL|LLDP-MED|Manual|MBS|MPL|NEAD-BLE|NEAD-WiFi|networkRFFingerprinting|networkTDOA|networkTOA|NMR|OTDOA|RFID|RSSI|RSSI-RTT|RTT|TA|TA-NMR|Triangulation|UTDOA|Wiremap|802\.11|x-[A-Za-z0-9]+)(?:,(?:A-GNSS|A-GPS|AOA|best-guess|Cell|DBH|DBH_HELO|Derived|Device-Assisted_A-GPS|Device-Assisted_EOTD|Device-Based_A-GPS|Device-Based_EOTD|DHCP|E-CID|ELS-BLE|ELS-WiFi|GNSS|GPS|Handset_AFLT|Handset_EFLT|Hybrid_A-GPS|hybridAGPS_AFLT|hybridCellSector_AGPS|hybridTDOA_AOA|hybridTDOA_AGPS|hybridTDOA_AGPS_AOA|IPDL|LLDP-MED|Manual|MBS|MPL|NEAD-BLE|NEAD-WiFi|networkRFFingerprinting|networkTDOA|networkTOA|NMR|OTDOA|RFID|RSSI|RSSI-RTT|RTT|TA|TA-NMR|Triangulation|UTDOA|Wiremap|802\.11|x-[A-Za-z0-9]+))*$/i;

  #validate(param, value) {
    if (typeof param === 'undefined' || typeof value === 'undefined')
    throw new MissingArgument('Param and value for AnyParameter must be supplied');
    else if (!this.#anyParamRegExp.test(param))
    throw new InvalidArgument('Invalid param for AnyParameter');
  }

  constructor(param, value) {
    this.#validate(param, value);
    this.param = param.toString();
    this.value = value.toString();

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
