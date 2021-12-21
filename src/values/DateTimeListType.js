import { AbstractBaseValue } from './AbstractBaseValue.js';
import { MissingArgument } from '../errors/index.js';
import { DateTimeType } from './DateTimeType.js';

export class DateTimeListType extends AbstractBaseValue {
  #validate(datetimelist) {
    if (typeof datetimelist === 'undefined')
    throw new MissingArgument('Value for DateTimeListType must be supplied');

    else if (!Array.isArray(datetimelist))
    throw new TypeError('Invalid type for value of DateTimeListType. It should be an array of FloatTypes');

    else if (
      !datetimelist.every(
        datetime => datetime instanceof DateTimeType
      )
    )
    throw new TypeError('Invalid type for value of DateTimeListType. It should be an array of DateTimeTypes');

    else if (
      !datetimelist.every(
        datetime => datetime.type === datetimelist[0].type
      )
    )
    throw new TypeError('Invalid type for value of DateTimeListType. It should be an array of DateTimeTypes of the same type');

    else if (
      datetimelist.some(
        datetime => datetime.type === 'UTC-OFFSET'
      )
    )
    throw new TypeError('Invalid type for value of DateTimeListType');
  }

  constructor(datetimelist) {
    super();

    this.#validate(datetimelist);
    this.value = datetimelist.reduce((accumulatedFloatTypes, currentFloatType) => {
      accumulatedFloatTypes.push(currentFloatType.repr());
      return accumulatedFloatTypes;
    }, []).join(',');
    this.type = datetimelist[0].type;

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}
