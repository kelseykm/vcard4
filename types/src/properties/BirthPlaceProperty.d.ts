import { 
  ValueParameter,
  AltidParameter,
  LanguageParameter,
  AnyParameter
} from '../parameters/index';
import { TextType, URIType } from '../values/index';

export class BirthPlaceProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (ValueParameter | LanguageParameter | AltidParameter | AnyParameter)[], 
    val: TextType | URIType
  );
}
