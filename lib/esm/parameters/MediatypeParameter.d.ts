import { BaseParameter } from './BaseParameter.js';
import { ParameterValueType } from '../values/ParameterValueType.js';
import '../values/BaseValue.js';

/**
 * Represents the "MEDIATYPE" parameter
 * Used with properties whose value is a URI where it provides a hint to the
 * vCard consumer application about the media type [RFC2046] of the resource
 * identified by the URI.
 */
declare class MediatypeParameter extends BaseParameter {
  /**
   * @param mediaValue - either an instance of `ParameterValueType` specifying the media
   * type and subtype, or an array of length 2, whose first item is an instance
   * of `ParameterValueType` specifying the media type and subtype, and whose second item
   * is also an instance of `ParameterValueType` specifying the media attribute and values
   * The media type and subtype ParameterValueType value should be of the format
   * `type-name "/" subtype-name`, while the attribute and value `ParameterValueType` should
   * be of the format `attribute "=" value`
   *
   * @example
   * ```
   * new MediatypeParameter(new ParameterValueType("audio/mp3"));
   *
   * new MediatypeParameter([
   *   new ParameterValueType("text/html"),
   *   new ParameterValueType("charset=UTF-8"),
   * ]);
   * ```
   */
  constructor(mediaValue: ParameterValueType | ParameterValueType[]);
}

export { MediatypeParameter };
