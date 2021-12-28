import { BaseValue } from './BaseValue.js';
import { MissingArgument, InvalidArgument } from '../errors/index.js';

export class DateTimeType extends BaseValue {
  static identifier = 'DateTimeType';

  #dateRegExp = /^(?:(?:\d{4})|(?:(?:\d{4}(?:(?:(?:0[469]|11)(?:[0-2]\d|30))|(?:(?:0[13578]|1[02])(?:[0-2]\d|3[01]))))|(?:\d{2}(?:(?:(?:[02468][048]|[13579][26])(?:02)(?:[0-2]\d))|(?:(:?\d[13579]|[02468][26]|[13579][048])(?:02)(?:[0-2][0-8])))))|(?:-{2}(?:(?:(?:0[469]|11)(?:[0-2]\d|30)?)|(?:(?:0[13578]|1[02])(?:[0-2]\d|3[01])?)|(?:(?:02)(?:[0-2]\d)?)))|(?:-{3}(?:[0-2]\d|3[01]))|(?:\d{4}-(?:(?:0[1-9])|1[0-2])))$/;

  #timeRegExp = /^(?:(?:(?:(?:[01]\d)|(?:2[0-3]))(?:(?:[0-5]\d){1,2})?)|(?:-(?:[0-5]\d){1,2})|(?:-{2}[0-5]\d))(?:Z|(?:[+-]((?:[01]\d)|(?:2[0-3]))(?:[0-5]\d)?))?$/;

  #dateTimeRegExp = /^(?:(?:(?:\d{4}(?:(?:(?:0[469]|11)(?:[0-2]\d|30))|(?:(?:0[13578]|1[02])(?:[0-2]\d|3[01]))))|(?:\d{2}(?:(?:(?:[02468][048]|[13579][26])(?:02)(?:[0-2]\d))|(?:(:?\d[13579]|[02468][26]|[13579][048])(?:02)(?:[0-2][0-8])))))|(?:-{2}(?:(?:(?:0[469]|11)(?:[0-2]\d|30))|(?:(?:0[13578]|1[02])(?:[0-2]\d|3[01]))|(?:(?:02)(?:[0-2]\d))))|(?:-{3}(?:[0-2]\d|3[01])))(?:T)(?:(?:(?:(?:[01]\d)|(?:2[0-3]))(?:(?:[0-5]\d){1,2})?)(?:Z|(?:[+-]((?:[01]\d)|(?:2[0-3]))(?:[0-5]\d)?))?)$/;

  #dateAndOrTimeRegExp = new RegExp(`(?:${this.#dateRegExp.source}|${this.#timeRegExp.source.replace('^', '^T')}|${this.#dateTimeRegExp.source})`);

  #timestampRegExp = /^(?:(?:\d{4}(?:(?:(?:0[469]|11)(?:[0-2]\d|30))|(?:(?:0[13578]|1[02])(?:[0-2]\d|3[01]))))|(?:\d{2}(?:(?:(?:[02468][048]|[13579][26])(?:02)(?:[0-2]\d))|(?:(:?\d[13579]|[02468][26]|[13579][048])(?:02)(?:[0-2][0-8])))))(?:T)(?:(?:(?:(?:[01]\d)|(?:2[0-3]))(?:[0-5]\d){2})(?:Z|(?:[+-]((?:[01]\d)|(?:2[0-3]))(?:[0-5]\d)?))?)$/;

  #utcOffsetRegExp = /^(?:[+-]((?:[01]\d)|(?:2[0-3]))(?:[0-5]\d)?)$/;

  #validateAndSet(dateTimeValue, type) {
    if (typeof dateTimeValue === 'undefined' || typeof type === 'undefined')
    throw new MissingArgument('Value and type for DateTimeType must be supplied');

    else if (
      !/^(?:(?:date((?:andor)?(?:time))?)|(?:time(?:stamp)?)|(?:utcoffset))$/.test(type)
    )
    throw new InvalidArgument('Accepted values of type for DateTimeType are date, time, datetime, dateandortime, timestamp or utcoffset');

    switch (type) {
      case 'date':
        if (!this.#dateRegExp.test(dateTimeValue))
        throw new InvalidArgument('Invalid value for type date of DateTimeType');

        this.type = 'DATE';
        this.value = dateTimeValue.toString();
        break;
      case 'time':
        if (!this.#timeRegExp.test(dateTimeValue))
        throw new InvalidArgument('Invalid value for type time of DateTimeType');

        this.type = 'TIME';
        this.value = dateTimeValue.toString();
        break;
      case 'datetime':
        if (!this.#dateTimeRegExp.test(dateTimeValue))
        throw new InvalidArgument('Invalid value for type datetime of DateTimeType');

        this.type = 'DATE-TIME';
        this.value = dateTimeValue.toString();
        break;
      case 'dateandortime':
        if (!this.#dateAndOrTimeRegExp.test(dateTimeValue))
        throw new InvalidArgument('Invalid value for type dateandortime of DateTimeType');

        this.type = 'DATE-AND-OR-TIME';
        this.value = dateTimeValue.toString();
        break;
      case 'timestamp':
        if (!this.#timestampRegExp.test(dateTimeValue))
        throw new InvalidArgument('Invalid value for type timestamp of DateTimeType');

        this.type = 'TIMESTAMP';
        this.value = dateTimeValue.toString();
        break;
      case 'utcoffset':
        if (!this.#utcOffsetRegExp.test(dateTimeValue))
        throw new InvalidArgument('Invalid value for type utcoffset of DateTimeType');

        this.type = 'UTC-OFFSET';
        this.value = dateTimeValue.toString();
        break;
      default:
        throw new InvalidArgument('Accepted values for type property of type object for DateTimeType are date, time, datetime, dateandortime, timestamp or utcoffset');
    }
  }

  constructor(dateTimeValue, type) {
    super();
    this.#validateAndSet(dateTimeValue, type);

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

Object.freeze(DateTimeType);
