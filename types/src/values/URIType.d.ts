import { BaseValue } from "./BaseValue";

/**
 * Represents the "uri" data type
 */
export class URIType extends BaseValue {
  reprJSON(): [string, string];
  /**
   * @param uriValue -  Should be formatted as a URI as defined in Section 3 of
   * RFC 3986
   *
   * @example
   * http://www.example.com/my/picture.jpg
   * ldap://ldap.example.com/cn=babs%20jensen
   */
  constructor(uriValue: string);
}
