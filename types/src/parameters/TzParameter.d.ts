import { 
  DateTimeType,
  TextType,
  URIType
} from '../values/index';

export class TzParameter {
  readonly value: string;
  repr(): string;
  constructor(tzValue: TextType | URIType | DateTimeType);
}
