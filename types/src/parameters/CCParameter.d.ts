import { TextType } from '../values/index';

export class CCParameter {
  readonly value: string;
  repr(): string;
  constructor(ccValue: TextType);
}
