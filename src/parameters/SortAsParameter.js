import { BaseParameter } from "./BaseParameter.js";
import { MissingArgument } from "../errors/index.js";

export class SortAsParameter extends BaseParameter {
  static param = "SORT-AS";
  static identifier = "SortAsParameter";

  #sortValue;

  get value() {
    return Array.isArray(this.#sortValue)
      ? `"${this.#sortValue
          .map((val) => val.repr())
          .join(",")
          .replaceAll('"', "")}"`
      : this.#sortValue.repr();
  }

  get valueXML() {
    return Array.isArray(this.#sortValue)
      ? this.#sortValue.map((val) => val.reprXML()).join("")
      : this.#sortValue.reprXML();
  }

  get valueJSON() {
    return Array.isArray(this.#sortValue)
      ? ["text", ...this.#sortValue.map((val) => val._unsafe_raw_value)]
      : this.#sortValue.reprJSON();
  }

  #validate(sortValue) {
    if (typeof sortValue === "undefined")
      throw new MissingArgument("Value for SortAsParameter must be supplied");
    else if (
      !(
        !Array.isArray(sortValue) &&
        sortValue.constructor.identifier === "ParameterValueType"
      ) &&
      !(
        Array.isArray(sortValue) &&
        sortValue.every(
          (val) => val.constructor.identifier === "ParameterValueType"
        )
      )
    )
      throw new TypeError(
        "Value for SortAsParameter must be of type ParameterValueType or an array of ParameterValueTypes"
      );
  }

  constructor(sortValue) {
    super();

    this.#validate(sortValue);
    this.#sortValue = sortValue;

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

Object.freeze(SortAsParameter);
