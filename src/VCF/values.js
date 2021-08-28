import {
  MissingArgument,
  InvalidArgument,
} from './errors.js';

class TextType {
  type = 'TEXT';

  #validate(textValue) {
    if (typeof textValue === 'undefined')
    throw new MissingArgument('Value for TextType must be supplied');
    else if (typeof textValue !== 'string')
    throw new TypeError('Only type string allowed for TextType value');
  }

  #cleanUp(textValue) {
    //commas, colons, semi-colons, backslashes and new-lines must be escaped/encoded
    return textValue.replaceAll('\\', '\\\\').replaceAll(',', '\\,').replaceAll(':', '\\:').replaceAll(';', '\\;').replaceAll('\n', '\\n');
  }

  constructor(textValue) {
    this.#validate(textValue);
    this.value = this.#cleanUp(textValue);

    Object.freeze(this);
  }
}

class BooleanType {
  type = 'BOOLEAN';

  #validate(boolValue) {
    if (typeof boolValue === 'undefined')
    throw new MissingArgument('boolValue must be supplied');
    else if (! /(^true$)|(^false$)/i.test(boolValue))
    throw new InvalidArgument('Only true or false allowed for BooleanType value');
  }

  constructor(boolValue) {
    this.#validate(boolValue);
    this.value = /^true$/i.test(boolValue) ? 'TRUE' : 'FALSE';

    Object.freeze(this);
  }
}

class DateTimeType {
  #dateRegExp = /^(?:(?:\d{4})|(?:(?:\d{4}(?:(?:(?:0[469]|11)(?:[0-2]\d|30))|(?:(?:0[13578]|1[02])(?:[0-2]\d|3[01]))))|(?:\d{2}(?:(?:(?:[02468][048]|[13579][26])(?:02)(?:[0-2]\d))|(?:(:?\d[13579]|[02468][26]|[13579][048])(?:02)(?:[0-2][0-8])))))|(?:-{2}(?:(?:(?:0[469]|11)(?:[0-2]\d|30)?)|(?:(?:0[13578]|1[02])(?:[0-2]\d|3[01])?)|(?:(?:02)(?:[0-2]\d)?)))|(?:-{3}(?:[0-2]\d|3[01]))|(?:\d{4}-(?:(?:0[1-9])|1[0-2])))$/;

  #timeRegExp = /^(?:(?:(?:(?:[01]\d)|(?:2[0-3]))(?:(?:[0-5]\d){1,2})?)|(?:-(?:[0-5]\d){1,2})|(?:-{2}[0-5]\d))(?:Z|(?:[+-]((?:[01]\d)|(?:2[0-3]))(?:[0-5]\d)?))?$/;

  #dateTimeRegExp = /^(?:(?:(?:\d{4}(?:(?:(?:0[469]|11)(?:[0-2]\d|30))|(?:(?:0[13578]|1[02])(?:[0-2]\d|3[01]))))|(?:\d{2}(?:(?:(?:[02468][048]|[13579][26])(?:02)(?:[0-2]\d))|(?:(:?\d[13579]|[02468][26]|[13579][048])(?:02)(?:[0-2][0-8])))))|(?:-{2}(?:(?:(?:0[469]|11)(?:[0-2]\d|30))|(?:(?:0[13578]|1[02])(?:[0-2]\d|3[01]))|(?:(?:02)(?:[0-2]\d))))|(?:-{3}(?:[0-2]\d|3[01])))(?:T)(?:(?:(?:(?:[01]\d)|(?:2[0-3]))(?:(?:[0-5]\d){1,2})?)(?:Z|(?:[+-]((?:[01]\d)|(?:2[0-3]))(?:[0-5]\d)?))?)$/;

  #dateAndOrTimeRegExp = new RegExp(`(?:${this.#dateRegExp.source}|${this.#timeRegExp.source.replace('^', '^T')}|${this.#dateTimeRegExp.source})`);

