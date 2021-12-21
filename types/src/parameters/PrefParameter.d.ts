import { IntegerType } from '../values/index';

export class PrefParameter {
  readonly value: string;
  repr(): string;
  constructor(prefValue: IntegerType);
}
