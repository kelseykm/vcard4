import { inherits as _inherits, createSuper as _createSuper, createClass as _createClass, defineProperty as _defineProperty, classCallCheck as _classCallCheck, classPrivateMethodInitSpec as _classPrivateMethodInitSpec, assertThisInitialized as _assertThisInitialized, classPrivateFieldInitSpec as _classPrivateFieldInitSpec, classPrivateFieldGet as _classPrivateFieldGet, classPrivateMethodGet as _classPrivateMethodGet, classPrivateFieldSet as _classPrivateFieldSet, toConsumableArray as _toConsumableArray } from '../_virtual/_rollupPluginBabelHelpers.js';
import { BaseValue } from './BaseValue.js';
import { MissingArgument } from '../errors/MissingArgument.js';
import { InvalidArgument } from '../errors/InvalidArgument.js';

var _dateTimeValue = /*#__PURE__*/new WeakMap();

var _dateRegExp = /*#__PURE__*/new WeakMap();

var _timeRegExp = /*#__PURE__*/new WeakMap();

var _dateTimeRegExp = /*#__PURE__*/new WeakMap();

var _dateAndOrTimeRegExp = /*#__PURE__*/new WeakMap();

var _timestampRegExp = /*#__PURE__*/new WeakMap();

var _utcOffsetRegExp = /*#__PURE__*/new WeakMap();

var _validateAndSetType = /*#__PURE__*/new WeakSet();

