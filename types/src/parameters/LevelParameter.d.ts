import { TextType } from '../values/index';

export class LevelParameter {
  readonly value: string;
  repr(): string;
  constructor(levelValue: TextType, targetProp: string);
}
