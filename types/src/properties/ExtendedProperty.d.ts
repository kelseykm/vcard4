import { 
  LanguageParameter,
  SortAsParameter,
  AnyParameter,
  LabelParameter,
  GeoParameter,
  CalscaleParameter,
  MediatypeParameter,
  TypeParameter,
  LevelParameter,
  PrefParameter,
  PIDParameter,
  IndexParameter,
  AltidParameter,
  ValueParameter,
  TzParameter,
  CCParameter
} from '../parameters/index';
import { 
  BooleanType,
  TextType,
  TextListType,
  DateTimeType,
  IntegerType,
  SexType,
  LanguageTagType,
  URIType,
  FloatType,
  SpecialValueType
} from '../values/index';

export class ExtendedProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (LanguageParameter | ValueParameter | PrefParameter | AltidParameter | PIDParameter | TypeParameter | MediatypeParameter | CalscaleParameter | SortAsParameter | GeoParameter | TzParameter | AnyParameter | LabelParameter | CCParameter | IndexParameter | LevelParameter)[],
    val: TextType | TextListType | BooleanType | DateTimeType | IntegerType | FloatType | LanguageTagType | URIType | SexType | SpecialValueType
  );
}
