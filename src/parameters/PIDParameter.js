import { BaseParameter } from "./BaseParameter.js";
import { MissingArgument, InvalidArgument } from "../errors/index.js";

export class PIDParameter extends BaseParameter {
  static param = "PID";
  static identifier = "PIDParameter";

  #pidValue;
  #pidRegExp = /^\d+(?:\.\d+)?$/;

  get value() {
    return Array.isArray(this.#pidValue)
      ? `${this.#pidValue
          .reduce((accumulatedTypes, currentType) => {
            if (Array.isArray(currentType)) {
              accumulatedTypes.push(
                currentType
                  .reduce((accumType, currType) => {
                    accumType.push(currType.repr());
                    return accumType;
                  }, [])
                  .join(".")
              );
            } else accumulatedTypes.push(currentType.repr());

            return accumulatedTypes;
          }, [])
          .join(",")}`
      : this.#pidValue.repr();
  }

  get valueXML() {
    const xml = Array.isArray(this.#pidValue)
      ? `${this.#pidValue
          .reduce((accumulatedTypes, currentType) => {
            if (Array.isArray(currentType)) {
              accumulatedTypes.push(
                "<integer>" +
                  currentType
                    .reduce((accumType, currType) => {
                      accumType.push(currType.repr());
                      return accumType;
                    }, [])
                    .join(".") +
                  "</integer>"
              );
            } else accumulatedTypes.push(currentType.reprXML());

            return accumulatedTypes;
          }, [])
          .join("")}`
      : this.#pidValue.reprXML();

    return xml.replaceAll("integer", "text");
  }

  get valueJSON() {
    if (Array.isArray(this.#pidValue)) {
      const json = this.#pidValue.reduce((accumulatedTypes, currentType) => {
        if (Array.isArray(currentType)) {
          accumulatedTypes.push(
            currentType
              .reduce((accumType, currType) => {
                accumType.push(currType.repr());
                return accumType;
              }, [])
              .join(".")
          );
        } else accumulatedTypes.push(currentType.repr());

        return accumulatedTypes;
      }, []);

      json.unshift("integer");

      return json;
    }

    return this.#pidValue.reprJSON();
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
          return val1.every(
            (val2) => val2.constructor.identifier === "IntegerType"
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
