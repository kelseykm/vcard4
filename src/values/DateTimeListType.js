import { BaseValue } from './BaseValue.js';
import { MissingArgument } from '../errors/index.js';

export class DateTimeListType extends BaseValue {
  static identifier = 'DateTimeListType';

  #validate(datetimelist) {
    if (typeof datetimelist === 'undefined')
    throw new MissingArgument('Value for DateTimeListType must be supplied');

    else if (!Array.isArray(datetimelist))
    throw new TypeError('Value for DateTimeListType should be passed in an array');

    const conformType = datetimelist[0]['type'];

    for (const datetime of datetimelist) {
      if (datetime.type !== conformType)
      throw new TypeError('Value for DateTimeListType should be an array of DateTimeTypes of the same type');

      else if (datetime.type === 'UTC-OFFSET')
      throw new TypeError('Invalid type for value of DateTimeListType');

      else if (!/^(?:(?:DATE((?:-AND-OR)?(?:-TIME))?)|(?:TIME(?:STAMP)?))$/.test(datetime.type))
      throw new TypeError('Value for DateTimeListType should be an array of DateTimeTypes');
    }
  }

  constructor(datetimelist) {
    super();

    this.#validate(datetimelist);
    this.value = datetimelist.reduce((accumulatedDateTimeTypes, currentDateTimeType) => {
      accumulatedDateTimeTypes.push(currentDateTimeType.repr());
      return accumulatedDateTimeTypes;
    }, []).join(',');
    this.type = datetimelist[0].type;

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

Object.freeze(DateTimeListType);
