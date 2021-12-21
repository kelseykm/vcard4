import { IntegerType } from '../values/index';

export class PIDParameter {
  readonly value: string;
  repr(): string;
  constructor(pidValue: IntegerType | IntegerType[] | IntegerType[][]);
  constructor(pidValue: (IntegerType | IntegerType[])[]);
}
