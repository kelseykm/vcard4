import { BaseParameter } from "./BaseParameter.js";
import { MissingArgument, InvalidArgument } from "../errors/index.js";

export class PIDParameter extends BaseParameter {
  static param = "PID";
  static identifier = "PIDParameter";

  #pidValue;
  #pidRegExp = /^\d+(?:\.\d+)?$/;

  get value() {
    return Array.isArray(this.#pidValue)
      ? this.#pidValue
          .map((val) => {
            if (Array.isArray(val))
              return val.map((innerVal) => innerVal.repr()).join(".");
            return val.repr();
          })
          .join(",")
      : this.#pidValue.repr();
  }

  get valueXML() {
    const xml = Array.isArray(this.#pidValue)
      ? this.#pidValue
          .map((val) => {
            if (Array.isArray(val))
              return (
                "<integer>" +
                val.map((innerVal) => innerVal.repr()).join(".") +
                "</integer>"
              );

            return val.reprXML();
          })
          .join("")
      : this.#pidValue.reprXML();

    return xml.replaceAll("integer", "text");
  }

  get valueJSON() {
    return Array.isArray(this.#pidValue)
      ? [
          "integer",
          ...this.#pidValue.map((val) => {
            if (Array.isArray(val))
              return Number(val.map((innerVal) => innerVal.repr()).join("."));
            return val.reprJSON().pop();
          }),
        ]
      : this.#pidValue.reprJSON();
  }

  #validate(pidValue) {
    if (typeof pidValue === "undefined")
      throw new MissingArgument("Value for PIDParameter must be supplied");
    else if (
      !Array.isArray(pidValue) &&
      pidValue.constructor.identifier !== "IntegerType"
    )
      throw new InvalidArgument("Invalid value for PIDParameter");
    else if (
      Array.isArray(pidValue) &&
      !pidValue.every((val1) => {
        if (Array.isArray(val1))
          return (
            val1.length === 2 &&
            val1.every((val2) => val2.constructor.identifier === "IntegerType")
          );
        return val1.constructor.identifier === "IntegerType";
      })
    )
      throw new InvalidArgument("Invalid value for PIDParameter");
  }

  constructor(pidValue) {
    super();

    this.#validate(pidValue);
    this.#pidValue = pidValue;

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

Object.freeze(PIDParameter);
