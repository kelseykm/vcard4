import { BaseValue } from "./BaseValue.js";
import { MissingArgument, InvalidArgument } from "../errors/index.js";

export class URIType extends BaseValue {
  static type = "URI";
  static identifier = "URIType";

  #uriValue;

  #validate(uriValue) {
    if (typeof uriValue === "undefined")
      throw new MissingArgument("Value for URIType must be supplied");
    else if (typeof uriValue !== "string")
      throw new TypeError("Value for URIType should be of type string");
    else if (!URL.canParse(uriValue))
      throw new InvalidArgument("Invalid URI");
  }

  get value() {
    return this.#uriValue;
  }

  get valueXML() {
    return `<${this.constructor.type.toLowerCase()}>${
      this.#uriValue
    }</${this.constructor.type.toLowerCase()}>`;
  }

  get valueJSON() {
    return [this.constructor.type.toLowerCase(), this.#uriValue];
  }

  constructor(uriValue) {
    super();

    this.#validate(uriValue);
    this.#uriValue = uriValue;

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

Object.freeze(URIType);