var DateTimeType = /*#__PURE__*/function (_BaseValue) {
  _inherits(DateTimeType, _BaseValue);

  var _super = _createSuper(DateTimeType);

  function DateTimeType(_dateTimeValue2, _type) {
    var _this;

    _classCallCheck(this, DateTimeType);

    _this = _super.call(this);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validateAndSetType);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _dateTimeValue, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _dateRegExp, {
      writable: true,
      value: /^(?:(?:\d{4})|(?:(?:\d{4}(?:(?:(?:0[469]|11)(?:[0-2]\d|30))|(?:(?:0[13578]|1[02])(?:[0-2]\d|3[01]))))|(?:\d{2}(?:(?:(?:[02468][048]|[13579][26])(?:02)(?:[0-2]\d))|(?:(:?\d[13579]|[02468][26]|[13579][048])(?:02)(?:[0-2][0-8])))))|(?:-{2}(?:(?:(?:0[469]|11)(?:[0-2]\d|30)?)|(?:(?:0[13578]|1[02])(?:[0-2]\d|3[01])?)|(?:(?:02)(?:[0-2]\d)?)))|(?:-{3}(?:[0-2]\d|3[01]))|(?:\d{4}-(?:(?:0[1-9])|1[0-2])))$/
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _timeRegExp, {
      writable: true,
      value: /^(?:(?:(?:(?:[01]\d)|(?:2[0-3]))(?:(?:[0-5]\d){1,2})?)|(?:-(?:[0-5]\d){1,2})|(?:-{2}[0-5]\d))(?:Z|(?:[+-]((?:[01]\d)|(?:2[0-3]))(?:[0-5]\d)?))?$/
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _dateTimeRegExp, {
      writable: true,
      value: /^(?:(?:(?:\d{4}(?:(?:(?:0[469]|11)(?:[0-2]\d|30))|(?:(?:0[13578]|1[02])(?:[0-2]\d|3[01]))))|(?:\d{2}(?:(?:(?:[02468][048]|[13579][26])(?:02)(?:[0-2]\d))|(?:(:?\d[13579]|[02468][26]|[13579][048])(?:02)(?:[0-2][0-8])))))|(?:-{2}(?:(?:(?:0[469]|11)(?:[0-2]\d|30))|(?:(?:0[13578]|1[02])(?:[0-2]\d|3[01]))|(?:(?:02)(?:[0-2]\d))))|(?:-{3}(?:[0-2]\d|3[01])))(?:T)(?:(?:(?:(?:[01]\d)|(?:2[0-3]))(?:(?:[0-5]\d){1,2})?)(?:Z|(?:[+-]((?:[01]\d)|(?:2[0-3]))(?:[0-5]\d)?))?)$/
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _dateAndOrTimeRegExp, {
      writable: true,
      value: new RegExp("(?:".concat(_classPrivateFieldGet(_assertThisInitialized(_this), _dateRegExp).source, "|").concat(_classPrivateFieldGet(_assertThisInitialized(_this), _timeRegExp).source.replace("^", "^T"), "|").concat(_classPrivateFieldGet(_assertThisInitialized(_this), _dateTimeRegExp).source, ")"))
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _timestampRegExp, {
      writable: true,
      value: /^(?:(?:\d{4}(?:(?:(?:0[469]|11)(?:[0-2]\d|30))|(?:(?:0[13578]|1[02])(?:[0-2]\d|3[01]))))|(?:\d{2}(?:(?:(?:[02468][048]|[13579][26])(?:02)(?:[0-2]\d))|(?:(:?\d[13579]|[02468][26]|[13579][048])(?:02)(?:[0-2][0-8])))))(?:T)(?:(?:(?:(?:[01]\d)|(?:2[0-3]))(?:[0-5]\d){2})(?:Z|(?:[+-]((?:[01]\d)|(?:2[0-3]))(?:[0-5]\d)?))?)$/
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _utcOffsetRegExp, {
      writable: true,
      value: /^(?:[+-]((?:[01]\d)|(?:2[0-3]))(?:[0-5]\d)?)$/
    });

    _classPrivateMethodGet(_assertThisInitialized(_this), _validateAndSetType, _validateAndSetType2).call(_assertThisInitialized(_this), _dateTimeValue2, _type);

    _classPrivateFieldSet(_assertThisInitialized(_this), _dateTimeValue, _dateTimeValue2);

    _this.checkAbstractPropertiesAndMethods();

    Object.freeze(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(DateTimeType, [{
    key: "value",
    get: function get() {
      return "".concat(_classPrivateFieldGet(this, _dateTimeValue));
    }
  }, {
    key: "valueXML",
    get: function get() {
      var tag = this.type.toLowerCase();

      var value = _classPrivateFieldGet(this, _dateTimeValue);

      if (tag === "date-and-or-time") {
        switch (true) {
          case _classPrivateFieldGet(this, _dateRegExp).test(value):
            tag = "date";
            break;

          case _classPrivateFieldGet(this, _timeRegExp).test(value):
            tag = "time";
            break;

          case _classPrivateFieldGet(this, _dateTimeRegExp).test(value):
            tag = "date-time";
            break;
        }
      }

      return "<".concat(tag, ">").concat(value, "</").concat(tag, ">");
    }
  }, {
    key: "valueJSON",
    get: function get() {
      var type = this.type.toLowerCase();
      var value;

      function _extendDate(date) {
        if (/^\d{8}$/.test(date)) {
          date = _toConsumableArray(date);
          date.splice(4, 0, "-");
          date.splice(7, 0, "-");
          return date.join("");
        } else if (/^-{2}\d{4}$/.test(date)) {
          date = _toConsumableArray(date);
          date.splice(4, 0, "-");
          return date.join("");
        }

        return date;
      }

      function _extendTime(time) {
        var timeModified = [];

        for (var index = 0; index < time.length; index += 2) {
          if (!/^\d$/.test(time[index])) {
            timeModified.push(time[index]);
            index--;
            continue;
          }

          timeModified.push(time[index]);
          timeModified.push(time[index + 1]);
          /^\d$/.test(time[index + 2]) && timeModified.push(":");
        }

        return timeModified.join("");
      }

      switch (type) {
        case "date":
          value = _extendDate(_classPrivateFieldGet(this, _dateTimeValue));
          break;

        case "time":
          value = _extendTime(_classPrivateFieldGet(this, _dateTimeValue));
          break;

        case "date-time":
          value = _classPrivateFieldGet(this, _dateTimeValue).split("T");
          value = _extendDate(value[0]) + "T" + _extendTime(value[1]);
          break;

        case "date-and-or-time":
          if (_classPrivateFieldGet(this, _dateTimeValue).includes("T")) {
            value = _classPrivateFieldGet(this, _dateTimeValue).split("T");
            value = _extendDate(value[0]) + "T" + _extendTime(value[1]);
          } else value = _extendDate(_classPrivateFieldGet(this, _dateTimeValue));

          break;

        case "timestamp":
          value = _classPrivateFieldGet(this, _dateTimeValue).split("T");
          value = _extendDate(value[0]) + "T" + _extendTime(value[1]);
          break;

        case "utc-offset":
          value = _extendTime(_classPrivateFieldGet(this, _dateTimeValue));
      }

      return [type, value];
    }
  }]);

  return DateTimeType;
}(BaseValue);

function _validateAndSetType2(dateTimeValue, type) {
  if (typeof dateTimeValue === "undefined" || typeof type === "undefined") throw new MissingArgument("Value and type for DateTimeType must be supplied");else if (!/^(?:(?:date((?:andor)?(?:time))?)|(?:time(?:stamp)?)|(?:utcoffset))$/.test(type)) throw new InvalidArgument("Accepted values of type for DateTimeType are date, time, datetime, dateandortime, timestamp or utcoffset");

  switch (type) {
    case "date":
      if (!_classPrivateFieldGet(this, _dateRegExp).test(dateTimeValue)) throw new InvalidArgument("Invalid value for type date of DateTimeType");
      this.type = "DATE";
      break;

    case "time":
      if (!_classPrivateFieldGet(this, _timeRegExp).test(dateTimeValue)) throw new InvalidArgument("Invalid value for type time of DateTimeType");
      this.type = "TIME";
      break;

    case "datetime":
      if (!_classPrivateFieldGet(this, _dateTimeRegExp).test(dateTimeValue)) throw new InvalidArgument("Invalid value for type datetime of DateTimeType");
      this.type = "DATE-TIME";
      break;

    case "dateandortime":
      if (!_classPrivateFieldGet(this, _dateAndOrTimeRegExp).test(dateTimeValue)) throw new InvalidArgument("Invalid value for type dateandortime of DateTimeType");
      this.type = "DATE-AND-OR-TIME";
      break;

    case "timestamp":
      if (!_classPrivateFieldGet(this, _timestampRegExp).test(dateTimeValue)) throw new InvalidArgument("Invalid value for type timestamp of DateTimeType");
      this.type = "TIMESTAMP";
      break;

    case "utcoffset":
      if (!_classPrivateFieldGet(this, _utcOffsetRegExp).test(dateTimeValue)) throw new InvalidArgument("Invalid value for type utcoffset of DateTimeType");
      this.type = "UTC-OFFSET";
      break;

    default:
      throw new InvalidArgument("Accepted values for type property of type object for DateTimeType are date, time, datetime, dateandortime, timestamp or utcoffset");
  }
}

_defineProperty(DateTimeType, "identifier", "DateTimeType");

Object.freeze(DateTimeType);

export { DateTimeType };
//# sourceMappingURL=DateTimeType.js.map
