import { MissingArgument, InvalidArgument } from './errors/index.js';

import {
  BeginProperty,
  EndProperty,
  VersionProperty,
} from './properties/index.js';

export class VCARD {
  static cardinalityOneProps = new Set([
    'BEGIN',
    'END',
    'VERSION'
  ]);

  static cardinalityOneOrMoreProps = new Set(['FN']);

  static cardinalityNoneOrOneProps = new Set([
    'ANNIVERSARY',
    'BDAY',
    'GENDER',
    'BIRTHPLACE',
    'DEATHPLACE',
    'DEATHDATE',
    'KIND',
    'N',
    'PRODID',
    'REV',
    'UID'
  ]);

  static cardinalityNoLimitProps = new Set([
    'ADR',
    'CALADRURI',
    'CALURI',
    'CATEGORIES',
    'CLIENTPIDMAP',
    'EMAIL',
    'EXTENDEDPROPERTY',
    'FBURL',
    'GEO',
    'IMPP',
    'KEY',
    'LANG',
    'LOGO',
    'MEMBER',
    'NICKNAME',
    'NOTE',
    'ORG',
    'PHOTO',
    'EXPERTISE',
    'HOBBY',
    'INTEREST',
    'CONTACTURI',
    'RELATED',
    'ORG-DIRECTORY',
    'ROLE',
    'SOUND',
    'SOURCE',
    'TEL',
    'TITLE',
    'TZ',
    'URL',
    'XML'
  ]);

  repr() {
    return this.value;
  }

  #assemble() {
    const CRLF = '\r\n';

    this.value = '';
    this.value += new BeginProperty().repr() + CRLF;
    this.value += new VersionProperty().repr() + CRLF;

    this.value += this.props.reduce((accumulatedProps, currentProp) => {
      accumulatedProps.push(currentProp.repr());
      return accumulatedProps;
    }, []).join(CRLF) + CRLF;

    this.value += new EndProperty().repr() + CRLF;
  }

  #validate(props) {
    if (typeof props === 'undefined')
    throw new MissingArgument('Properties for VCARD must be supplied');

    else if (!Array.isArray(props))
    throw new InvalidArgument('Properties for VCARD must be passed in an array');

    const propertyInstanceCount = new Map([
      ['BEGIN', 0],
      ['VERSION', 0],
      ['END', 0],
      ['FN', 0],
      ['ANNIVERSARY', 0],
      ['BDAY', 0],
      ['GENDER', 0],
      ['BIRTHPLACE', 0],
      ['DEATHPLACE', 0],
      ['DEATHDATE', 0],
      ['KIND', 0],
      ['N', 0],
      ['PRODID', 0],
      ['REV', 0],
      ['UID', 0]
    ]);
    let hasMemberProperty = false;
    let kindPropertyIsGroup = false;
    
    for (const prop of props) {
      switch(prop.constructor.prop) {
        case 'MEMBER':
          hasMemberProperty = true;
          break;

        case 'KIND':
          if (/^group$/i.test(prop.value))
          kindPropertyIsGroup = true;
      }

      if (!propertyInstanceCount.has(prop.constructor.prop))
        continue

      let count = propertyInstanceCount.get(prop.constructor.prop);
      count++;
      propertyInstanceCount.set(prop.constructor.prop, count);

      if (this.constructor.cardinalityOneProps.has(prop.constructor.prop))
      throw new InvalidArgument('BeginProperty, VersionProperty and EndProperty instances must not be supplied');

      else if (
        this.constructor.cardinalityNoneOrOneProps.has(prop.constructor.prop) &&
        count > 1
      )
      throw new InvalidArgument('AnniversaryProperty, BdayProperty, GenderProperty, KindProperty, NProperty, ProdidProperty, RevProperty and UIDProperty must not have more than one instance supplied');
    }

    if (propertyInstanceCount.get('FN') < 1)
    throw new MissingArgument('One or more FNProperty instances must be supplied');

    else if (hasMemberProperty && !kindPropertyIsGroup)
    throw new InvalidArgument('MemberProperty should only be used if the value of the KindProperty is "group"')
  }

  constructor(props) {
    this.#validate(props);
    this.props = props;
    this.#assemble();

    Object.freeze(this);
  }
}

Object.freeze(VCARD);
