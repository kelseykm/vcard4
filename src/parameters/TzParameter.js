import { BaseParameter } from "./BaseParameter.js";
import { MissingArgument } from "../errors/index.js";

export class TzParameter extends BaseParameter {
  static param = "TZ";
  static identifier = "TzParameter";

  #tzValue;

  get value() {
    return this.#tzValue.constructor.identifier === "URIType"
      ? `"${this.#tzValue.repr()}"`
      : this.#tzValue.repr();
  }

  get valueXML() {
    return this.#tzValue.reprXML();
  }

  get valueJSON() {
    return this.#tzValue.reprJSON();
  }

  #validate(tzValue) {
    if (typeof tzValue === "undefined")
      throw new MissingArgument("Value for TzParameter must be supplied");

    if (
      tzValue.constructor.identifier !== "ParameterValueType" &&
      tzValue.constructor.identifier !== "URIType" &&
      !(
        tzValue.constructor.identifier === "DateTimeType" &&
        tzValue.type === "UTC-OFFSET"
      )
    )
      throw new TypeError("Invalid type for value for TzParameter");
  }

  constructor(tzValue) {
    super();

    this.#validate(tzValue);
    this.#tzValue = tzValue;

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

Object.freeze(TzParameter);
