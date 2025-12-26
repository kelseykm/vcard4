import { inherits as _inherits, createClass as _createClass, defineProperty as _defineProperty, classPrivateFieldGet2 as _classPrivateFieldGet2, classCallCheck as _classCallCheck, callSuper as _callSuper, classPrivateMethodInitSpec as _classPrivateMethodInitSpec, classPrivateFieldInitSpec as _classPrivateFieldInitSpec, assertClassBrand as _assertClassBrand, classPrivateFieldSet2 as _classPrivateFieldSet2, toConsumableArray as _toConsumableArray } from '../_virtual/_rollupPluginBabelHelpers.js';
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
var _MAX_DATETIMEVALUE_LEN = /*#__PURE__*/new WeakMap();
var _DateTimeType_brand = /*#__PURE__*/new WeakSet();
var DateTimeType = /*#__PURE__*/function (_BaseValue) {
  function DateTimeType(_type, _dateTimeValue2) {
    var _this;
    _classCallCheck(this, DateTimeType);
    _this = _callSuper(this, DateTimeType);
    _classPrivateMethodInitSpec(_this, _DateTimeType_brand);
    _classPrivateFieldInitSpec(_this, _dateTimeValue, void 0);
    _classPrivateFieldInitSpec(_this, _dateRegExp, /^(?:(?:\d{4})|(?:(?:\d{4}(?:(?:(?:0[469]|11)(?:[0-2]\d|30))|(?:(?:0[13578]|1[02])(?:[0-2]\d|3[01]))))|(?:\d{2}(?:(?:(?:[02468][048]|[13579][26])(?:02)(?:[0-2]\d))|(?:(:?\d[13579]|[02468][26]|[13579][048])(?:02)(?:[0-2][0-8]|[01]9)))))|(?:-{2}(?:(?:(?:0[469]|11)(?:[0-2]\d|30)?)|(?:(?:0[13578]|1[02])(?:[0-2]\d|3[01])?)|(?:(?:02)(?:[0-2]\d)?)))|(?:-{3}(?:[0-2]\d|3[01]))|(?:\d{4}-(?:(?:0[1-9])|1[0-2])))$/);
    _classPrivateFieldInitSpec(_this, _timeRegExp, /^(?:(?:(?:(?:[01]\d)|(?:2[0-3]))(?:(?:[0-5]\d){1,2})?)|(?:-(?:[0-5]\d){1,2})|(?:-{2}[0-5]\d))(?:Z|(?:[+-]((?:[01]\d)|(?:2[0-3]))(?:[0-5]\d)?))?$/);
    _classPrivateFieldInitSpec(_this, _dateTimeRegExp, /^(?:(?:(?:\d{4}(?:(?:(?:0[469]|11)(?:[0-2]\d|30))|(?:(?:0[13578]|1[02])(?:[0-2]\d|3[01]))))|(?:\d{2}(?:(?:(?:[02468][048]|[13579][26])(?:02)(?:[0-2]\d))|(?:(:?\d[13579]|[02468][26]|[13579][048])(?:02)(?:[0-2][0-8]|[01]9)))))|(?:-{2}(?:(?:(?:0[469]|11)(?:[0-2]\d|30))|(?:(?:0[13578]|1[02])(?:[0-2]\d|3[01]))|(?:(?:02)(?:[0-2]\d))))|(?:-{3}(?:[0-2]\d|3[01])))(?:T)(?:(?:(?:(?:[01]\d)|(?:2[0-3]))(?:(?:[0-5]\d){1,2})?)(?:Z|(?:[+-]((?:[01]\d)|(?:2[0-3]))(?:[0-5]\d)?))?)$/);
    _classPrivateFieldInitSpec(_this, _dateAndOrTimeRegExp, new RegExp("(?:".concat(_classPrivateFieldGet2(_dateRegExp, _this).source, "|").concat(_classPrivateFieldGet2(_timeRegExp, _this).source.replace("^", "^T"), "|").concat(_classPrivateFieldGet2(_dateTimeRegExp, _this).source, ")")));
    _classPrivateFieldInitSpec(_this, _timestampRegExp, /^(?:(?:\d{4}(?:(?:(?:0[469]|11)(?:[0-2]\d|30))|(?:(?:0[13578]|1[02])(?:[0-2]\d|3[01]))))|(?:\d{2}(?:(?:(?:[02468][048]|[13579][26])(?:02)(?:[0-2]\d))|(?:(:?\d[13579]|[02468][26]|[13579][048])(?:02)(?:[0-2][0-8]|[01]9)))))(?:T)(?:(?:(?:(?:[01]\d)|(?:2[0-3]))(?:[0-5]\d){2})(?:Z|(?:[+-]((?:[01]\d)|(?:2[0-3]))(?:[0-5]\d)?))?)$/);
    _classPrivateFieldInitSpec(_this, _utcOffsetRegExp, /^(?:[+-]((?:[01]\d)|(?:2[0-3]))(?:[0-5]\d)?)$/);
    _classPrivateFieldInitSpec(_this, _MAX_DATETIMEVALUE_LEN, 20);
    _assertClassBrand(_DateTimeType_brand, _this, _validateAndSetType).call(_this, _type, _dateTimeValue2);
    _classPrivateFieldSet2(_dateTimeValue, _this, _dateTimeValue2);
    _this.checkAbstractPropertiesAndMethods();
    Object.freeze(_this);
    return _this;
  }
  _inherits(DateTimeType, _BaseValue);
  return _createClass(DateTimeType, [{
    key: "value",
    get: function get() {
      return "".concat(_classPrivateFieldGet2(_dateTimeValue, this));
    }
  }, {
    key: "valueXML",
    get: function get() {
      var tag = this.type.toLowerCase();
      var value = _classPrivateFieldGet2(_dateTimeValue, this);
      if (tag === "date-and-or-time") {
        switch (true) {
          case _classPrivateFieldGet2(_dateRegExp, this).test(value):
            tag = "date";
            break;
          case _classPrivateFieldGet2(_timeRegExp, this).test(value):
            tag = "time";
            break;
          case _classPrivateFieldGet2(_dateTimeRegExp, this).test(value):
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
          value = _extendDate(_classPrivateFieldGet2(_dateTimeValue, this));
          break;
        case "time":
          value = _extendTime(_classPrivateFieldGet2(_dateTimeValue, this));
          break;
        case "date-time":
          value = _classPrivateFieldGet2(_dateTimeValue, this).split("T");
          value = _extendDate(value[0]) + "T" + _extendTime(value[1]);
          break;
        case "date-and-or-time":
          if (_classPrivateFieldGet2(_dateTimeValue, this).includes("T")) {
            value = _classPrivateFieldGet2(_dateTimeValue, this).split("T");
            value = _extendDate(value[0]) + "T" + _extendTime(value[1]);
          } else value = _extendDate(_classPrivateFieldGet2(_dateTimeValue, this));
          break;
        case "timestamp":
          value = _classPrivateFieldGet2(_dateTimeValue, this).split("T");
          value = _extendDate(value[0]) + "T" + _extendTime(value[1]);
          break;
        case "utc-offset":
          value = _extendTime(_classPrivateFieldGet2(_dateTimeValue, this));
      }
      return [type, value];
    }
  }]);
}(BaseValue);
function _validateAndSetType(type, dateTimeValue) {
  if (typeof dateTimeValue === "undefined" || typeof type === "undefined") throw new MissingArgument("Value and type for DateTimeType must be supplied");else if (!/^(?:(?:date((?:andor)?(?:time))?)|(?:time(?:stamp)?)|(?:utcoffset))$/.test(type)) throw new InvalidArgument("Accepted values of type for DateTimeType are date, time, datetime, dateandortime, timestamp or utcoffset");else if ("".concat(dateTimeValue).length > _classPrivateFieldGet2(_MAX_DATETIMEVALUE_LEN, this)) throw new InvalidArgument("The value must not exceed ".concat(_classPrivateFieldGet2(_MAX_DATETIMEVALUE_LEN, this), " characters"));
  switch (type) {
    case "date":
      if (!_classPrivateFieldGet2(_dateRegExp, this).test(dateTimeValue)) throw new InvalidArgument("Invalid value for type date of DateTimeType");
      this.type = "DATE";
      break;
    case "time":
      if (!_classPrivateFieldGet2(_timeRegExp, this).test(dateTimeValue)) throw new InvalidArgument("Invalid value for type time of DateTimeType");
      this.type = "TIME";
      break;
    case "datetime":
      if (!_classPrivateFieldGet2(_dateTimeRegExp, this).test(dateTimeValue)) throw new InvalidArgument("Invalid value for type datetime of DateTimeType");
      this.type = "DATE-TIME";
      break;
    case "dateandortime":
      if (!_classPrivateFieldGet2(_dateAndOrTimeRegExp, this).test(dateTimeValue)) throw new InvalidArgument("Invalid value for type dateandortime of DateTimeType");
      this.type = "DATE-AND-OR-TIME";
      break;
    case "timestamp":
      if (!_classPrivateFieldGet2(_timestampRegExp, this).test(dateTimeValue)) throw new InvalidArgument("Invalid value for type timestamp of DateTimeType");
      this.type = "TIMESTAMP";
      break;
    case "utcoffset":
      if (!_classPrivateFieldGet2(_utcOffsetRegExp, this).test(dateTimeValue)) throw new InvalidArgument("Invalid value for type utcoffset of DateTimeType");
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
