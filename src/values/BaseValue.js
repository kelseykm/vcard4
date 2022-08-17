export class BaseValue {
  #abstractPropertiesAndMethods = [
    "type",
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
        "All abstract properties and methods in abstract base class must be defined in child class"
      );
  }

  repr() {
    return this.value;
  }

  reprXML() {
    return this.valueXML;
  }

  reprJSON() {
    return this.valueJSON;
  }

  constructor() {
    if (this.constructor === BaseValue)
      throw new Error("Cannot create instance of base class");
  }
}

Object.freeze(BaseValue);