  #timestampRegExp = /^(?:(?:\d{4}(?:(?:(?:0[469]|11)(?:[0-2]\d|30))|(?:(?:0[13578]|1[02])(?:[0-2]\d|3[01]))))|(?:\d{2}(?:(?:(?:[02468][048]|[13579][26])(?:02)(?:[0-2]\d))|(?:(:?\d[13579]|[02468][26]|[13579][048])(?:02)(?:[0-2][0-8])))))(?:T)(?:(?:(?:(?:[01]\d)|(?:2[0-3]))(?:[0-5]\d){2})(?:Z|(?:[+-]((?:[01]\d)|(?:2[0-3]))(?:[0-5]\d)?))?)$/;

  #validateAndSet(dateTimeValue, options) {
    if (typeof dateTimeValue === 'undefined')
    throw new MissingArgument('Value for DateTimeType must be supplied');
    else if (typeof options?.type === 'undefined')
    throw new InvalidArgument('Second argument for DateTimeType should be an object with a type property');
    else if (! /^(?:(?:date((?:andor)?(?:time))?)|(?:time(?:stamp)?))$/.test(options.type))
    throw new InvalidArgument('Accepted values for type property of options object for DateTimeType are date, time, datetime, dateandortime or timestamp');

    switch (true) {
      case /^date$/.test(options.type):
        if (!this.#dateRegExp.test(dateTimeValue))
        throw new InvalidArgument('Invalid value for type date of DateTimeType');

        this.type = 'DATE';
        this.value = dateTimeValue.toString();
        break;
      case /^time$/.test(options.type):
        if (!this.#timeRegExp.test(dateTimeValue))
        throw new InvalidArgument('Invalid value for type time of DateTimeType');

        this.type = 'TIME';
        this.value = dateTimeValue.toString();
        break;
      case /^datetime$/.test(options.type):
        if (!this.#dateTimeRegExp.test(dateTimeValue))
        throw new InvalidArgument('Invalid value for type datetime of DateTimeType');

        this.type = 'DATE-TIME';
        this.value = dateTimeValue.toString();
        break;
      case /^dateandortime$/.test(options.type):
        if (!this.#dateAndOrTimeRegExp.test(dateTimeValue))
        throw new InvalidArgument('Invalid value for type dateandortime of DateTimeType');

        this.type = 'DATE-AND-OR-TIME';
        this.value = dateTimeValue.toString();
        break;
      case /^timestamp$/.test(options.type):
        if (!this.#timestampRegExp.test(dateTimeValue))
        throw new InvalidArgument('Invalid value for type timestamp of DateTimeType');

        this.type = 'TIMESTAMP';
        this.value = dateTimeValue.toString();
        break;
      default:
        throw new InvalidArgument('Accepted values for type property of options object for DateTimeType are date, time, datetime, dateandortime or timestamp');
    }
  }

  constructor(dateTimeValue, options) {
    this.#validateAndSet(dateTimeValue, options);

    Object.freeze(this);
  }
}

class IntegerType {
  type = 'INTEGER';

  #validate(intValue) {
    if (typeof intValue === 'undefined')
    throw new MissingArgument('Value for IntegerType must be supplied');
    //The maximum value is 9223372036854775807, and the minimum value is -9223372036854775808.
    //But these numbers are higher/lower than Number.MAX_SAFE_INTEGER, therefore accept only bigint type integers
    else if (typeof intValue !== 'bigint')
    throw new TypeError('Only bigint type values allowed for IntegerType');
    else if (!((-9223372036854775809n < intValue) && (intValue < 9223372036854775808n)))
    throw new InvalidArgument('The maximum value is 9223372036854775807, and the minimum value is -9223372036854775808 for IntegerType');
  }

  constructor(intValue) {
    this.#validate(intValue);
    this.value = intValue.toString();

    Object.freeze(this);
  }
}

class FloatType {
  type = 'FLOAT';

  #validate(floatValue) {
    if (typeof floatValue === 'undefined')
    throw new MissingArgument('Value for FloatType must be supplied');
    //Implementations MUST support a precision equal or better than that of the IEEE
    //"binary64" format, therefore allow only number type which is essentially IEEE
    //754 basic 64-bit binary floating-point
    if (typeof floatValue !== 'number')
    throw new TypeError('Only number type values allowed for FloatType');
  }

  constructor(floatValue) {
    this.#validate(floatValue);
    this.value = floatValue.toString();

    Object.freeze(this);
  }
}

class LanguageTagType {
  type = 'LANGUAGE-TAG';

  #validate(langTagValue) {
    if (typeof langTagValue === 'undefined')
    throw new MissingArgument('Value for LanguageTagType must be supplied');
    else if (typeof langTagValue !== 'string')
    throw new TypeError('Value for LanguageTagType should be of type string');
    //Should be according to RFC5646. I leave the burden to the
    //user to ensure their Language Tag is according to the RFC.
  }

  #cleanUp(langTagValue) {
    //commas, colons, semi-colons, backslashes and new-lines must be escaped/encoded
    return langTagValue.replaceAll('\\', '\\\\').replaceAll(',', '\\,').replaceAll(':', '\\:').replaceAll(';', '\\;').replaceAll('\n', '\\n');
  }

