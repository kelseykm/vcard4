declare class BaseParameter {
  /**
   * @returns Representation of how the parameter will appear in the vCard
   */
  repr(): string;
  /**
   * @returns Representation of how the parameter will appear in the XML vCard
   */
  reprXML(): string;
  /**
   * @returns Representation of how the parameter will appear in the jCard
   */
  reprJSON(): Record<string, string | string[]>;
}

export { BaseParameter };
