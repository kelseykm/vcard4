import { BaseParameter } from "./BaseParameter.js";
import { MissingArgument, InvalidArgument } from "../errors/index.js";

export class CCParameter extends BaseParameter {
  static param = "CC";
  static identifier = "CCParameter";

  #ccValue;

  get value() {
    return this.#ccValue.repr();
  }

  get valueXML() {
    return this.#ccValue.reprXML();
  }

  get valueJSON() {
    return this.#ccValue.reprJSON();
  }

  #validate(ccValue) {
    if (typeof ccValue === "undefined")
      throw new MissingArgument("Value for CCParameter must be supplied");
    else if (
      ccValue.constructor.identifier !== "ParameterValueType" ||
      !/^[A-Za-z0-9]{2}$/.test(ccValue.repr())
    )
      throw new InvalidArgument("Invalid value for CCParameter");
  }

  constructor(ccValue) {
    super();

    this.#validate(ccValue);
    this.#ccValue = ccValue;

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

Object.freeze(CCParameter);
