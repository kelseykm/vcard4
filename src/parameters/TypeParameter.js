import { BaseParameter } from './BaseParameter.js';
import { MissingArgument, InvalidArgument } from '../errors/index.js';

export class TypeParameter extends BaseParameter {
  static param = 'TYPE';
  static identifier = 'TypeParameter';

  #typeRegExp = /^(?:work|home|A-GNSS|A-GPS|AOA|best-guess|Cell|DBH|DBH_HELO|Derived|Device-Assisted_A-GPS|Device-Assisted_EOTD|Device-Based_A-GPS|Device-Based_EOTD|DHCP|E-CID|ELS-BLE|ELS-WiFi|GNSS|GPS|Handset_AFLT|Handset_EFLT|Hybrid_A-GPS|hybridAGPS_AFLT|hybridCellSector_AGPS|hybridTDOA_AOA|hybridTDOA_AGPS|hybridTDOA_AGPS_AOA|IPDL|LLDP-MED|Manual|MBS|MPL|NEAD-BLE|NEAD-WiFi|networkRFFingerprinting|networkTDOA|networkTOA|NMR|OTDOA|RFID|RSSI|RSSI-RTT|RTT|TA|TA-NMR|Triangulation|UTDOA|Wiremap|802\.11|x-[A-Za-z0-9]+)$/i;

  #telTypeRegExp = /^(?:text|voice|fax|cell|video|pager|textphone|main)$/i;

  #relatedTypeRegExp = /(?:contact|acquaintance|friend|met|co-worker|colleague|co-resident|neighbor|child|parent|sibling|spouse|kin|muse|crush|date|sweetheart|me|agent|emergency)/i;

  #validate(typeValue, targetProp) {
    if (
      (typeof typeValue === 'undefined') ||
      (typeof targetProp === 'undefined')
    )
    throw new MissingArgument('Value and target property for TypeParameter must be supplied');

    else if (
      typeValue.constructor.identifier !== 'TextType' &&
      typeValue.constructor.identifier !== 'TextListType'
    )
    throw new TypeError('Value for TypeParameter must be of type TextType or TextListType');

    const telre = new RegExp(`(?:${this.#telTypeRegExp.source}|${this.#typeRegExp.source})`, 'i');
    const relatedre = new RegExp(`(?:${this.#relatedTypeRegExp.source}|${this.#typeRegExp.source})`, 'i');

    switch (true) {
      case /^TelProperty$/i.test(targetProp):
        if (
          !telre.test(typeValue.repr()) &&
          !typeValue.repr().split(',').every(type => telre.test(type))
        )
        throw new InvalidArgument('Invalid value for TypeParameter for TelProperty');

        break;
      case /^RelatedProperty$/i.test(targetProp):
        if (
          !relatedre.test(typeValue.repr()) &&
          !typeValue.repr().split(',').every(type => relatedre.test(type))
        )
        throw new InvalidArgument('Invalid value for TypeParameter for RelatedProperty');

        break;
      default:
        if (
          !this.#typeRegExp.test(typeValue.repr()) &&
          !typeValue.repr().split(',').every(type => this.#typeRegExp.test(type))
        )
        throw new InvalidArgument('Invalid value for TypeParameter');
    }
  }

  constructor(typeValue, targetProp) {
    super();

    this.#validate(typeValue, targetProp);

    this.value = typeValue.constructor.identifier === 'TextListType' ? `"${typeValue.repr()}"` : typeValue.repr();

    this.targetProp = targetProp;

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

Object.freeze(TypeParameter);
