import { FloatType } from './FloatType';

export class FloatListType {
  readonly value: string;
  repr(): string;
  constructor(floatlist: FloatType[]);
}
