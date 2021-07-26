class TextType {
  type = 'TEXT';

  #validate(textValue) {
    if (!textValue) throw new Error('textValue must be supplied');
    //allow only strings to be text types
    else if (typeof textValue !== 'string')
    throw new TypeError('Only type string allowed for TEXT values');
  }

  #cleanUp(textValue) {
    //commas, semi-colons, backslashes and new-lines must be escaped/encoded
    return textValue.replaceAll('\\', '\\\\').replaceAll(',', '\\,').replaceAll(';', '\\;').replaceAll('\n', '\\n');
  }

  constructor(textValue) {
    this.#validate(textValue);
    this.value = this.#cleanUp(textValue);
    //Prevent user from making ANY changes to the created object
    Object.freeze(this);
  }
}

class BooleanType {
  type = 'BOOLEAN';

  #validate(boolValue) {
    if (!boolValue) throw new Error('boolValue must be supplied');
    //allow only true or false (boolean or string)
    else if (! /(^true$)|(^false$)/i.test(boolValue))
    throw new Error(`Invalid input: ${boolValue}. Only true or false allowed`);
  }

  constructor(boolValue) {
    this.#validate(boolValue);
    this.value = /^true$/i.test(boolValue) ? 'TRUE' : 'FALSE';
    //Prevent user from making ANY changes to the created object
    Object.freeze(this);
  }
}

class DateTimeType {
  #dateRegExp = /^(?:(?:(?<year1>\d{4})(?:(?<month1>\d{2})(?<day1>\d{2}))?)|(?:(?<year2>\d{4})-(?<month2>\d{2}))|(?:-{2}(?<month3>\d{2})(?<day2>\d{2})?)|(?:-{3}(?<day3>\d{2}))|)$/;
  #timeRegExp = /^(?:(?:\d{2})|(?:\d{4})|(?:\d{6})|(?:-\d{4})|(?:-{2}\d{2}))(?:Z|[-+]\d{2}(?:0{2})?)?$/;
  #dateTimeRegExp = /^(?:(?:\d{8})|(?:-{2}\d{4})|(?:-{3}\d{2}))T(?:(?:\d{2})|(?:\d{4})|(?:\d{6}))(?:Z|[-+]\d{2}(?:0{2})?)?$/;
  #dateAndOrTimeRegExp = new RegExp(`(?:${this.#dateRegExp.source}|${this.#timeRegExp.source.replace('^', '^T')}|${this.#dateTimeRegExp.source})`);
  #timestampRegExp = /^\d{8}T\d{6}(?:Z|[-+]\d{2}(?:0{2})?)?$/;

  #validateAndSet(dateTimeValue, options) {
    if (!dateTimeValue) throw new Error('dateTimeValue must be supplied');
    //ensure options is an object with a type property specifying either
    // date, time, datetime, dateandortime or timestamp
    else if (!options?.type)
    throw new Error('Second argument should be an object with a type property');
    else if (! /^(date|time|dateandortime|datetime|timestamp)$/i.test(options.type))
    throw new Error('Accepted values for type property are date, time, datetime, dateandortime or timestamp');

