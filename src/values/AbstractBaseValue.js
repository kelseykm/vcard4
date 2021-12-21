export class AbstractBaseValue {
  #abstractPropertiesAndMethods = [
    'type',
    'value'
  ];

  checkAbstractPropertiesAndMethods() {
    if (
      !this.#abstractPropertiesAndMethods.every(
        abstractPropertyOrMethod => Object.prototype.hasOwnProperty.call(this, abstractPropertyOrMethod) ||
        Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(this), abstractPropertyOrMethod) ||
        Object.prototype.hasOwnProperty.call(this.constructor, abstractPropertyOrMethod)
      )
    )
    throw new Error('All abstract properties and methods in abstract base class must be defined in child class');
  }

  repr() {
    return this.value;
  }

  constructor() {
    if (this.constructor === AbstractBaseValue)
    throw new Error('Cannot create instance of abstract class');
  }
}
