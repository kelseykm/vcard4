import {
  MissingArgument,
  InvalidArgument,
  InvalidVcard
} from '../errors/index.js';

export class Parser {
  static identifier = 'Parser';
  static knownProperties = new Set([
    'BEGIN',
    'VERSION',
    'END',
    'SOURCE',
    'KIND',
    'XML',
    'FN',
    'N',
    'NICKNAME',
    'PHOTO',
    'BDAY',
    'ANNIVERSARY',
    'GENDER',
    'BIRTHPLACE',
    'DEATHPLACE',
    'DEATHDATE',
    'EXPERTISE',
    'HOBBY',
    'INTEREST',
    'ADR',
    'TEL',
    'EMAIL',
    'IMPP',
    'LANG',
    'CONTACT-URI',
    'TZ',
    'GEO',
    'TITLE',
    'ROLE',
    'LOGO',
    'ORG',
    'MEMBER',
    'RELATED',
    'ORG-DIRECTORY',
    'CATEGORIES',
    'NOTE',
    'PRODID',
    'REV',
    'SOUND',
    'UID',
    'CLIENTPIDMAP',
    'URL',
    'KEY',
    'FBURL',
    'CALADRURI',
    'CALURI'
  ]);
  static knownParameters = new Set([
    'LANGUAGE',
    'VALUE',
    'PREF',
    'ALTID',
    'PID',
    'TYPE',
    'MEDIATYPE',
    'CALSCALE',
    'SORTAS',
    'GEO',
    'TZ',
    'LABEL',
    'CC',
    'INDEX',
    'LEVEL'
  ]);

  #tokenizedVcard;

  #validateTokenizedVcard(tokenizedVcard) {
    if (typeof tokenizedVcard === 'undefined')
    throw new MissingArgument('Tokenized vCard to be parsed must be supplied');

    else if (!Array.isArray(tokenizedVcard))
    throw new TypeError('Tokenized vCard to be parsed must be an array');

    const relevantPropCount = new Map([
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

    for (const token of tokenizedVcard) {
      let count = 0;
      if (relevantPropCount.has(token.property)) {
        count = relevantPropCount.get(token.property);
        count++;
        relevantPropCount.set(token.property, count);
      }

      if (
        !this.constructor.knownProperties.has(token.property) &&
        !token.property.startsWith('X-')
      )
      throw new InvalidVcard(`vCard has unknown property: ${token.property}`);

      else if (
        token.property === 'VERSION' &&
        token.value !== '4.0'
      )
      throw new InvalidArgument(`Unsupported vCard version: ${token.value}`);

      for (const parameter of Object.keys(token.parameters)) {
        if (
          !this.constructor.knownParameters.has(parameter) &&
          !parameter.startsWith('X-')
        )
        throw new InvalidVcard(`vCard has unknown parameter: ${parameter}, on ${token.property} property`);
      }
    }

    for (const prop of relevantPropCount.keys()) {
      switch (prop) {
        case 'BEGIN':
        case 'VERSION':
        case 'END':
          if (relevantPropCount.get(prop) !== 1)
          throw new InvalidVcard('vCard must have one of each BEGIN, VERSION and END properties')
          break;

        case 'FN':
          if (relevantPropCount.get(prop) < 1)
          throw new InvalidVcard('vCard must have at least one FN property')
          break;

        default:
          if (relevantPropCount.get(prop) > 1)
          throw new InvalidVcard('vCard must not have more than one ANNIVERSARY, BDAY, GENDER, BIRTHPLACE, DEATHPLACE, DEATHDATE, KIND, N, PRODID, REV or UID property')
      }
    }
  }

  #removeUnnecessaryFields(tokenizedVcard) {
    return tokenizedVcard.filter(
      token => (
        token.property !== 'BEGIN' &&
        token.property !== 'VERSION' &&
        token.property !== 'END'
      )
    );
  }

  #parseToken(token) {
    let _parsedToken;

    switch (token.property) {
      case 'N':
        _parsedToken = {...token};
        _parsedToken['value'] = {
          familyNames: token.value[0],
          givenNames: token.value[1],
          additionalNames: token.value[2],
          honorificPrefixes: token.value[3],
          honorificSuffixes: token.value[4],
        };
        return _parsedToken;

      case 'ADR':
        _parsedToken = {...token};
        _parsedToken['value'] = {
          postOfficeBox: token.value[0],
          extendedAddress: token.value[1],
          streetAddress: token.value[2],
          locality: token.value[3],
          region: token.value[4],
          postalCode: token.value[5],
          countryName: token.value[6],
        };
        return _parsedToken;

      case 'GENDER':
        _parsedToken = {...token};
        if (Array.isArray(token.value))
        _parsedToken['value'] = {
          sex: token.value[0],
          gender: token.value[1],
        };
        else _parsedToken['value'] = {
          sex: token.value,
          gender: '',
        };
        return _parsedToken;
    }

    return token;
  }

  get parsed() {
    const _parsedTokens = [];
    for (const token of this.#tokenizedVcard)
    _parsedTokens.push(this.#parseToken(token));

    return {
      parsedVcard: _parsedTokens,
      get properties() {
        return Array.from(new Set(_parsedTokens.reduce((accumulated, current) => {
          accumulated.push(current.property);
          return accumulated;
        }, [])));
      },
      get propertiesWithoutParameters() {
        return _parsedTokens.filter(parsedToken => Object.keys(parsedToken.parameters).length === 0);
      },
      get propertiesWithParameters() {
        return _parsedTokens.filter(parsedToken => Object.keys(parsedToken.parameters).length > 0);
      },
      get groups() {
        return Array.from(new Set(_parsedTokens.reduce((accumulated, current) => {
          current.group && accumulated.push(current.group);
          return accumulated;
        }, [])));
      },
      getGroup(group = '') {
        return _parsedTokens.filter(parsedToken => parsedToken.group === group);
      },
      get repeatingProperties() {
        const _repeatingProperties = {};
        const propertiesCount = new Map();

        _parsedTokens.forEach(parsedToken => {
          if (propertiesCount.has(parsedToken.property)) {
            let count = propertiesCount.get(parsedToken.property);
            count++;
            propertiesCount.set(parsedToken.property, count);
          }
          else propertiesCount.set(parsedToken.property, 1);
        });

        for (const property of propertiesCount.keys()) {
          const count = propertiesCount.get(property);
          if (count > 1)
          _repeatingProperties[property] = count;
        }

        return _repeatingProperties;
      },
    };
  }

  constructor(tokenizedVcard) {
    this.#validateTokenizedVcard(tokenizedVcard);
    this.#tokenizedVcard = this.#removeUnnecessaryFields(tokenizedVcard);

    Object.freeze(this);
  }
}

Object.freeze(Parser);
