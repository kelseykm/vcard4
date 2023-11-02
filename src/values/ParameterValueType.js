import { BaseValue } from "./BaseValue.js";
import { MissingArgument, InvalidArgument } from "../errors/index.js";

export class ParameterValueType extends BaseValue {
  static type = "TEXT";
  static identifier = "ParameterValueType";

  #parameterValue;

  #validate(parameterValue) {
    if (typeof parameterValue === "undefined" || parameterValue === "")
      throw new MissingArgument(
        "Value for ParameterValueType must be supplied"
      );
    else if (typeof parameterValue !== "string")
      throw new TypeError(
        "Only type string allowed for ParameterValueType value"
      );
    else if (/[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]/.test(parameterValue)) {
      throw new InvalidArgument("Value includes forbidden characters");
    }
  }

  #cleanUp(parameterValue) {
    return parameterValue
      .replaceAll("^", "^^")
      .replaceAll("\n", "^n")
      .replaceAll('"', "^’");
  }

  #cleanUpXML(parameterValue) {
    return parameterValue
      .replaceAll("&", "&amp;")
      .replaceAll(">", "&gt;")
      .replaceAll("<", "&lt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&apos;");
  }

  get value() {
    const cleanVal = this.#cleanUp(this.#parameterValue);

    return /[:;]/.test(cleanVal) ? `"${cleanVal}"` : cleanVal;
  }

  get valueXML() {
    return `<${this.constructor.type.toLowerCase()}>${this.#cleanUpXML(
      this.#parameterValue
    )}</${this.constructor.type.toLowerCase()}>`;
  }

  get valueJSON() {
    return [this.constructor.type.toLowerCase(), this.#parameterValue];
  }

  get _unsafe_raw_value() {
    return this.#parameterValue;
  }

  constructor(parameterValue) {
    super();
    this.#validate(parameterValue);
    this.#parameterValue = parameterValue;

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

Object.freeze(ParameterValueType);
