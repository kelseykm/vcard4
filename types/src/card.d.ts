import {
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
  KeyProperty,
  FburlProperty,
  CaladruriProperty,
  CaluriProperty,
  ExtendedProperty
} from './properties/index';

import { Group } from './group'

export class VCARD {
  repr(): string;
  reprXML(): string;
  reprJSON(): {}[];
  constructor(props: (Group | SourceProperty | KindProperty | XMLProperty | FNProperty | NProperty | NicknameProperty | PhotoProperty | BdayProperty | AnniversaryProperty | GenderProperty | BirthPlaceProperty | DeathPlaceProperty | DeathDateProperty | ExpertiseProperty | HobbyProperty | InterestProperty | AdrProperty | TelProperty | EmailProperty | IMPPProperty | LangProperty | ContactURIProperty | TzProperty | GeoProperty | TitleProperty | RoleProperty | LogoProperty | OrgProperty | MemberProperty | RelatedProperty | OrgDirectoryProperty | CategoriesProperty | NoteProperty | ProdidProperty | RevProperty | SoundProperty | UIDProperty | ClientpidmapProperty | URLProperty | KeyProperty | FburlProperty | CaladruriProperty | CaluriProperty | ExtendedProperty)[]);
}
