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
    if (!langTag) throw new Error('Language Tag for LanguageParameter must be supplied');
    else if (!(langTag instanceof LanguageTagType))
    throw new Error('The value of the LANGUAGE property parameter should be of type LanguageTagType');

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
    if (!valType) throw new Error('Value Type for ValueParameter must be supplied');

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
    throw new Error('Value Type not recognized');
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
    if (!prefValue) throw new Error('Value for PrefParameter must be supplied');
    else if (typeof prefValue !== 'number')
    throw new Error('Value MUST be an integer between 1 and 100');
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
    if (!altidValue) throw new Error('Altid value must be supplied');
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
    if (!pidValue) throw new Error('Value for PIDParameter must be supplied');
    else if (!this.#pidRegExp.test(pidValue))
    throw new Error('Invalid value for PIDParameter');
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
    if (!typeValue) throw new Error('Value for TypeParameter must be supplied');
    else if (!this.#typeRegExp.test(typeValue))
    throw new Error('Invalid value for TypeParameter');
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
    if (!mediaValue) throw new Error('Value for MediatypeParameter must be supplied');
    else if (!this.#mediaTypeRegExp.test(mediaValue))
    throw new Error('Invalid media type');
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
    if (!calscaleValue) throw new Error('Value for CalscaleParameter must be supplied');
    else if (!this.#calscaleRegExp.test(calscaleValue))
    throw new Error('Invalid calscale value');
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
    if (!sortValue) throw new Error('Value for SortAsParameter must be supplied');
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
    if (!geoValue) throw new Error('Value for GeoParameter must be supplied');
    else if (!(this.#uriRegExp.test(geoValue)))
    throw new Error('Invalid value for GeoParameter');
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
    if (!tzValue) throw new Error('Value for TzParameter must be supplied');
    else if (!(this.#uriRegExp.test(tzValue)))
    throw new Error('Invalid value for TzParameter');
  }

  constructor(tzValue) {
    this.#validate(tzValue);
    this.value = `"${tzValue}"`;

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
  TzParameter
};
