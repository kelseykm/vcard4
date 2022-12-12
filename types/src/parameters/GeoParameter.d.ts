import { URIType } from "../values/index";
import { BaseParameter } from "./BaseParameter";

/**
 * Represents the "GEO" parameter
 * Used to specify information related to the global positioning of the object
 * the vCard represents.
 */
export class GeoParameter extends BaseParameter {
  /**
   * @param geoValue - The "geo" URI scheme [RFC5870] is particularly well
   * suited for this property, but other schemes may be used.
   */
  constructor(geoValue: URIType);
}
