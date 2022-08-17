export class BaseProperty {
  #abstractPropertiesAndMethods = [
    "prop",
    "cardinality",
    "acceptableParamTypes",
    "acceptableValTypes",
    "params",
    "paramsXML",
    "paramsJSON",
    "value",
    "valueXML",
    "valueJSON",
    "identifier",
  ];

  checkAbstractPropertiesAndMethods() {
    if (
      !this.#abstractPropertiesAndMethods.every(
        (abstractPropertyOrMethod) =>
          Object.prototype.hasOwnProperty.call(
            this,
            abstractPropertyOrMethod
          ) ||
          Object.prototype.hasOwnProperty.call(
            Object.getPrototypeOf(this),
            abstractPropertyOrMethod
          ) ||
          Object.prototype.hasOwnProperty.call(
            this.constructor,
            abstractPropertyOrMethod
          )
      )
    )
      throw new Error(
        "All abstract properties and methods in base class must be defined in child class"
      );
  }

  repr() {
    const contentLine =
      this.params === ""
        ? `${this.constructor.prop || this.prop}:${this.value}`
        : `${this.constructor.prop || this.prop};${this.params}:${this.value}`;

    const LINEBREAK = "\r\n" + " ";
    const MAXWIDTH = 75;

    if (contentLine.length <= MAXWIDTH) return contentLine;

    let foldedContentLine = "";

    for (let index = 0; index < contentLine.length; index++) {
      if (index > 0 && index % MAXWIDTH === 0)
        foldedContentLine += LINEBREAK + contentLine[index];
      else foldedContentLine += contentLine[index];
    }
    return foldedContentLine;
  }

  reprXML() {
    const tag =
      this.constructor.prop?.toLowerCase() || this.prop?.toLowerCase();

    if (tag === "xml") return this.valueXML;

    return this.paramsXML === ""
      ? `<${tag}>${this.valueXML}</${tag}>`
      : `<${tag}><parameters>${this.paramsXML}</parameters>${this.valueXML}</${tag}>`;
  }

  reprJSON() {
    return [
      this.constructor.prop?.toLowerCase() || this.prop?.toLowerCase(),
      this.paramsJSON,
      ...this.valueJSON,
    ];
  }

  constructor() {
    if (this.constructor === BaseProperty)
      throw new Error("Cannot create instance of base class");
  }
}

Object.freeze(BaseProperty);
