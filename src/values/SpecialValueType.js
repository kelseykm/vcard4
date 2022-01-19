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
        this.valueJSON = [ this.constructor.type.toLowerCase(), value ];

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
        this.valueJSON = [];

        for (let index = 0; index < value.length; index++)
        switch (index) {
          case 0:
            if (!value[index]) {
              this.valueXML += '<surname/>';
              this.valueJSON[index] = '';
            }
            else {
              this.valueXML += value[index].reprXML().replaceAll('text>', 'surname>');
              this.valueJSON[index] = value[index].reprJSON().pop();
            }

            break;
          case 1:
            if (!value[index]) {
              this.valueXML += '<given/>';
              this.valueJSON[index] = '';
            }
            else {
              this.valueXML += value[index].reprXML().replaceAll('text>', 'given>');
              this.valueJSON[index] = value[index].reprJSON().pop();
            }

            break;
          case 2:
            if (!value[index]) {
              this.valueXML += '<additional/>';
              this.valueJSON[index] = '';
            }
            else {
              this.valueXML += value[index].reprXML().replaceAll('text>', 'additional>');
              this.valueJSON[index] = value[index].reprJSON().pop();
            }

            break;
          case 3:
            if (!value[index]) {
              this.valueXML += '<prefix/>';
              this.valueJSON[index] = '';
            }
            else {
              this.valueXML += value[index].reprXML().replaceAll('text>', 'prefix>');
              this.valueJSON[index] = value[index].reprJSON().pop();
            }

            break;
          case 4:
            if (!value[index]) {
              this.valueXML += '<suffix/>';
              this.valueJSON[index] = '';
            }
            else {
              this.valueXML += value[index].reprXML().replaceAll('text>', 'suffix>');
              this.valueJSON[index] = value[index].reprJSON().pop();
            }
        }

        this.valueJSON = [
          this.constructor.type.toLowerCase(),
          this.valueJSON
        ];

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

        this.valueJSON = value.reduce((accumulated, current) => {
          accumulated.push(
            current.reprJSON().pop()
          );
          return accumulated;
        }, []);

        if (this.valueJSON.length === 1)
        this.valueJSON.unshift(this.constructor.type.toLowerCase());
        else this.valueJSON = [ this.constructor.type.toLowerCase(), this.valueJSON ];

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
        this.valueJSON = [];

        for (let index = 0; index < value.length; index++)
        switch (index) {
          case 0:
            if (!value[index]) {
              this.valueXML += '<pobox/>';
              this.valueJSON[index] = '';
            }
            else {
              this.valueXML += value[index].reprXML().replaceAll('text>', 'pobox>');
              this.valueJSON[index] = value[index].reprJSON().pop();
            }

            break;
          case 1:
            if (!value[index]) {
              this.valueXML += '<ext/>';
              this.valueJSON[index] = '';
            }
            else {
              this.valueXML += value[index].reprXML().replaceAll('text>', 'ext>');
              this.valueJSON[index] = value[index].reprJSON().pop();
            }

            break;
          case 2:
            if (!value[index]) {
              this.valueXML += '<street/>';
              this.valueJSON[index] = '';
            }
            else {
              this.valueXML += value[index].reprXML().replaceAll('text>', 'street>');
              this.valueJSON[index] = value[index].reprJSON().pop();
            }

            break;
          case 3:
            if (!value[index]) {
              this.valueXML += '<locality/>';
              this.valueJSON[index] = '';
            }
            else {
              this.valueXML += value[index].reprXML().replaceAll('text>', 'locality>');
              this.valueJSON[index] = value[index].reprJSON().pop();
            }

            break;
          case 4:
            if (!value[index]) {
              this.valueXML += '<region/>';
              this.valueJSON[index] = '';
            }
            else {
              this.valueXML += value[index].reprXML().replaceAll('text>', 'region>');
              this.valueJSON[index] = value[index].reprJSON().pop();
            }

            break;
          case 5:
            if (!value[index]) {
              this.valueXML += '<code/>';
              this.valueJSON[index] = '';
            }
            else {
              this.valueXML += value[index].reprXML().replaceAll('text>', 'code>');
              this.valueJSON[index] = value[index].reprJSON().pop();
            }

            break;
          case 6:
            if (!value[index]) {
              this.valueXML += '<country/>';
              this.valueJSON[index] = '';
            }
            else {
              this.valueXML += value[index].reprXML().replaceAll('text>', 'country>');
              this.valueJSON[index] = value[index].reprJSON().pop();
            }
        }

        this.valueJSON = [
          this.constructor.type.toLowerCase(),
          this.valueJSON
        ];

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

        this.valueJSON = value.reduce((accumulated, current) => {
          accumulated.push(
            current.reprJSON().pop()
          );
          return accumulated;
        }, []);

        if (this.valueJSON.length === 1)
        this.valueJSON.unshift(this.constructor.type.toLowerCase());
        else this.valueJSON = [ this.constructor.type.toLowerCase(), this.valueJSON ];

        break;
      case /^ClientpidmapProperty$/i.test(targetProp):
        if (
          !Array.isArray(value) &&
          (value.length !== 2)
        )
        throw new InvalidArgument('Invalid value for SpecialValueType for ClientpidmapProperty. It should be an array with a length of 2');

        else if (value[0]?.constructor?.identifier !== 'IntegerType')
        throw new TypeError('Invalid value for SpecialValueType for ClientpidmapProperty. The first item in the array should be of type IntegerType');

        else if (0 >= Number(value[0].repr()))
        throw new InvalidArgument('Invalid value for SpecialValueType for ClientpidmapProperty. The first item in the array should be a positive integer of type IntegerType. Zero is not allowed')

        else if (value[1]?.constructor?.identifier !== 'URIType')
        throw new TypeError('Invalid value for SpecialValueType for ClientpidmapProperty. The second item in the array should be of type URIType');

        this.value = value.reduce((accumulated, current) => {
          return accumulated ? `${accumulated};${current.repr()}` : current.repr();
        }, '');

        this.valueXML = value.reduce((accumulated, current) => accumulated + current.reprXML(), '');

        this.valueJSON = [
          'unknown',
          value.reduce((accumulated, current) => {
            accumulated.push(
              current.reprJSON().pop()
            );
            return accumulated;
          }, [])
        ]

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
