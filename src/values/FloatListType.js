import { BaseValue } from "./BaseValue.js";
import { MissingArgument } from "../errors/index.js";

export class FloatListType extends BaseValue {
  static type = "FLOAT";
  static identifier = "FloatListType";

  #floatlist;

  get value() {
    return this.#floatlist
      .reduce((accumulatedFloatTypes, currentFloatType) => {
        accumulatedFloatTypes.push(currentFloatType.repr());
        return accumulatedFloatTypes;
      }, [])
      .join(",");
  }

  get valueXML() {
    return this.#floatlist.reduce(
      (accumulatedFloatTypes, currentFloatType) =>
        accumulatedFloatTypes + currentFloatType.reprXML(),
      ""
    );
  }

  get valueJSON() {
    const value = this.#floatlist.reduce(
      (accumulatedFloatTypes, currentFloatType) => {
        accumulatedFloatTypes.push(currentFloatType.reprJSON().pop());
        return accumulatedFloatTypes;
      },
      []
    );

    value.unshift(this.constructor.type.toLowerCase());

    return value;
  }

  #validate(floatlist) {
    if (typeof floatlist === "undefined")
      throw new MissingArgument("Value for FloatListType must be supplied");
    else if (!Array.isArray(floatlist))
      throw new TypeError(
        "Value of FloatListType should be passed in an array"
      );

    for (const float of floatlist) {
      if (float.constructor.identifier !== "FloatType")
        throw new TypeError(
          "Value of FloatListType should be an array of FloatTypes"
        );
    }
  }

  constructor(floatlist) {
    super();

    this.#validate(floatlist);
    this.#floatlist = floatlist;

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

Object.freeze(FloatListType);
