import { TextType } from '../values/index';

export class MediatypeParameter {
  readonly value: string;
  repr(): string;
  constructor(mediaValue: TextType | TextType[]);
}
