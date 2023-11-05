import { BaseValue } from "./BaseValue.js";
import { MissingArgument, InvalidArgument } from "../errors/index.js";

export class DateTimeType extends BaseValue {
  static identifier = "DateTimeType";

  #dateTimeValue;

  get value() {
    return `${this.#dateTimeValue}`;
  }

  get valueXML() {
    let tag = this.type.toLowerCase();
    const value = this.#dateTimeValue;

    if (tag === "date-and-or-time") {
      switch (true) {
        case this.#dateRegExp.test(value):
          tag = "date";
          break;
        case this.#timeRegExp.test(value):
          tag = "time";
          break;
        case this.#dateTimeRegExp.test(value):
          tag = "date-time";
          break;
      }
    }

    return `<${tag}>${value}</${tag}>`;
  }

  get valueJSON() {
    const type = this.type.toLowerCase();
    let value;

    function _extendDate(date) {
      if (/^\d{8}$/.test(date)) {
        date = [...date];
        date.splice(4, 0, "-");
        date.splice(7, 0, "-");
        return date.join("");
      } else if (/^-{2}\d{4}$/.test(date)) {
        date = [...date];
        date.splice(4, 0, "-");
        return date.join("");
      }

      return date;
    }

    function _extendTime(time) {
      const timeModified = [];

      for (let index = 0; index < time.length; index += 2) {
        if (!/^\d$/.test(time[index])) {
          timeModified.push(time[index]);
          index--;
          continue;
        }

        timeModified.push(time[index]);
        timeModified.push(time[index + 1]);
        /^\d$/.test(time[index + 2]) && timeModified.push(":");
      }

      return timeModified.join("");
    }

    switch (type) {
      case "date":
        value = _extendDate(this.#dateTimeValue);
        break;

      case "time":
        value = _extendTime(this.#dateTimeValue);
        break;

      case "date-time":
        value = this.#dateTimeValue.split("T");
        value = _extendDate(value[0]) + "T" + _extendTime(value[1]);

        break;

      case "date-and-or-time":
        if (this.#dateTimeValue.includes("T")) {
          value = this.#dateTimeValue.split("T");
          value = _extendDate(value[0]) + "T" + _extendTime(value[1]);
        } else value = _extendDate(this.#dateTimeValue);

        break;

      case "timestamp":
        value = this.#dateTimeValue.split("T");
        value = _extendDate(value[0]) + "T" + _extendTime(value[1]);

        break;

      case "utc-offset":
        value = _extendTime(this.#dateTimeValue);
    }

    return [type, value];
  }

  #dateRegExp =
    /^(?:(?:\d{4})|(?:(?:\d{4}(?:(?:(?:0[469]|11)(?:[0-2]\d|30))|(?:(?:0[13578]|1[02])(?:[0-2]\d|3[01]))))|(?:\d{2}(?:(?:(?:[02468][048]|[13579][26])(?:02)(?:[0-2]\d))|(?:(:?\d[13579]|[02468][26]|[13579][048])(?:02)(?:[0-2][0-8])))))|(?:-{2}(?:(?:(?:0[469]|11)(?:[0-2]\d|30)?)|(?:(?:0[13578]|1[02])(?:[0-2]\d|3[01])?)|(?:(?:02)(?:[0-2]\d)?)))|(?:-{3}(?:[0-2]\d|3[01]))|(?:\d{4}-(?:(?:0[1-9])|1[0-2])))$/;

  #timeRegExp =
    /^(?:(?:(?:(?:[01]\d)|(?:2[0-3]))(?:(?:[0-5]\d){1,2})?)|(?:-(?:[0-5]\d){1,2})|(?:-{2}[0-5]\d))(?:Z|(?:[+-]((?:[01]\d)|(?:2[0-3]))(?:[0-5]\d)?))?$/;

  #dateTimeRegExp =
    /^(?:(?:(?:\d{4}(?:(?:(?:0[469]|11)(?:[0-2]\d|30))|(?:(?:0[13578]|1[02])(?:[0-2]\d|3[01]))))|(?:\d{2}(?:(?:(?:[02468][048]|[13579][26])(?:02)(?:[0-2]\d))|(?:(:?\d[13579]|[02468][26]|[13579][048])(?:02)(?:[0-2][0-8])))))|(?:-{2}(?:(?:(?:0[469]|11)(?:[0-2]\d|30))|(?:(?:0[13578]|1[02])(?:[0-2]\d|3[01]))|(?:(?:02)(?:[0-2]\d))))|(?:-{3}(?:[0-2]\d|3[01])))(?:T)(?:(?:(?:(?:[01]\d)|(?:2[0-3]))(?:(?:[0-5]\d){1,2})?)(?:Z|(?:[+-]((?:[01]\d)|(?:2[0-3]))(?:[0-5]\d)?))?)$/;

  #dateAndOrTimeRegExp = new RegExp(
    `(?:${this.#dateRegExp.source}|${this.#timeRegExp.source.replace(
      "^",
      "^T"
    )}|${this.#dateTimeRegExp.source})`
  );

  #timestampRegExp =
    /^(?:(?:\d{4}(?:(?:(?:0[469]|11)(?:[0-2]\d|30))|(?:(?:0[13578]|1[02])(?:[0-2]\d|3[01]))))|(?:\d{2}(?:(?:(?:[02468][048]|[13579][26])(?:02)(?:[0-2]\d))|(?:(:?\d[13579]|[02468][26]|[13579][048])(?:02)(?:[0-2][0-8])))))(?:T)(?:(?:(?:(?:[01]\d)|(?:2[0-3]))(?:[0-5]\d){2})(?:Z|(?:[+-]((?:[01]\d)|(?:2[0-3]))(?:[0-5]\d)?))?)$/;

  #utcOffsetRegExp = /^(?:[+-]((?:[01]\d)|(?:2[0-3]))(?:[0-5]\d)?)$/;

  #validateAndSetType(type, dateTimeValue) {
    if (typeof dateTimeValue === "undefined" || typeof type === "undefined")
      throw new MissingArgument(
        "Value and type for DateTimeType must be supplied"
      );
    else if (
      !/^(?:(?:date((?:andor)?(?:time))?)|(?:time(?:stamp)?)|(?:utcoffset))$/.test(
        type
      )
    )
      throw new InvalidArgument(
        "Accepted values of type for DateTimeType are date, time, datetime, dateandortime, timestamp or utcoffset"
      );

    switch (type) {
      case "date":
        if (!this.#dateRegExp.test(dateTimeValue))
          throw new InvalidArgument(
            "Invalid value for type date of DateTimeType"
          );

        this.type = "DATE";
        break;
      case "time":
        if (!this.#timeRegExp.test(dateTimeValue))
          throw new InvalidArgument(
            "Invalid value for type time of DateTimeType"
          );

        this.type = "TIME";
        break;
      case "datetime":
        if (!this.#dateTimeRegExp.test(dateTimeValue))
          throw new InvalidArgument(
            "Invalid value for type datetime of DateTimeType"
          );

        this.type = "DATE-TIME";
        break;
      case "dateandortime":
        if (!this.#dateAndOrTimeRegExp.test(dateTimeValue))
          throw new InvalidArgument(
            "Invalid value for type dateandortime of DateTimeType"
          );

        this.type = "DATE-AND-OR-TIME";
        break;
      case "timestamp":
        if (!this.#timestampRegExp.test(dateTimeValue))
          throw new InvalidArgument(
            "Invalid value for type timestamp of DateTimeType"
          );

        this.type = "TIMESTAMP";
        break;
      case "utcoffset":
        if (!this.#utcOffsetRegExp.test(dateTimeValue))
          throw new InvalidArgument(
            "Invalid value for type utcoffset of DateTimeType"
          );

        this.type = "UTC-OFFSET";
        break;
      default:
        throw new InvalidArgument(
          "Accepted values for type property of type object for DateTimeType are date, time, datetime, dateandortime, timestamp or utcoffset"
        );
    }
  }

  constructor(type, dateTimeValue) {
    super();
    this.#validateAndSetType(type, dateTimeValue);
    this.#dateTimeValue = dateTimeValue;

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

Object.freeze(DateTimeType);
