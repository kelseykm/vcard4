import { BaseParameter } from "./BaseParameter.js";
import { MissingArgument } from "../errors/index.js";

export class LabelParameter extends BaseParameter {
  static param = "LABEL";
  static identifier = "LabelParameter";

  #labelValue;

  get value() {
    return this.#labelValue.repr();
  }

  get valueXML() {
    return this.#labelValue.reprXML();
  }

  get valueJSON() {
    return ["text", this.#labelValue._unsafe_raw_value];
  }

  #validate(labelValue) {
    if (typeof labelValue === "undefined")
      throw new MissingArgument("Value for LabelParameter must be supplied");
    else if (labelValue.constructor.identifier !== "ParameterValueType")
      throw new TypeError(
        "Value for LabelParameter should be of type ParameterValueType"
      );
  }

  constructor(labelValue) {
    super();

    this.#validate(labelValue);
    this.#labelValue = labelValue;

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

Object.freeze(LabelParameter);
