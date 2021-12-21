import { 
  ValueParameter,
  AltidParameter,
  LanguageParameter,
  AnyParameter
} from '../parameters/index';
import { TextType, URIType } from '../values/index';

export class DeathPlaceProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (LanguageParameter | ValueParameter | AltidParameter | AnyParameter)[],
    val: TextType | URIType
  );
}
