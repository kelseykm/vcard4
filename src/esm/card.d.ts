import {
  BeginProperty,
  EndProperty,
  SourceProperty,
  KindProperty,
  XMLProperty,
  FNProperty,
  NProperty,
  NicknameProperty,
  PhotoProperty,
  BdayProperty,
  AnniversaryProperty,
  GenderProperty,
  BirthPlaceProperty,
  DeathPlaceProperty,
  DeathDateProperty,
  ExpertiseProperty,
  HobbyProperty,
  InterestProperty,
  AdrProperty,
  TelProperty,
  EmailProperty,
  IMPPProperty,
  LangProperty,
  ContactURIProperty,
  TzProperty,
  GeoProperty,
  TitleProperty,
  RoleProperty,
  LogoProperty,
  OrgProperty,
  MemberProperty,
  RelatedProperty,
  OrgDirectoryProperty,
  CategoriesProperty,
  NoteProperty,
  ProdidProperty,
  RevProperty,
  SoundProperty,
  UIDProperty,
  ClientpidmapProperty,
  URLProperty,
  VersionProperty,
  KeyProperty,
  FburlProperty,
  CaladruriProperty,
  CaluriProperty,
  ExtendedProperty
} from './properties';

declare type PropsList = (BeginProperty | EndProperty | SourceProperty | KindProperty | XMLProperty | FNProperty | NProperty | NicknameProperty | PhotoProperty | BdayProperty | AnniversaryProperty | GenderProperty | BirthPlaceProperty | DeathPlaceProperty | DeathDateProperty | ExpertiseProperty | HobbyProperty | InterestProperty | AdrProperty | TelProperty | EmailProperty | IMPPProperty | LangProperty | ContactURIProperty | TzProperty | GeoProperty | TitleProperty | RoleProperty | LogoProperty | OrgProperty | MemberProperty | RelatedProperty | OrgDirectoryProperty | CategoriesProperty | NoteProperty | ProdidProperty | RevProperty | SoundProperty | UIDProperty | ClientpidmapProperty | URLProperty | VersionProperty | KeyProperty | FburlProperty | CaladruriProperty | CaluriProperty | ExtendedProperty)[];

export default class VCARD {
  value: string;
  props: PropsList;
  repr(): string;
  constructor(props: PropsList);
}
