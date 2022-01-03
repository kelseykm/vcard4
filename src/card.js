import { MissingArgument, InvalidArgument } from './errors/index.js';

export class VCARD {
  static cardinalityNoneOrOneProps = new Set([
    'AnniversaryProperty',
    'BdayProperty',
    'GenderProperty',
    'BirthplaceProperty',
    'DeathplaceProperty',
    'DeathdateProperty',
    'KindProperty',
    'NProperty',
    'ProdidProperty',
    'RevProperty',
    'UIDProperty'
  ]);

  repr() {
    return this.value;
  }

  #assemble() {
    const CRLF = '\r\n';

    this.value = '';
    this.value += 'BEGIN:VCARD' + CRLF;
    this.value += 'VERSION:4.0' + CRLF;

    this.value += this.props.reduce((accumulatedProps, currentProp) => {
      accumulatedProps.push(currentProp.repr());
      return accumulatedProps;
    }, []).join(CRLF) + CRLF;

    this.value += 'END:VCARD' + CRLF;
  }

  #validate(props) {
    if (typeof props === 'undefined')
    throw new MissingArgument('Properties for VCARD must be supplied');

    else if (!Array.isArray(props))
    throw new InvalidArgument('Properties for VCARD must be passed in an array');

    const propertyInstanceCount = new Map([
      ['FNProperty', 0],
      ['AnniversaryProperty', 0],
      ['BdayProperty', 0],
      ['GenderProperty', 0],
      ['BirthplaceProperty', 0],
      ['DeathplaceProperty', 0],
      ['DeathdateProperty', 0],
      ['KindProperty', 0],
      ['NProperty', 0],
      ['ProdidProperty', 0],
      ['RevProperty', 0],
      ['UIDProperty', 0]
    ]);
    let hasMemberProperty = false;
    let kindPropertyIsGroup = false;
    
    for (const prop of props) {
      switch(prop.constructor.identifier) {
        case 'MemberProperty':
          hasMemberProperty = true;
          break;

        case 'KindProperty':
          if (/^group$/i.test(prop.value))
          kindPropertyIsGroup = true;
          break;

        case 'BeginProperty':
        case 'VersionProperty':
        case 'EndProperty':
          throw new InvalidArgument('BeginProperty, VersionProperty and EndProperty instances must not be supplied');
      }

      if (!propertyInstanceCount.has(prop.constructor.identifier))
      continue;

      let count = propertyInstanceCount.get(prop.constructor.identifier);
      count++;
      propertyInstanceCount.set(prop.constructor.identifier, count);

      if (
        this.constructor.cardinalityNoneOrOneProps.has(prop.constructor.identifier) &&
        count > 1
      )
      throw new InvalidArgument('AnniversaryProperty, BdayProperty, GenderProperty, KindProperty, NProperty, ProdidProperty, RevProperty and UIDProperty must not have more than one instance supplied');
    }

    if (propertyInstanceCount.get('FNProperty') < 1)
    throw new MissingArgument('One or more FNProperty instances must be supplied');

    else if (hasMemberProperty && !kindPropertyIsGroup)
    throw new InvalidArgument('MemberProperty should only be used if the value of the KindProperty is "group"');
  }

  constructor(props) {
    this.#validate(props);
    this.props = props;
    this.#assemble();

    Object.freeze(this);
  }
}

Object.freeze(VCARD);
