declare class BaseProperty {
  /**
   * @returns Representation of how the property type will appear in the vCard.
   */
  repr(): string;
  /**
   * @returns Representation of how the property type will appear in the XML
   * vCard.
   */
  reprXML(): string;
  /**
   * @returns Representation of how the property type will appear in the jCard.
   */
  reprJSON(): {}[];
}

export { BaseProperty };