    //ensure dateTimeValue corresponds to type given in options
    switch (true) {
      case /^date$/i.test(options.type):
        if (!this.#dateRegExp.test(dateTimeValue))
        throw new Error(`Invalid dateTimeValue for type date.
          It should be of the format:
            year [month day] or
            year "-" month or
            "--" month [day] or
            "--" "-" day or
            year month day or
            "--" month day

          Examples for "date":
            19850412
            1985-04
            1985
            --0412
            ---12

          Note the use of YYYY-MM in the second example above. YYYYMM is
          disallowed to prevent confusion with YYMMDD. Note also that
          YYYY-MM-DD is disallowed since we are using the basic format instead
          of the extended format.
        `);

        let match = this.#dateRegExp.exec(dateTimeValue);
        let matchGroups = match.groups;

        //This is safe to do because there can only be one year captured and
        // one month captured, so they won't get overwritten twice
        let leapYear = false;
        let monthNumber = 0;

        Reflect.ownKeys(matchGroups).forEach(captureGroup => {
          switch (true) {
            case /year/.test(captureGroup):
              if (matchGroups[captureGroup]) {
                let year = matchGroups[captureGroup];
                year = new Number(year).valueOf();

                if (!((0 <= year) && (year <= 9999)))
                throw new Error('Invalid year. Year should be between 0000-9999');

                if (year % 4 === 0) leapYear = true;
              }
              break;
            case /month/.test(captureGroup):
              if (matchGroups[captureGroup]) {
                let month = matchGroups[captureGroup];
                month = new Number(month).valueOf();

                if (!((1 <= month) && (month <= 12)))
                throw new Error('Invalid month. Month should be between 01-12');

                monthNumber = month;
              }
              break;
            case /day/.test(captureGroup):
              if (matchGroups[captureGroup]) {
                let day = matchGroups[captureGroup];
                day = new Number(day).valueOf();

                if (!((1 <= day) && (day <= 31)))
                throw new Error('Invalid day. Day should be between 01-31');
                else if (leapYear && (monthNumber === 2) && (day > 29))
                throw new Error('Invalid day. Day for month 02 in a leap year should be between 01-29');
                else if (!leapYear && (monthNumber === 2) && (day > 28))
                throw new Error('Invalid day. Day for month 02 should be between 01-28');
                else if (/^(4|6|9|11)$/.test(monthNumber) && (day > 30))
                throw new Error('Invalid day. Day for months 04, 06, 09 and 11 should be between 01-30');
              }
              break;
          }
        });

        this.type = 'DATE';
        this.value = dateTimeValue.toString();
        break;
      case /^time$/i.test(options.type):
        if (!this.#timeRegExp.test(dateTimeValue))
        throw new Error(`Invalid dateTimeValue for type time.
          It should be of the format:
            hour [minute [second]] [zone] or
            "-" minute [second] [zone] or
            "-" "-" second [zone] or
            hour minute second [zone]

          Examples for "time":
            102200
            1022
            10
            -2200
            --00
            102200Z
            102200-0800
        `);

        this.type = 'TIME';
        this.value = dateTimeValue;
        break;
      case /^datetime$/i.test(options.type):
        if (!this.#dateTimeRegExp.test(dateTimeValue))
        throw new Error(`Invalid dateTimeValue for type datetime.
          It should be of the format:
          date-noreduc time-designator time-notrunc
          where:
            date-noreduc = year month day or
                          "--" month day or
                          "--" "-" day
            time-designator = "T"
            time-notrunc = hour [minute [second]] [zone]

          Examples for "date-time":
            19961022T140000
            --1022T1400
            ---22T14
        `);

        this.type = 'DATE-TIME';
        this.value = dateTimeValue;
        break;
      case /^dateandortime$/i.test(options.type):
        if (!this.#dateAndOrTimeRegExp.test(dateTimeValue))
        throw new Error(`Invalid dateTimeValue for type dateandortime.
          It should be of the format:
          date-time / date / time-designator time
          Examples for "date-and-or-time":
            19961022T140000
            --1022T1400
            ---22T14
            19850412
            1985-04
            1985
            --0412
            ---12
            T102200
            T1022
            T10
            T-2200
            T--00
            T102200Z
            T102200-0800
        `);

        this.type = 'DATE-AND-OR-TIME';
        this.value = dateTimeValue;
        break;
      case /^timestamp$/i.test(options.type):
        if (!this.#timestampRegExp.test(dateTimeValue))
        throw new Error(`Invalid dateTimeValue for type timestamp.
          It should be of the format:
          date-complete time-designator time-complete
          where:
            date-complete = year month day
            time-designator = "T"
            time-complete = hour minute second [zone]

          Examples for "timestamp":
            19961022T140000
            19961022T140000Z
            19961022T140000-05
            19961022T140000-0500
        `);

        this.type = 'TIMESTAMP';
        this.value = dateTimeValue;
        break;
      default:
        throw new Error('Accepted values for type property are date, time, datetime, dateandortime or timestamp');
    }
  }

  constructor(dateTimeValue, options) {
    this.#validateAndSet(dateTimeValue, options);
    //Prevent user from making ANY changes to the created object
    Object.freeze(this);
  }
}

class IntegerType {
  type = 'INTEGER';

  #validate(intValue) {
    if (!intValue) throw new Error('intValue must be supplied');
    //The maximum value is 9223372036854775807, and the minimum value is -9223372036854775808.
    //But these numbers are higher/lower than Number.MAX_SAFE_INTEGER, therefore accept only bigint type integers
    else if (typeof intValue !== 'bigint')
    throw new TypeError('Only bigint type values allowed');
    else if (!((-9223372036854775809n < intValue) && (intValue < 9223372036854775808n)))
    throw new Error('The maximum value is 9223372036854775807, and the minimum value is -9223372036854775808.');
  }

  constructor(intValue) {
    this.#validate(intValue);
    this.value = intValue.toString();
    //Prevent user from making ANY changes to the created object
    Object.freeze(this);
  }
}

class FloatType {
  type = 'FLOAT';

  #validate(floatValue) {
    if (!floatValue) throw new Error('floatValue must be supplied');
    //Implementations MUST support a precision equal or better than that of
    //the IEEE "binary64" format, therefore allow only number type which is
    //essentially IEEE 754 basic 64-bit binary floating-point
    if (typeof floatValue !== 'number')
    throw new TypeError('Only number type values allowed');
  }

  constructor(floatValue) {
    this.#validate(floatValue);
    this.value = floatValue.toString();
    //Prevent user from making ANY changes to the created object
    Object.freeze(this);
  }
}

class LanguageTagType {
  type = 'LANGUAGE-TAG';

  #validate(langTagValue) {
    if (!langTagValue) throw new Error('langTagValue must be supplied');
    else if (typeof langTagValue !== 'string') throw new TypeError('langTagValue should be of type string');
    //Should be according to RFC5646. I leave the burden to the
    //user to ensure their Language Tag is according to the RFC.
  }

  constructor(langTagValue) {
    this.#validate(langTagValue);
    this.value = langTagValue;
    //Prevent user from making ANY changes to the created object
    Object.freeze(this);
  }
}

class URIType {
  type = 'URI';