  constructor(langTagValue) {
    this.#validate(langTagValue);
    this.value = this.#cleanUp(langTagValue);

    Object.freeze(this);
  }
}

class URIType {
  type = 'URI';

  //Credit for the following regex goes to Jonas Hermsmeier, who got it from Jeff Roberson and added capture groups
  #uriRegExp = new RegExp("([A-Za-z][A-Za-z0-9+\\-.]*):(?:(//)(?:((?:[A-Za-z0-9\\-._~!$&'()*+,;=:]|%[0-9A-Fa-f]{2})*)@)?((?:\\[(?:(?:(?:(?:[0-9A-Fa-f]{1,4}:){6}|::(?:[0-9A-Fa-f]{1,4}:){5}|(?:[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){4}|(?:(?:[0-9A-Fa-f]{1,4}:){0,1}[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){3}|(?:(?:[0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){2}|(?:(?:[0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})?::[0-9A-Fa-f]{1,4}:|(?:(?:[0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})?::)(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))|(?:(?:[0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})?::[0-9A-Fa-f]{1,4}|(?:(?:[0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})?::)|[Vv][0-9A-Fa-f]+\\.[A-Za-z0-9\\-._~!$&'()*+,;=:]+)\\]|(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)|(?:[A-Za-z0-9\\-._~!$&'()*+,;=]|%[0-9A-Fa-f]{2})*))(?::([0-9]*))?((?:/(?:[A-Za-z0-9\\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})*)*)|/((?:(?:[A-Za-z0-9\\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})+(?:/(?:[A-Za-z0-9\\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})*)*)?)|((?:[A-Za-z0-9\\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})+(?:/(?:[A-Za-z0-9\\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})*)*)|)(?:\\?((?:[A-Za-z0-9\\-._~!$&'()*+,;=:@/?]|%[0-9A-Fa-f]{2})*))?(?:\\#((?:[A-Za-z0-9\\-._~!$&'()*+,;=:@/?]|%[0-9A-Fa-f]{2})*))?");

  #validate(uriValue) {
    if (typeof uriValue === 'undefined')
    throw new MissingArgument('Value for URIType must be supplied');
    else if (typeof uriValue !== 'string')
    throw new TypeError('Value for URIType should be of type string');
    else if (!this.#uriRegExp.test(uriValue))
    throw new InvalidArgument('Invalid URI');
  }

  constructor(uriValue) {
    this.#validate(uriValue);
    this.value = uriValue;

    Object.freeze(this);
  }
}

export {
  TextType,
  BooleanType,
  DateTimeType,
  IntegerType,
  FloatType,
  LanguageTagType,
  URIType
};
