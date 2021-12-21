import { TextType, IntegerType } from '../values/index';

export class AltidParameter {
  readonly value: string;
  repr(): string;
  constructor(altidValue: IntegerType | TextType);
}
