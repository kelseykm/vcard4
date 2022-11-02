import { inherits as _inherits, createSuper as _createSuper, createClass as _createClass, defineProperty as _defineProperty, classCallCheck as _classCallCheck, classPrivateMethodInitSpec as _classPrivateMethodInitSpec, assertThisInitialized as _assertThisInitialized, classPrivateFieldInitSpec as _classPrivateFieldInitSpec, classPrivateMethodGet as _classPrivateMethodGet, classPrivateFieldSet as _classPrivateFieldSet, classPrivateFieldGet as _classPrivateFieldGet, createForOfIteratorHelper as _createForOfIteratorHelper } from '../_virtual/_rollupPluginBabelHelpers.js';
import { BaseValue } from './BaseValue.js';
import { MissingArgument } from '../errors/MissingArgument.js';

var _datetimelist = /*#__PURE__*/new WeakMap();

var _validate = /*#__PURE__*/new WeakSet();

var DateTimeListType = /*#__PURE__*/function (_BaseValue) {
  _inherits(DateTimeListType, _BaseValue);

  var _super = _createSuper(DateTimeListType);

  function DateTimeListType(_datetimelist2) {
    var _this;

    _classCallCheck(this, DateTimeListType);

    _this = _super.call(this);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _datetimelist, {
      writable: true,
      value: void 0
    });

    _classPrivateMethodGet(_assertThisInitialized(_this), _validate, _validate2).call(_assertThisInitialized(_this), _datetimelist2);

    _classPrivateFieldSet(_assertThisInitialized(_this), _datetimelist, _datetimelist2);

    _this.type = _datetimelist2[0]["type"];

    _this.checkAbstractPropertiesAndMethods();

    Object.freeze(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(DateTimeListType, [{
    key: "value",
    get: function get() {
      return _classPrivateFieldGet(this, _datetimelist).reduce(function (accumulatedDateTimeTypes, currentDateTimeType) {
        accumulatedDateTimeTypes.push(currentDateTimeType.repr());
        return accumulatedDateTimeTypes;
      }, []).join(",");
    }
  }, {
    key: "valueXML",
    get: function get() {
      return _classPrivateFieldGet(this, _datetimelist).reduce(function (accumulatedDateTimeTypes, currentDateTimeType) {
        return accumulatedDateTimeTypes + currentDateTimeType.reprXML();
      }, "");
    }
  }, {
    key: "valueJSON",
    get: function get() {
      var value = _classPrivateFieldGet(this, _datetimelist).reduce(function (accumulatedIntegerTypes, currentIntegerType) {
        accumulatedIntegerTypes.push(currentIntegerType.reprJSON().pop());
        return accumulatedIntegerTypes;
      }, []);

      value.unshift(this.type.toLowerCase());
      return value;
    }
  }]);

  return DateTimeListType;
}(BaseValue);

function _validate2(datetimelist) {
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
