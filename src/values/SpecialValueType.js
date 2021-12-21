import { BaseValue } from './BaseValue.js';
import { MissingArgument, InvalidArgument } from '../errors/index.js';
import { TextType } from './TextType.js';
import { TextListType } from './TextListType.js';
import { IntegerType } from './IntegerType.js';
import { SexType } from './SexType.js';
import { URIType } from './URIType.js';

export class SpecialValueType extends BaseValue {
  #validate(value, targetProp) {
    if (
      (typeof value === 'undefined') ||
      (typeof targetProp === 'undefined')
    )
    throw new MissingArgument('Type, value and target property for SpecialValueType must be supplied');

    const valueRegExp = /^(?:individual|group|org|location|application|A-GNSS|A-GPS|AOA|best-guess|Cell|DBH|DBH_HELO|Derived|Device-Assisted_A-GPS|Device-Assisted_EOTD|Device-Based_A-GPS|Device-Based_EOTD|DHCP|E-CID|ELS-BLE|ELS-WiFi|GNSS|GPS|Handset_AFLT|Handset_EFLT|Hybrid_A-GPS|hybridAGPS_AFLT|hybridCellSector_AGPS|hybridTDOA_AOA|hybridTDOA_AGPS|hybridTDOA_AGPS_AOA|IPDL|LLDP-MED|Manual|MBS|MPL|NEAD-BLE|NEAD-WiFi|networkRFFingerprinting|networkTDOA|networkTOA|NMR|OTDOA|RFID|RSSI|RSSI-RTT|RTT|TA|TA-NMR|Triangulation|UTDOA|Wiremap|802\.11|x-[A-Za-z0-9]+)$/i;

    switch (true) {
      case /^(?:Begin|End)Property$/i.test(targetProp):
        if (value !== 'VCARD')
        throw new InvalidArgument(`Invalid value for SpecialValueType for ${/^Begin/i.test(targetProp) ? 'Begin' : 'End'}Property`);

        break;
      case /^KindProperty$/i.test(targetProp):
        if (
          (typeof value !== 'string') ||
          !valueRegExp.test(value)
        )
        throw new InvalidArgument('Invalid value for SpecialValueType for KindProperty');

        break;
      case /^NProperty$/i.test(targetProp):
        if (
          !Array.isArray(value) &&
          (value.length !== 5)
        )
        throw new InvalidArgument('Invalid value for SpecialValueType for NProperty. It should be an array with a length of 5');

        for (let index = 0; index < value.length; index++)
        if (value[index])
        if (
          !(value[index] instanceof TextType) &&
          !(value[index] instanceof TextListType)
        )
        throw new TypeError('Invalid value for SpecialValueType for NProperty. The items in the array, if present, should be of type TextType or TextListType');

        break;
      case /^GenderProperty$/i.test(targetProp):
        if (
          !Array.isArray(value) &&
          (value.length !== 2)
        )
        throw new InvalidArgument('Invalid value for SpecialValueType for GenderProperty. It should be an array with a length of 2');

        else if (
          value[0] &&
          !(value[0] instanceof SexType)
        )
        throw new TypeError('Invalid value for SpecialValueType for GenderProperty. The first item in the array, if present, should be of type SexType');

        else if (
          (!value[0] && !value[1]) ||
          (
            value[1] &&
            !(value[1] instanceof TextType)
          )
        )
        throw new TypeError('Invalid value for SpecialValueType for GenderProperty. The second item in the array, if present, should be of type TextType');

        break;
      case /^AdrProperty$/i.test(targetProp):
        if (
          !Array.isArray(value) &&
          (value.length !== 7)
        )
        throw new InvalidArgument('Invalid value for SpecialValueType for AdrProperty. It should be an array with a length of 7');

        for (let index = 0; index < value.length; index++)
        if (value[index])
        if (!(value[index] instanceof TextType))
        throw new TypeError('Invalid value for SpecialValueType for AdrProperty. The items in the array, if present, should be of type TextType');

        break;
      case /^OrgProperty$/i.test(targetProp):
        if (
          !Array.isArray(value) ||
          !(value.length >= 1)
        )
        throw new InvalidArgument('Invalid value for SpecialValueType for OrgProperty. It should be an array with at least one item');

        for (let index = 0; index < value.length; index++)
        if (value[index])
        if (!(value[index] instanceof TextType))
        throw new TypeError('Invalid value for SpecialValueType for OrgProperty. The items in the array, if present, should be of type TextType');

        break;
      case /^ClientpidmapProperty$/i.test(targetProp):
        if (
          !Array.isArray(value) &&
          (value.length !== 2)
        )
        throw new InvalidArgument('Invalid value for SpecialValueType for ClientpidmapProperty. It should be an array with a length of 2');

        else if (!(value[0] instanceof IntegerType))
        throw new TypeError('Invalid value for SpecialValueType for ClientpidmapProperty. The first item in the array should be of type IntegerType');

        else if (0 > Number(value[0].repr()))
        throw new InvalidArgument('Invalid value for SpecialValueType for ClientpidmapProperty. The first item in the array should be a positive integer of type IntegerType')

        else if (!(value[1] instanceof URIType))
        throw new TypeError('Invalid value for SpecialValueType for ClientpidmapProperty. The second item in the array should be of type URIType');

        break;
      default:
        throw new InvalidArgument('Invalid target property for SpecialValueType');
    }
  }

  constructor(value, targetProp) {
    super();

    this.#validate(value, targetProp);
    this.targetProp = targetProp;

    if (Array.isArray(value)) {
      for (let index = 0; index < value.length; index++)
      if (value[index])
      value[index] = value[index].repr();

      this.value = value.join(';');
    }
    else this.value = value;

    this.type = 'TEXT';

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

Object.freeze(SpecialValueType);
