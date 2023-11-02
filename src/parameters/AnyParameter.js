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
    return this.#value.repr();
  }

  get valueXML() {
    return this.#value.reprXML();
  }

  get valueJSON() {
    return this.#value.reprJSON();
  }

  #paramRegExp = /^x-[a-z0-9-]+$/i;

  #validate(param, value) {
    if (typeof param === "undefined" || typeof value === "undefined")
      throw new MissingArgument(
        "Parameter name and value for AnyParameter must be supplied"
      );
    else if (!this.#paramRegExp.test(param))
      throw new InvalidArgument("Invalid parameter name for AnyParameter");
    else if (value.constructor.identifier !== "ParameterValueType")
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
