import { IntegerType } from '../values/index';

export class IndexParameter {
  readonly value: string;
  repr(): string;
  constructor(indexValue: IntegerType);
}
