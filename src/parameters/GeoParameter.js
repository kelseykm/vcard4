import { BaseParameter } from "./BaseParameter.js";
import { MissingArgument } from "../errors/index.js";

export class GeoParameter extends BaseParameter {
  static param = "GEO";
  static identifier = "GeoParameter";

  #geoValue;

  get value() {
    return `"${this.#geoValue.repr()}"`;
  }

  get valueXML() {
    return this.#geoValue.reprXML();
  }

  get valueJSON() {
    return this.#geoValue.reprJSON();
  }

  #validate(geoValue) {
    if (typeof geoValue === "undefined")
      throw new MissingArgument("Value for GeoParameter must be supplied");
    else if (geoValue.constructor.identifier !== "URIType")
      throw new TypeError("Value for GeoParameter must be of type URIType");
  }

  constructor(geoValue) {
    super();

    this.#validate(geoValue);
    this.#geoValue = geoValue;

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

Object.freeze(GeoParameter);
