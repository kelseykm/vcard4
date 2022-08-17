import { BaseValue } from "./BaseValue.js";
import { MissingArgument, InvalidArgument } from "../errors/index.js";

export class SexType extends BaseValue {
  static type = "TEXT";
  static identifier = "SexType";

  #sexRegExp = /^[MFONU]$/;
  #sexValue;

  #validate(sexValue) {
    if (typeof sexValue === "undefined")
      throw new MissingArgument("Value for SEXType must be supplied");
    else if (!this.#sexRegExp.test(sexValue))
      throw new InvalidArgument("Invalid sex");
  }

  get value() {
    return this.#sexValue;
  }

  get valueXML() {
    return `<sex>${this.#sexValue}</sex>`;
  }

  get valueJSON() {
    return [this.constructor.type.toLowerCase(), this.#sexValue];
  }

  constructor(sexValue) {
    super();

    this.#validate(sexValue);
    this.#sexValue = sexValue;

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

Object.freeze(SexType);
