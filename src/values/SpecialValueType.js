import { BaseValue } from './BaseValue.js';
import { MissingArgument, InvalidArgument } from '../errors/index.js';

export class SpecialValueType extends BaseValue {
  static identifier = 'SpecialValueType';
  static type = 'TEXT';

  #validateAndSet(value, targetProp) {
    if (
      (typeof value === 'undefined') ||
      (typeof targetProp === 'undefined')
    )
    throw new MissingArgument('Value and target property for SpecialValueType must be supplied');

    const valueRegExp = /^(?:individual|group|org|location|application|A-GNSS|A-GPS|AOA|best-guess|Cell|DBH|DBH_HELO|Derived|Device-Assisted_A-GPS|Device-Assisted_EOTD|Device-Based_A-GPS|Device-Based_EOTD|DHCP|E-CID|ELS-BLE|ELS-WiFi|GNSS|GPS|Handset_AFLT|Handset_EFLT|Hybrid_A-GPS|hybridAGPS_AFLT|hybridCellSector_AGPS|hybridTDOA_AOA|hybridTDOA_AGPS|hybridTDOA_AGPS_AOA|IPDL|LLDP-MED|Manual|MBS|MPL|NEAD-BLE|NEAD-WiFi|networkRFFingerprinting|networkTDOA|networkTOA|NMR|OTDOA|RFID|RSSI|RSSI-RTT|RTT|TA|TA-NMR|Triangulation|UTDOA|Wiremap|802\.11|x-[A-Za-z0-9]+)$/i;

    let valueCopy;

    switch (true) {
      case /^KindProperty$/i.test(targetProp):
        if (
          (typeof value !== 'string') ||
          !valueRegExp.test(value)
        )
        throw new InvalidArgument('Invalid value for SpecialValueType for KindProperty');

        this.value = value;
        this.valueXML = `<text>${value}</text>`;

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
          value[index].constructor.identifier !== 'TextType' &&
          value[index].constructor.identifier !== 'TextListType'
        )
        throw new TypeError('Invalid value for SpecialValueType for NProperty. The items in the array, if present, should be of type TextType or TextListType');

        valueCopy = [...value];

        for (let index = 0; index < valueCopy.length; index++)
        if (valueCopy[index])
        valueCopy[index] = valueCopy[index].repr();

        this.value = valueCopy.join(';');

        this.valueXML = '';

        for (let index = 0; index < value.length; index++)
        switch (index) {
          case 0:
            if (!value[index])
            this.valueXML += '<surname/>';
            else this.valueXML += value[index].reprXML().replaceAll('text>', 'surname>');

            break;
          case 1:
            if (!value[index])
            this.valueXML += '<given/>';
            else this.valueXML += value[index].reprXML().replaceAll('text>', 'given>');

            break;
          case 2:
            if (!value[index])
            this.valueXML += '<additional/>';
            else this.valueXML += value[index].reprXML().replaceAll('text>', 'additional>');

            break;
          case 3:
            if (!value[index])
            this.valueXML += '<prefix/>';
            else this.valueXML += value[index].reprXML().replaceAll('text>', 'prefix>');

            break;
          case 4:
            if (!value[index])
            this.valueXML += '<suffix/>';
            else this.valueXML = value[index].reprXML().replaceAll('text>', 'suffix>');
        }

        break;
      case /^GenderProperty$/i.test(targetProp):
        if (
          !Array.isArray(value) &&
          (value.length !== 2)
        )
        throw new InvalidArgument('Invalid value for SpecialValueType for GenderProperty. It should be an array with a length of 2');

        else if (
          value[0] &&
          (value[0].constructor.identifier !== 'SexType')
        )
        throw new TypeError('Invalid value for SpecialValueType for GenderProperty. The first item in the array, if present, should be of type SexType');

        else if (
          (!value[0] && !value[1]) ||
          (
            value[1] &&
            (value[1].constructor.identifier !== 'TextType')
          )
        )
        throw new TypeError('Invalid value for SpecialValueType for GenderProperty. The second item in the array, if present, should be of type TextType');

        this.value = value.reduce((accumulated, current) => {
          return accumulated ? `${accumulated};${current.repr()}` : current.repr();
        }, '');

