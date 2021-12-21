import { IntegerType } from './IntegerType';

export class IntegerListType {
  readonly value: string;
  repr(): string;
  constructor(integerlist: IntegerType[]);
}
