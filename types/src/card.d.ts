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
} from './properties/index';

declare type PropsList = (BeginProperty | EndProperty | SourceProperty | KindProperty | XMLProperty | FNProperty | NProperty | NicknameProperty | PhotoProperty | BdayProperty | AnniversaryProperty | GenderProperty | BirthPlaceProperty | DeathPlaceProperty | DeathDateProperty | ExpertiseProperty | HobbyProperty | InterestProperty | AdrProperty | TelProperty | EmailProperty | IMPPProperty | LangProperty | ContactURIProperty | TzProperty | GeoProperty | TitleProperty | RoleProperty | LogoProperty | OrgProperty | MemberProperty | RelatedProperty | OrgDirectoryProperty | CategoriesProperty | NoteProperty | ProdidProperty | RevProperty | SoundProperty | UIDProperty | ClientpidmapProperty | URLProperty | VersionProperty | KeyProperty | FburlProperty | CaladruriProperty | CaluriProperty | ExtendedProperty)[];

export class VCARD {
  readonly value: string;
  readonly props: PropsList;
  repr(): string;
  constructor(props: PropsList);
}
