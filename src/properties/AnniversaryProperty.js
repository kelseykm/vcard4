import { BaseProperty } from "./BaseProperty.js";
import { MissingArgument, InvalidArgument } from "../errors/index.js";

export class AnniversaryProperty extends BaseProperty {
  static identifier = "AnniversaryProperty";
  static prop = "ANNIVERSARY";
  static cardinality = "*1";
  static acceptableParamTypes = new Set([
    "ValueParameter",
    "AltidParameter",
    "CalscaleParameter",
    "AnyParameter",
  ]);
  static acceptableValTypes = new Set(["DateTimeType", "TextType"]);

  #params;
  #value;

  get params() {
    return this.#params
      .reduce((parametersArray, currentParameter) => {
        parametersArray.push(currentParameter.repr());
        return parametersArray;
      }, [])
      .join(";");
  }

  get paramsXML() {
    return this.#params.reduce(
      (accumulatedParameters, currentParameter) =>
        accumulatedParameters + currentParameter.reprXML(),
      ""
    );
  }

  get paramsJSON() {
    return this.#params.reduce(
      (accumulatedParameters, currentParameter) => ({
        ...currentParameter.reprJSON(),
        ...accumulatedParameters,
      }),
      {}
    );
  }

  get valueJSON() {
    return this.#value.reprJSON();
  }

  get value() {
    return this.#value.repr();
  }

  get valueXML() {
    return this.#value.reprXML();
  }

  #validate(params, value) {
    if (typeof params === "undefined" || typeof value === "undefined")
      throw new MissingArgument(
        "Parameters and value for AnniversaryProperty must be supplied"
      );
    else if (!Array.isArray(params))
      throw new InvalidArgument(
        "Parameters for AnniversaryProperty must be passed in an array"
      );

    const parameterInstanceCount = new Set();

    if (
      !params.every((param) => {
        if (param.constructor.identifier !== "AnyParameter") {
          if (parameterInstanceCount.has(param.constructor.identifier))
            throw new InvalidArgument(
              "Parameters must not have more than one instance supplied"
            );
          else parameterInstanceCount.add(param.constructor.identifier);
        } else {
          if (parameterInstanceCount.has(param.param))
            throw new InvalidArgument(
              "Parameters must not have more than one instance supplied"
            );
          else parameterInstanceCount.add(param.param);
        }

        if (param.constructor.identifier === "ValueParameter")
          return (
            (param.value === "date-and-or-time" &&
              value.constructor.identifier === "DateTimeType") ||
            (param.value === "text" &&
              value.constructor.identifier === "TextType")
          );
        else if (param.constructor.identifier === "LanguageParameter")
          return value.constructor.identifier === "TextType";
        else if (param.constructor.identifier === "CalscaleParameter")
          return value.constructor.identifier === "DateTimeType";

        return this.constructor.acceptableParamTypes.has(
          param.constructor.identifier
        );
      })
    )
      throw new TypeError(
        "Some of the parameters passed are not valid parameters for AnniversaryProperty"
      );
    else if (
      !this.constructor.acceptableValTypes.has(value.constructor.identifier) ||
      (value.constructor.identifier === "DateTimeType" &&
        value.type !== "DATE-AND-OR-TIME")
    )
      throw new TypeError("Invalid type for value of AnniversaryProperty");
  }

  constructor(params, val) {
    super();

    this.#validate(params, val);
    this.#params = params;
    this.#value = val;

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

Object.freeze(AnniversaryProperty);
