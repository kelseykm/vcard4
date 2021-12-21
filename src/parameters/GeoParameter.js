import { BaseParameter } from './BaseParameter.js';
import { MissingArgument } from '../errors/index.js';
import { URIType } from '../values/index.js';

export class GeoParameter extends BaseParameter {
  static param = 'GEO';

  #validate(geoValue) {
    if (typeof geoValue === 'undefined')
    throw new MissingArgument('Value for GeoParameter must be supplied');

    else if (!(geoValue instanceof URIType))
    throw new TypeError('Value for GeoParameter must be of type URIType');
  }

  constructor(geoValue) {
    super();

    this.#validate(geoValue);
    this.value = `"${geoValue.repr()}"`;

    this.checkAbstractPropertiesAndMethods();
    Object.freeze(this);
  }
}
