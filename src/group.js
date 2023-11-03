import { MissingArgument, InvalidArgument } from "./errors/index.js";

export class Group {
  static identifier = "Group";
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
  #groupName;

  #propertyInstanceCount = new Map([
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

  get propertyInstanceCount() {
    return this.#propertyInstanceCount;
  }

  hasMemberProperty = false;
  kindPropertyIsGroup = false;

  repr() {
    const CRLF = "\r\n";

    return this.#props
      .reduce((accumulatedProps, currentProp) => {
        accumulatedProps.push(`${this.#groupName}.${currentProp.repr()}`);
        return accumulatedProps;
      }, [])
      .join(CRLF);
  }

  reprXML() {
    let valueXML = "";
    valueXML += `<group name="${this.#groupName}">`;

    valueXML += this.#props.reduce(
      (accumulatedParameters, currentParameter) =>
        accumulatedParameters + currentParameter.reprXML(),
      ""
    );

    valueXML += "</group>";

    return valueXML;
  }

  reprJSON() {
    return this.#props.reduce((accumulatedProps, currentProp) => {
      const prop = currentProp.reprJSON();
      prop[1] = {
        ...prop[1],
        group: this.#groupName,
      };

      accumulatedProps.push(prop);
      return accumulatedProps;
    }, []);
  }

  #validate(props, groupName) {
    if (
      typeof props === "undefined" ||
      typeof groupName === "undefined" ||
      groupName === ""
    )
      throw new MissingArgument(
        "Properties to be grouped and the group name must be supplied"
      );
    else if (!Array.isArray(props))
      throw new InvalidArgument(
        "Properties for Group must be passed in an array"
      );
    else if (!(props.length > 0))
      throw new MissingArgument("Properties to be grouped must be supplied");
    else if (typeof groupName !== "string")
      throw new TypeError("Group name must be of type string");
    else if (!/^[A-Za-z0-9-]+$/.test(groupName))
      throw new InvalidArgument("Invalid group name");

    for (const prop of props) {
      if (!/Property$/.test(prop.constructor.identifier))
        throw new InvalidArgument(
          "Unidentified item included in properties to be grouped"
        );

      switch (prop.constructor.identifier) {
        case "MemberProperty":
          this.hasMemberProperty = true;
          break;

        case "KindProperty":
          if (/^group$/i.test(prop.value)) this.kindPropertyIsGroup = true;
          break;

        case "Group":
          throw new InvalidArgument(
            "A group must not be included in the properties to be grouped"
          );
      }

      if (!this.#propertyInstanceCount.has(prop.constructor.identifier))
        continue;

      let count = this.#propertyInstanceCount.get(prop.constructor.identifier);
      count++;
      this.#propertyInstanceCount.set(prop.constructor.identifier, count);
    }
  }

  constructor(props, groupName) {
    this.#validate(props, groupName);
    this.#props = props;
    this.#groupName = groupName;

    Object.freeze(this);
  }
}

Object.freeze(Group);
