import { URIType } from '../values/URIType.js';

declare class GeoParameter {
  readonly value: string;
  readonly valueXML: string;
  readonly valueJSON: string[];
  repr(): string;
  reprXML(): string;
  reprJSON(): Record<string, string | string[]>;
  constructor(geoValue: URIType);
}

export { GeoParameter };
