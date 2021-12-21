import { AbstractBaseParameter } from './AbstractBaseParameter.js';
import { MissingArgument, InvalidArgument } from '../errors/index.js';

export class AnyParameter extends AbstractBaseParameter {
  #paramRegExp = /^(?:A-GNSS|A-GPS|AOA|best-guess|Cell|DBH|DBH_HELO|Derived|Device-Assisted_A-GPS|Device-Assisted_EOTD|Device-Based_A-GPS|Device-Based_EOTD|DHCP|E-CID|ELS-BLE|ELS-WiFi|GNSS|GPS|Handset_AFLT|Handset_EFLT|Hybrid_A-GPS|hybridAGPS_AFLT|hybridCellSector_AGPS|hybridTDOA_AOA|hybridTDOA_AGPS|hybridTDOA_AGPS_AOA|IPDL|LLDP-MED|Manual|MBS|MPL|NEAD-BLE|NEAD-WiFi|networkRFFingerprinting|networkTDOA|networkTOA|NMR|OTDOA|RFID|RSSI|RSSI-RTT|RTT|TA|TA-NMR|Triangulation|UTDOA|Wiremap|802\.11|x-[A-Za-z0-9]+)$/i;

  #cleanUp(value) {
    return value.replaceAll('^', '^^').replaceAll('\n', '^n').replaceAll('"', '^’');
  }

  #validate(param, value) {
    if (typeof param === 'undefined' || typeof value === 'undefined')
    throw new MissingArgument('Parameter name and value for AnyParameter must be supplied');

    else if (!this.#paramRegExp.test(param))
    throw new InvalidArgument('Invalid parameter name for AnyParameter');
  }

  constructor(param, value) {
    super();

    this.#validate(param, value);
    this.param = param.toString();
    this.value = this.#cleanUp(value.toString());

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}
