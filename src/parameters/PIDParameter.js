import { BaseParameter } from './BaseParameter.js';
import { MissingArgument, InvalidArgument } from '../errors/index.js';
import { IntegerType } from '../values/index.js';

export class PIDParameter extends BaseParameter {
  static param = 'PID';

  #pidRegExp = /^\d+(?:\.\d+)?$/;

  #validate(pidValue) {
    if (typeof pidValue === 'undefined')
    throw new MissingArgument('Value for PIDParameter must be supplied');

    else if (
      !Array.isArray(pidValue) &&
      !(pidValue instanceof IntegerType)
    )
    throw new InvalidArgument('Invalid value for PIDParameter');

    else if (
      Array.isArray(pidValue) &&
      !pidValue.every(val1 => {
        if (Array.isArray(val1))
        return val1.every(
          val2 => val2 instanceof IntegerType
        );
        return val1 instanceof IntegerType;
      })
    )
    throw new InvalidArgument('Invalid value for PIDParameter');
  }

  constructor(pidValue) {
    super();

    this.#validate(pidValue);
    this.value = Array.isArray(pidValue) ?

    `${pidValue.reduce((accumulatedTypes, currentType) => {
      if (Array.isArray(currentType)) {
        accumulatedTypes.push(
          currentType.reduce((accumType, currType) => {
            accumType.push(currType.repr());
            return accumType;
          }, []).join('.')
        );
      }
      else accumulatedTypes.push(currentType.repr());

      return accumulatedTypes;
    }, []).join(',')}` :

    pidValue.repr();

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}

Object.freeze(PIDParameter);
