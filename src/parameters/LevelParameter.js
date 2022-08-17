import { BaseParameter } from "./BaseParameter.js";
import { MissingArgument, InvalidArgument } from "../errors/index.js";

export class LevelParameter extends BaseParameter {
  static param = "LEVEL";
  static identifier = "LevelParameter";

  #expertiseRegExp = /^(?:beginner|average|expert)$/;
  #hobbyInterestRegExp = /^(?:high|medium|low)$/;
  #levelValue;

  get value() {
    return this.#levelValue.repr();
  }

  get valueXML() {
    return this.#levelValue.reprXML();
  }

  get valueJSON() {
    return this.#levelValue.reprJSON();
  }

  #validate(levelValue, targetProp) {
    if (typeof levelValue === "undefined" || typeof targetProp === "undefined")
      throw new MissingArgument(
        "Value and target property for LevelParameter must be supplied"
      );
    else if (levelValue.constructor.identifier !== "TextType")
      throw new InvalidArgument("Invalid value for LevelParameter");

    switch (true) {
      case /^expertiseProperty$/i.test(targetProp) &&
        this.#expertiseRegExp.test(levelValue.repr()):
        break;
      case /^(?:hobby|interest)Property$/i.test(targetProp) &&
        this.#hobbyInterestRegExp.test(levelValue.repr()):
        break;
      default:
        throw new InvalidArgument("Invalid value for LevelParameter");
    }
  }

  constructor(levelValue, targetProp) {
    super();

    this.#validate(levelValue, targetProp);
    this.#levelValue = levelValue;
    this.targetProp = targetProp.toUpperCase();

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

Object.freeze(LevelParameter);
