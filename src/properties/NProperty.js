import { BaseProperty } from "./BaseProperty.js";
import { MissingArgument, InvalidArgument } from "../errors/index.js";

export class NProperty extends BaseProperty {
  static identifier = "NProperty";
  static prop = "N";
  static cardinality = "*1";
  static acceptableParamTypes = new Set([
    "ValueParameter",
    "SortAsParameter",
    "LanguageParameter",
    "AltidParameter",
    "AnyParameter",
  ]);
  static acceptableValTypes = "SpecialValueType";

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

  get value() {
    return this.#value.repr();
  }

  get valueXML() {
    return this.#value.reprXML();
  }

  get valueJSON() {
    return this.#value.reprJSON();
  }

  #validate(params, value) {
    if (typeof params === "undefined" || typeof value === "undefined")
      throw new MissingArgument(
        "Parameters and value for NProperty must be supplied"
      );
    else if (!Array.isArray(params))
      throw new InvalidArgument(
        "Parameters for NProperty must be passed in an array"
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
          return param.value === "text";

        return this.constructor.acceptableParamTypes.has(
          param.constructor.identifier
        );
      })
    )
      throw new TypeError(
        "Some of the parameters passed are not valid parameters for NProperty"
      );
    else if (
      value.constructor.identifier !== this.constructor.acceptableValTypes ||
      !/^NProperty$/i.test(value.targetProp)
    )
      throw new TypeError("Invalid type for value of NProperty");
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

Object.freeze(NProperty);
