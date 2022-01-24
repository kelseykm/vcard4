import { 
  ValueParameter,
  AltidParameter,
  LanguageParameter,
  AnyParameter
} from '../parameters/index';
import { TextType, URIType } from '../values/index';

export class DeathPlaceProperty {
  readonly params: string;
  readonly paramsXML: string;
  readonly paramsJSON: {};
  readonly value: string;
  readonly valueXML: string;
  readonly valueJSON: {}[];
  repr(): string;
  reprXML(): string;
  reprJSON(): {}[];
  constructor(
    params: (LanguageParameter | ValueParameter | AltidParameter | AnyParameter)[],
    val: TextType | URIType
  );
}
