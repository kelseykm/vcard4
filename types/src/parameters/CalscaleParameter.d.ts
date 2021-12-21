import { TextType } from '../values/index';

export class CalscaleParameter {
  readonly value: string;
  repr(): string;
  constructor(calscaleValue: TextType);
}
