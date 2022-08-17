import { BaseValue } from "./BaseValue.js";
import { MissingArgument } from "../errors/index.js";

export class DateTimeListType extends BaseValue {
  static identifier = "DateTimeListType";

  #datetimelist;

  get value() {
    return this.#datetimelist
      .reduce((accumulatedDateTimeTypes, currentDateTimeType) => {
        accumulatedDateTimeTypes.push(currentDateTimeType.repr());
        return accumulatedDateTimeTypes;
      }, [])
      .join(",");
  }

  get valueXML() {
    return this.#datetimelist.reduce(
      (accumulatedDateTimeTypes, currentDateTimeType) =>
        accumulatedDateTimeTypes + currentDateTimeType.reprXML(),
      ""
    );
  }

  get valueJSON() {
    const value = this.#datetimelist.reduce(
      (accumulatedIntegerTypes, currentIntegerType) => {
        accumulatedIntegerTypes.push(currentIntegerType.reprJSON().pop());
        return accumulatedIntegerTypes;
      },
      []
    );

    value.unshift(this.type.toLowerCase());

    return value;
  }

  #validate(datetimelist) {
    if (typeof datetimelist === "undefined")
      throw new MissingArgument("Value for DateTimeListType must be supplied");
    else if (!Array.isArray(datetimelist))
      throw new TypeError(
        "Value for DateTimeListType should be passed in an array"
      );

    const conformType = datetimelist[0]["type"];

    for (const datetime of datetimelist) {
      if (datetime.type !== conformType)
        throw new TypeError(
          "Value for DateTimeListType should be an array of DateTimeTypes of the same type"
        );
      else if (datetime.type === "UTC-OFFSET")
        throw new TypeError("Invalid type for value of DateTimeListType");
      else if (datetime.constructor.identifier !== "DateTimeType")
        throw new TypeError(
          "Value for DateTimeListType should be an array of DateTimeTypes"
        );
    }
  }

  constructor(datetimelist) {
    super();

    this.#validate(datetimelist);
    this.#datetimelist = datetimelist;
    this.type = datetimelist[0]["type"];

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

Object.freeze(DateTimeListType);
