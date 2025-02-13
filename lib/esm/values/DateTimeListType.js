import { inherits as _inherits, createClass as _createClass, defineProperty as _defineProperty, classPrivateFieldGet2 as _classPrivateFieldGet2, classCallCheck as _classCallCheck, callSuper as _callSuper, classPrivateMethodInitSpec as _classPrivateMethodInitSpec, classPrivateFieldInitSpec as _classPrivateFieldInitSpec, assertClassBrand as _assertClassBrand, classPrivateFieldSet2 as _classPrivateFieldSet2, createForOfIteratorHelper as _createForOfIteratorHelper } from '../_virtual/_rollupPluginBabelHelpers.js';
import { BaseValue } from './BaseValue.js';
import { MissingArgument } from '../errors/MissingArgument.js';

var _datetimelist = /*#__PURE__*/new WeakMap();
var _DateTimeListType_brand = /*#__PURE__*/new WeakSet();
var DateTimeListType = /*#__PURE__*/function (_BaseValue) {
  function DateTimeListType(_datetimelist2) {
    var _this;
    _classCallCheck(this, DateTimeListType);
    _this = _callSuper(this, DateTimeListType);
    _classPrivateMethodInitSpec(_this, _DateTimeListType_brand);
    _classPrivateFieldInitSpec(_this, _datetimelist, void 0);
    _assertClassBrand(_DateTimeListType_brand, _this, _validate).call(_this, _datetimelist2);
    _classPrivateFieldSet2(_datetimelist, _this, _datetimelist2);
    _this.type = _datetimelist2[0]["type"];
    _this.checkAbstractPropertiesAndMethods();
    Object.freeze(_this);
    return _this;
  }
  _inherits(DateTimeListType, _BaseValue);
  return _createClass(DateTimeListType, [{
    key: "value",
    get: function get() {
      return _classPrivateFieldGet2(_datetimelist, this).reduce(function (accumulatedDateTimeTypes, currentDateTimeType) {
        accumulatedDateTimeTypes.push(currentDateTimeType.repr());
        return accumulatedDateTimeTypes;
      }, []).join(",");
    }
  }, {
    key: "valueXML",
    get: function get() {
      return _classPrivateFieldGet2(_datetimelist, this).reduce(function (accumulatedDateTimeTypes, currentDateTimeType) {
        return accumulatedDateTimeTypes + currentDateTimeType.reprXML();
      }, "");
    }
  }, {
    key: "valueJSON",
    get: function get() {
      var value = _classPrivateFieldGet2(_datetimelist, this).reduce(function (accumulatedIntegerTypes, currentIntegerType) {
        accumulatedIntegerTypes.push(currentIntegerType.reprJSON().pop());
        return accumulatedIntegerTypes;
      }, []);
      value.unshift(this.type.toLowerCase());
      return value;
    }
  }]);
}(BaseValue);
function _validate(datetimelist) {
  if (typeof datetimelist === "undefined") throw new MissingArgument("Value for DateTimeListType must be supplied");else if (!Array.isArray(datetimelist)) throw new TypeError("Value for DateTimeListType should be passed in an array");
  var conformType = datetimelist[0]["type"];
  var _iterator = _createForOfIteratorHelper(datetimelist),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var datetime = _step.value;
      if (datetime.type !== conformType) throw new TypeError("Value for DateTimeListType should be an array of DateTimeTypes of the same type");else if (datetime.type === "UTC-OFFSET") throw new TypeError("Invalid type for value of DateTimeListType");else if (datetime.constructor.identifier !== "DateTimeType") throw new TypeError("Value for DateTimeListType should be an array of DateTimeTypes");
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
_defineProperty(DateTimeListType, "identifier", "DateTimeListType");
Object.freeze(DateTimeListType);

export { DateTimeListType };
//# sourceMappingURL=DateTimeListType.js.map
