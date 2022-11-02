import { Group } from './group.js';
import { SourceProperty } from './properties/SourceProperty.js';
import { KindProperty } from './properties/KindProperty.js';
import { XMLProperty } from './properties/XMLProperty.js';
import { FNProperty } from './properties/FNProperty.js';
import { NProperty } from './properties/NProperty.js';
import { NicknameProperty } from './properties/NicknameProperty.js';
import { PhotoProperty } from './properties/PhotoProperty.js';
import { BdayProperty } from './properties/BdayProperty.js';
import { AnniversaryProperty } from './properties/AnniversaryProperty.js';
import { GenderProperty } from './properties/GenderProperty.js';
import { BirthPlaceProperty } from './properties/BirthPlaceProperty.js';
import { DeathPlaceProperty } from './properties/DeathPlaceProperty.js';
import { DeathDateProperty } from './properties/DeathDateProperty.js';
import { ExpertiseProperty } from './properties/ExpertiseProperty.js';
import { HobbyProperty } from './properties/HobbyProperty.js';
import { InterestProperty } from './properties/InterestProperty.js';
import { AdrProperty } from './properties/AdrProperty.js';
import { TelProperty } from './properties/TelProperty.js';
import { EmailProperty } from './properties/EmailProperty.js';
import { IMPPProperty } from './properties/IMPPProperty.js';
import { LangProperty } from './properties/LangProperty.js';
import { ContactURIProperty } from './properties/ContactURIProperty.js';
import { TzProperty } from './properties/TzProperty.js';
import { GeoProperty } from './properties/GeoProperty.js';
import { TitleProperty } from './properties/TitleProperty.js';
import { RoleProperty } from './properties/RoleProperty.js';
import { LogoProperty } from './properties/LogoProperty.js';
import { OrgProperty } from './properties/OrgProperty.js';
import { MemberProperty } from './properties/MemberProperty.js';
import { RelatedProperty } from './properties/RelatedProperty.js';
import { OrgDirectoryProperty } from './properties/OrgDirectoryProperty.js';
import { CategoriesProperty } from './properties/CategoriesProperty.js';
import { NoteProperty } from './properties/NoteProperty.js';
import { ProdidProperty } from './properties/ProdidProperty.js';
import { RevProperty } from './properties/RevProperty.js';
import { SoundProperty } from './properties/SoundProperty.js';
import { UIDProperty } from './properties/UIDProperty.js';
import { ClientpidmapProperty } from './properties/ClientpidmapProperty.js';
import { URLProperty } from './properties/URLProperty.js';
import { KeyProperty } from './properties/KeyProperty.js';
import { FburlProperty } from './properties/FburlProperty.js';
import { CaladruriProperty } from './properties/CaladruriProperty.js';
import { CaluriProperty } from './properties/CaluriProperty.js';
import { ExtendedProperty } from './properties/ExtendedProperty.js';
import './parameters/ValueParameter.js';
import './values/TextType.js';
import './values/TextListType.js';
import './values/BooleanType.js';
import './values/DateTimeType.js';
import './values/DateTimeListType.js';
import './values/IntegerType.js';
import './values/IntegerListType.js';
import './values/FloatType.js';
import './values/FloatListType.js';
import './values/LanguageTagType.js';
import './values/URIType.js';
import './values/SexType.js';
import './values/SpecialValueType.js';
import './parameters/PIDParameter.js';
import './parameters/PrefParameter.js';
import './parameters/IndexParameter.js';
import './parameters/AltidParameter.js';
import './parameters/MediatypeParameter.js';
import './parameters/AnyParameter.js';
import './parameters/TypeParameter.js';
import './parameters/LanguageParameter.js';
import './parameters/SortAsParameter.js';
import './parameters/CalscaleParameter.js';
import './parameters/LevelParameter.js';
import './parameters/GeoParameter.js';
import './parameters/TzParameter.js';
import './parameters/LabelParameter.js';
import './parameters/CCParameter.js';

declare class VCARD {
  repr(): string;
  reprXML(): string;
  reprJSON(): {}[];
  constructor(
    props: (
      | Group
      | SourceProperty
      | KindProperty
      | XMLProperty
      | FNProperty
      | NProperty
      | NicknameProperty
      | PhotoProperty
      | BdayProperty
      | AnniversaryProperty
      | GenderProperty
      | BirthPlaceProperty
      | DeathPlaceProperty
      | DeathDateProperty
      | ExpertiseProperty
      | HobbyProperty
      | InterestProperty
      | AdrProperty
      | TelProperty
      | EmailProperty
      | IMPPProperty
      | LangProperty
      | ContactURIProperty
      | TzProperty
      | GeoProperty
      | TitleProperty
      | RoleProperty
      | LogoProperty
      | OrgProperty
      | MemberProperty
      | RelatedProperty
      | OrgDirectoryProperty
      | CategoriesProperty
      | NoteProperty
      | ProdidProperty
      | RevProperty
      | SoundProperty
      | UIDProperty
      | ClientpidmapProperty
      | URLProperty
      | KeyProperty
      | FburlProperty
      | CaladruriProperty
      | CaluriProperty
      | ExtendedProperty
    )[]
  );
}

export { VCARD };
