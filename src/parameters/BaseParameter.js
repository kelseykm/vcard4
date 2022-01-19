export class BaseParameter {
  #abstractPropertiesAndMethods = [
    'param',
    'value',
    'valueXML',
    'valueJSON',
    'identifier',
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
    return `${this.constructor.param || this.param}=${this.value}`;
  }

  reprXML() {
    const tag = this.constructor.param?.toLowerCase() || this.param?.toLowerCase();

    const knownTagRegExp = /^(?:altid|base|calscale|cc|geo|index|label|language|level|mediatype|pid|pref|sortas|type|tz|value)$/;

    if (!knownTagRegExp.test(tag))
    return `<unknown>${this.valueXML.replace(/<[a-z\-]+?>/g,'<text>').replace(/<\/[a-z\-]+?>/g,'</text>')}</unknown>`;
    else if (tag === 'value')
    return '';

    return `<${tag}>${this.valueXML}</${tag}>`;
  }

  reprJSON() {
    const key = this.constructor.param?.toLowerCase() || this.param?.toLowerCase(); 

    if (key === 'value')
    return {};

    let value = this.valueJSON;
    value.shift();
    value = value.map(val => val.toString());
    
    if (value.length === 1)
    value = value.pop();

    return { [key]: value };
  }

  constructor() {
    if (this.constructor === BaseParameter)
    throw new Error('Cannot create instance of base class');
  }
}

Object.freeze(BaseParameter);
