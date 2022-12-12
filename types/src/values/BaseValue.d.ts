export class BaseValue {
  /**
   * @returns Representation of how the value type will appear in the vCard.
   */
  repr(): string;
  /**
   * @returns Representation of how the value type will appear in the XML
   * vCard.
   */
  reprXML(): string;
  /**
   * @returns Representation of how the value type will appear in the jCard.
   */
  reprJSON(): {}[];
}