        this.valueXML = value.reduce((accumulated, current) => accumulated + current.reprXML(), '');

        break;
      case /^AdrProperty$/i.test(targetProp):
        if (
          !Array.isArray(value) &&
          (value.length !== 7)
        )
        throw new InvalidArgument('Invalid value for SpecialValueType for AdrProperty. It should be an array with a length of 7');

        for (let index = 0; index < value.length; index++)
        if (value[index])
        if (value[index].constructor.identifier !== 'TextType')
        throw new TypeError('Invalid value for SpecialValueType for AdrProperty. The items in the array, if present, should be of type TextType');

        valueCopy = [...value];

        for (let index = 0; index < valueCopy.length; index++)
        if (valueCopy[index])
        valueCopy[index] = valueCopy[index].repr();

        this.value = valueCopy.join(';');

        this.valueXML = '';

        for (let index = 0; index < value.length; index++)
        switch (index) {
          case 0:
            if (!value[index])
            this.valueXML += '<pobox/>';
            else this.valueXML += value[index].reprXML().replaceAll('text>', 'pobox>');

            break;
          case 1:
            if (!value[index])
            this.valueXML += '<ext/>';
            else this.valueXML += value[index].reprXML().replaceAll('text>', 'ext>');

            break;
          case 2:
            if (!value[index])
            this.valueXML += '<street/>';
            else this.valueXML += value[index].reprXML().replaceAll('text>', 'street>');

            break;
          case 3:
            if (!value[index])
            this.valueXML += '<locality/>';
            else this.valueXML += value[index].reprXML().replaceAll('text>', 'locality>');

            break;
          case 4:
            if (!value[index])
            this.valueXML += '<region/>';
            else this.valueXML += value[index].reprXML().replaceAll('text>', 'region>');

            break;
          case 5:
            if (!value[index])
            this.valueXML += '<code/>';
            else this.valueXML += value[index].reprXML().replaceAll('text>', 'code>');

            break;
          case 6:
            if (!value[index])
            this.valueXML += '<country/>';
            else this.valueXML += value[index].reprXML().replaceAll('text>', 'country>');
        }

        break;
      case /^OrgProperty$/i.test(targetProp):
        if (
          !Array.isArray(value) ||
          !(value.length >= 1)
        )
        throw new InvalidArgument('Invalid value for SpecialValueType for OrgProperty. It should be an array with at least one item');

        for (let index = 0; index < value.length; index++)
        if (value[index]?.constructor?.identifier !== 'TextType')
        throw new TypeError('Invalid value for SpecialValueType for OrgProperty. The items in the array should be of type TextType');

        this.value = value.reduce((accumulated, current) => {
          return accumulated ? `${accumulated};${current.repr()}` : current.repr();
        }, '');

        this.valueXML = value.reduce((accumulated, current) => accumulated + current.reprXML(), '');

        break;
      case /^ClientpidmapProperty$/i.test(targetProp):
        if (
          !Array.isArray(value) &&
          (value.length !== 2)
        )
        throw new InvalidArgument('Invalid value for SpecialValueType for ClientpidmapProperty. It should be an array with a length of 2');

        else if (value[0]?.constructor?.identifier !== 'IntegerType')
        throw new TypeError('Invalid value for SpecialValueType for ClientpidmapProperty. The first item in the array should be of type IntegerType');

        else if (0 > Number(value[0].repr()))
        throw new InvalidArgument('Invalid value for SpecialValueType for ClientpidmapProperty. The first item in the array should be a positive integer of type IntegerType')

        else if (value[1]?.constructor?.identifier !== 'URIType')
        throw new TypeError('Invalid value for SpecialValueType for ClientpidmapProperty. The second item in the array should be of type URIType');

        this.value = value.reduce((accumulated, current) => {
          return accumulated ? `${accumulated};${current.repr()}` : current.repr();
        }, '');

        this.valueXML = value.reduce((accumulated, current) => accumulated + current.reprXML(), '');

        break;
      default:
        throw new InvalidArgument('Invalid target property for SpecialValueType');
    }
  }

  constructor(value, targetProp) {
    super();

    this.#validateAndSet(value, targetProp);
    this.targetProp = targetProp.toUpperCase();

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

Object.freeze(SpecialValueType);
