import { BaseValue } from "./BaseValue.js";
import { MissingArgument, InvalidArgument } from "../errors/index.js";

export class LanguageTagType extends BaseValue {
  static type = "LANGUAGE-TAG";
  static identifier = "LanguageTagType";

  #langTagValue;

  #langTagRegexp =
    /^(?:[a-zA-Z]{2,3}(-[a-zA-Z]{3}){0,3})(-[0-9A-Za-z]+){0,3}(-x(-[0-9A-Za-z]{1,8})+)?(-[0-9A-WY-Za-wy-z]+)?(-[0-9A-Za-z]+)?$/;

  #MAX_LANGTAGVALUE_LEN = 255;

  #validate(langTagValue) {
    if (typeof langTagValue === "undefined")
      throw new MissingArgument("Value for LanguageTagType must be supplied");
    else if (typeof langTagValue !== "string")
      throw new TypeError("Value for LanguageTagType should be of type string");
    else if (langTagValue.length > this.#MAX_LANGTAGVALUE_LEN)
      throw new InvalidArgument(`Value for LanguageTagType must not exceed ${this.#MAX_LANGTAGVALUE_LEN} characters`)
    else if (!this.#langTagRegexp.test(langTagValue))
      throw new InvalidArgument("Invalid language tag");
  }

  get value() {
    return this.#langTagValue;
  }

  get valueXML() {
    return `<${this.constructor.type.toLowerCase()}>${
      this.#langTagValue
    }</${this.constructor.type.toLowerCase()}>`;
  }

  get valueJSON() {
    return [this.constructor.type.toLowerCase(), this.#langTagValue];
  }

  constructor(langTagValue) {
    super();

    this.#validate(langTagValue);
    this.#langTagValue = langTagValue;

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

Object.freeze(LanguageTagType);
