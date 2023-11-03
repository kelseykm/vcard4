import { MissingArgument, InvalidArgument } from "./errors/index.js";

export class VCARD {
  static cardinalityNoneOrOneProps = new Set([
    "AnniversaryProperty",
    "BdayProperty",
    "GenderProperty",
    "BirthPlaceProperty",
    "DeathPlaceProperty",
    "DeathDateProperty",
    "KindProperty",
    "NProperty",
    "ProdidProperty",
    "RevProperty",
    "UIDProperty",
  ]);

  #props;

  repr() {
    const CRLF = "\r\n";

    let value = "";
    value += "BEGIN:VCARD" + CRLF;
    value += "VERSION:4.0" + CRLF;

    value +=
      this.#props
        .reduce((accumulatedProps, currentProp) => {
          accumulatedProps.push(currentProp.repr());
          return accumulatedProps;
        }, [])
        .join(CRLF) + CRLF;

    value += "END:VCARD" + CRLF;

    return value;
  }

  reprXML() {
    let valueXML = "";
    valueXML += '<?xml version="1.0" encoding="UTF-8"?>';
    valueXML += '<vcards xmlns="urn:ietf:params:xml:ns:vcard-4.0">';
    valueXML += "<vcard>";

    valueXML += this.#props.reduce(
      (accumulatedParameters, currentParameter) =>
        accumulatedParameters + currentParameter.reprXML(),
      ""
    );

    valueXML += "</vcard>";
    valueXML += "</vcards>";

    return valueXML;
  }

  reprJSON() {
    return [
      "vcard",
      this.#props.reduce((accumulatedProps, currentProp) => {
        if (currentProp.constructor.identifier === "Group")
          accumulatedProps = accumulatedProps.concat(currentProp.reprJSON());
        else accumulatedProps.push(currentProp.reprJSON());

        return accumulatedProps;
      }, []),
    ];
  }

  #validate(props) {
    if (typeof props === "undefined")
      throw new MissingArgument("Properties for VCARD must be supplied");
    else if (!Array.isArray(props))
      throw new InvalidArgument(
        "Properties for VCARD must be passed in an array"
      );

    const propertyInstanceCount = new Map([
      ["FNProperty", 0],
      ["AnniversaryProperty", 0],
      ["BdayProperty", 0],
      ["GenderProperty", 0],
      ["BirthPlaceProperty", 0],
      ["DeathPlaceProperty", 0],
      ["DeathDateProperty", 0],
      ["KindProperty", 0],
      ["NProperty", 0],
      ["ProdidProperty", 0],
      ["RevProperty", 0],
      ["UIDProperty", 0],
    ]);
    let hasMemberProperty = false;
    let kindPropertyIsGroup = false;

    for (const prop of props) {
      if (!/(?:^Group$|Property$)/.test(prop.constructor.identifier))
        throw new InvalidArgument("Unidentified item included in properties");

      let count;

      switch (prop.constructor.identifier) {
        case "MemberProperty":
          hasMemberProperty = true;
          break;

        case "KindProperty":
          if (/^group$/i.test(prop.value)) kindPropertyIsGroup = true;
          break;

        case "Group":
          if (prop.hasMemberProperty) hasMemberProperty = true;

          if (prop.kindPropertyIsGroup) kindPropertyIsGroup = true;

          for (const propName of prop.propertyInstanceCount.keys()) {
            const _groupCount = prop.propertyInstanceCount.get(propName);
            const _cardcount = propertyInstanceCount.get(propName);

            count = _groupCount + _cardcount;

            propertyInstanceCount.set(propName, count);
          }
          break;

        default:
          if (!propertyInstanceCount.has(prop.constructor.identifier)) continue;

          count = propertyInstanceCount.get(prop.constructor.identifier);
          count++;
          propertyInstanceCount.set(prop.constructor.identifier, count);
      }
    }

    if (
      Array.from(this.constructor.cardinalityNoneOrOneProps.keys()).some(
        (property) => propertyInstanceCount.get(property) > 1
      )
    ) {
      for (const property of propertyInstanceCount.keys()) {
        if (propertyInstanceCount.get(property) <= 1) continue;

        const offendingProps = props.filter(
          (prop) => prop.constructor.identifier === property
        );

        if (!/ALTID=/.test(offendingProps[0]?.params))
          throw new InvalidArgument(
            "AnniversaryProperty, BdayProperty, GenderProperty, BirthPlaceProperty, DeathPlaceProperty, DeathdateProperty, KindProperty, NProperty, ProdidProperty, RevProperty and UIDProperty must not have more than one instance supplied, unless they have similar AltidParameters"
          );

        const referenceAltid = offendingProps[0].params
          .split(";")
          .filter((param) => /^ALTID=/.test(param))
          .pop();

        let followsCardinality = offendingProps.every((prop) => {
          const altid = prop.params
            .split(";")
            .filter((param) => /^ALTID=/.test(param))
            .pop();

          return altid === referenceAltid;
        });

        if (offendingProps.length < propertyInstanceCount.get(property)) {
          const groups = props.filter(
            (prop) => prop.constructor.identifier === "Group"
          );

          followsCardinality =
            followsCardinality &&
            groups.every((group) => {
              const offendingGroupProps = group.properties.filter(
                (prop) => prop.constructor.identifier === property
              );

              return offendingGroupProps.every((prop) => {
                const altid = prop.params
                  .split(";")
                  .filter((param) => /^ALTID=/.test(param))
                  .pop();

                return altid === referenceAltid;
              });
            });
        }

        if (!followsCardinality)
          throw new InvalidArgument(
            "AnniversaryProperty, BdayProperty, GenderProperty, BirthPlaceProperty, DeathPlaceProperty, DeathdateProperty, KindProperty, NProperty, ProdidProperty, RevProperty and UIDProperty must not have more than one instance supplied, unless they have similar AltidParameters"
          );
      }
    }

    if (propertyInstanceCount.get("FNProperty") < 1)
      throw new MissingArgument(
        "One or more FNProperty instances must be supplied"
      );
    else if (hasMemberProperty && !kindPropertyIsGroup)
      throw new InvalidArgument(
        'MemberProperty should only be used if the value of the KindProperty is "group"'
      );
  }

  constructor(props) {
    this.#validate(props);
    this.#props = props;

    Object.freeze(this);
  }
}

Object.freeze(VCARD);
