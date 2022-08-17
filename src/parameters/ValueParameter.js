import { BaseParameter } from "./BaseParameter.js";
import { MissingArgument, InvalidArgument } from "../errors/index.js";

export class ValueParameter extends BaseParameter {
  static param = "VALUE";
  static identifier = "ValueParameter";

  #valueType;

  get value() {
    const type = this.#valueType.type || this.#valueType.constructor.type;
    return type.toLowerCase();
  }

  get valueXML() {
    return "";
  }

  get valueJSON() {
    return [];
  }

  #validate(valueType) {
    if (typeof valueType === "undefined")
      throw new MissingArgument("Value for ValueParameter must be supplied");

    if (
      !Object.prototype.hasOwnProperty.call(valueType, "type") &&
      !Object.prototype.hasOwnProperty.call(valueType.constructor, "type")
    )
      throw new InvalidArgument("Value for ValueParameter not recognized");
  }

  constructor(valueType) {
    super();

    this.#validate(valueType);
    this.#valueType = valueType;

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

Object.freeze(ValueParameter);