  //Credit for the following regex goes to Jonas Hermsmeier, who got it from Jeff Roberson and added capture groups
  #uriRegExp = new RegExp("([A-Za-z][A-Za-z0-9+\\-.]*):(?:(//)(?:((?:[A-Za-z0-9\\-._~!$&'()*+,;=:]|%[0-9A-Fa-f]{2})*)@)?((?:\\[(?:(?:(?:(?:[0-9A-Fa-f]{1,4}:){6}|::(?:[0-9A-Fa-f]{1,4}:){5}|(?:[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){4}|(?:(?:[0-9A-Fa-f]{1,4}:){0,1}[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){3}|(?:(?:[0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){2}|(?:(?:[0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})?::[0-9A-Fa-f]{1,4}:|(?:(?:[0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})?::)(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))|(?:(?:[0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})?::[0-9A-Fa-f]{1,4}|(?:(?:[0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})?::)|[Vv][0-9A-Fa-f]+\\.[A-Za-z0-9\\-._~!$&'()*+,;=:]+)\\]|(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)|(?:[A-Za-z0-9\\-._~!$&'()*+,;=]|%[0-9A-Fa-f]{2})*))(?::([0-9]*))?((?:/(?:[A-Za-z0-9\\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})*)*)|/((?:(?:[A-Za-z0-9\\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})+(?:/(?:[A-Za-z0-9\\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})*)*)?)|((?:[A-Za-z0-9\\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})+(?:/(?:[A-Za-z0-9\\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})*)*)|)(?:\\?((?:[A-Za-z0-9\\-._~!$&'()*+,;=:@/?]|%[0-9A-Fa-f]{2})*))?(?:\\#((?:[A-Za-z0-9\\-._~!$&'()*+,;=:@/?]|%[0-9A-Fa-f]{2})*))?");

  #validate(uriValue) {
    if (!uriValue) throw new Error('uriValue must be supplied');
    else if (typeof uriValue !== 'string') throw new TypeError('URI should be of type string');
    else if (!this.#uriRegExp.test(uriValue)) throw new Error('Invalid URI');
  }

  constructor(uriValue) {
    this.#validate(uriValue);
    this.value = uriValue;
    //Prevent user from making ANY changes to the created object
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
