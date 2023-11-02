import { BaseParameter } from './BaseParameter.js';
import { URIType } from '../values/URIType.js';
import '../values/BaseValue.js';

/**
 * Represents the "GEO" parameter
 * Used to specify information related to the global positioning of the object
 * the vCard represents.
 */
declare class GeoParameter extends BaseParameter {
  /**
   * @param geoValue - The "geo" URI scheme [RFC5870] is particularly well
   * suited for this property, but other schemes may be used.
   */
  constructor(geoValue: URIType);
}

export { GeoParameter };
