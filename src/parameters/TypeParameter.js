import { BaseParameter } from "./BaseParameter.js";
import { MissingArgument, InvalidArgument } from "../errors/index.js";

export class TypeParameter extends BaseParameter {
  static param = "TYPE";
  static identifier = "TypeParameter";

  #typeValue;

  get value() {
    return Array.isArray(this.#typeValue)
      ? `"${this.#typeValue
          .map((val) => val.repr())
          .join(",")
          .replaceAll('"', "")}"`
      : this.#typeValue.repr();
  }

  get valueXML() {
    return Array.isArray(this.#typeValue)
      ? this.#typeValue.map((val) => val.reprXML()).join("")
      : this.#typeValue.reprXML();
  }

  get valueJSON() {
    return Array.isArray(this.#typeValue)
      ? ["text", ...this.#typeValue.map((val) => val._unsafe_raw_value)]
      : this.#typeValue.reprJSON();
  }

  #typeRegExp = /^(?:work|home|x-[a-z0-9-]+)$/i;

  #telTypeRegExp = /^(?:text|voice|fax|cell|video|pager|textphone|main)$/i;

  #relatedTypeRegExp =
    /(?:contact|acquaintance|friend|met|co-worker|colleague|co-resident|neighbor|child|parent|sibling|spouse|kin|muse|crush|date|sweetheart|me|agent|emergency)/i;

  #validate(typeValue, targetProp) {
    if (typeof typeValue === "undefined" || typeof targetProp === "undefined")
      throw new MissingArgument(
        "Value and target property for TypeParameter must be supplied"
      );
    else if (
      !(
        !Array.isArray(typeValue) &&
        typeValue.constructor.identifier === "ParameterValueType"
      ) &&
      !(
        Array.isArray(typeValue) &&
        typeValue.every(
          (val) => val.constructor.identifier === "ParameterValueType"
        )
      )
    )
      throw new TypeError(
        "Value for TypeParameter must be of type ParameterValueType or an array of ParameterValueTypes"
      );

    const telre = new RegExp(
      `(?:${this.#telTypeRegExp.source}|${this.#typeRegExp.source})`,
      "i"
    );
    const relatedre = new RegExp(
      `(?:${this.#relatedTypeRegExp.source}|${this.#typeRegExp.source})`,
      "i"
    );

    switch (true) {
      case /^TelProperty$/i.test(targetProp):
        if (
          !(!Array.isArray(typeValue) && telre.test(typeValue.repr())) &&
          !(
            Array.isArray(typeValue) &&
            typeValue.every((type) => telre.test(type.repr()))
          )
        )
          throw new InvalidArgument(
            "Invalid value for TypeParameter for TelProperty"
          );

        break;
      case /^RelatedProperty$/i.test(targetProp):
        if (
          !(!Array.isArray(typeValue) && relatedre.test(typeValue.repr())) &&
          !(
            Array.isArray(typeValue) &&
            typeValue.every((type) => relatedre.test(type.repr()))
          )
        )
          throw new InvalidArgument(
            "Invalid value for TypeParameter for RelatedProperty"
          );

        break;
      default:
        if (
          !(
            !Array.isArray(typeValue) && this.#typeRegExp.test(typeValue.repr())
          ) &&
          !(
            Array.isArray(typeValue) &&
            typeValue.every((type) => this.#typeRegExp.test(type.repr()))
          )
        )
          throw new InvalidArgument("Invalid value for TypeParameter");
    }
  }

  constructor(typeValue, targetProp) {
    super();

    this.#validate(typeValue, targetProp);
    this.#typeValue = typeValue;

    this.targetProp = targetProp.toUpperCase();

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

Object.freeze(TypeParameter);
