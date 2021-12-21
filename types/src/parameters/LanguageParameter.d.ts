import { LanguageTagType } from '../values/index';

export class LanguageParameter {
  readonly value: string;
  repr(): string;
  constructor(langTag: LanguageTagType);
}
