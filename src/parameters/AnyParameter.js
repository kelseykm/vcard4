import { BaseParameter } from "./BaseParameter.js";
import { MissingArgument, InvalidArgument } from "../errors/index.js";

export class AnyParameter extends BaseParameter {
  static identifier = "AnyParameter";

  #value;
  #param;

  get param() {
    return `${this.#param}`;
  }

  get value() {
    return this.#cleanUp(this.#value.repr());
  }

  get valueXML() {
    return this.#value.reprXML();
  }

  get valueJSON() {
    return this.#value.reprJSON();
  }

  #paramRegExp =
    /^(?:A-GNSS|A-GPS|AOA|best-guess|Cell|CHARSET|DBH|DBH_HELO|Derived|Device-Assisted_A-GPS|Device-Assisted_EOTD|Device-Based_A-GPS|Device-Based_EOTD|DHCP|E-CID|ELS-BLE|ELS-WiFi|GNSS|GPS|Handset_AFLT|Handset_EFLT|Hybrid_A-GPS|hybridAGPS_AFLT|hybridCellSector_AGPS|hybridTDOA_AOA|hybridTDOA_AGPS|hybridTDOA_AGPS_AOA|IPDL|LLDP-MED|Manual|MBS|MPL|NEAD-BLE|NEAD-WiFi|networkRFFingerprinting|networkTDOA|networkTOA|NMR|OTDOA|RFID|RSSI|RSSI-RTT|RTT|TA|TA-NMR|Triangulation|UTDOA|Wiremap|802\.11|x-[A-Za-z0-9]+)$/i;

  #valueRegExp =
    /^(?:Boolean|DateTime(?:List)?|Float(?:List)?|Integer(?:List)?|LanguageTag|Sex|SpecialValue|Text(?:List)?|URI)Type$/;

  #cleanUp(value) {
    return value
      .replaceAll("^", "^^")
      .replaceAll("\n", "^n")
      .replaceAll('"', "^’");
  }

  #validate(param, value) {
    if (typeof param === "undefined" || typeof value === "undefined")
      throw new MissingArgument(
        "Parameter name and value for AnyParameter must be supplied"
      );
    else if (!this.#paramRegExp.test(param))
      throw new InvalidArgument("Invalid parameter name for AnyParameter");
    else if (!this.#valueRegExp.test(value?.constructor?.identifier))
      throw new InvalidArgument("Invalid value for AnyParameter");
  }

  constructor(param, value) {
    super();

    this.#validate(param, value);
    this.#param = param;
    this.#value = value;

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

Object.freeze(AnyParameter);
