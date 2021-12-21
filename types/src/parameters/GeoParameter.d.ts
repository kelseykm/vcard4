import { URIType } from '../values/index';

export class GeoParameter {
  readonly value: string;
  repr(): string;
  constructor(geoValue: URIType);
}
