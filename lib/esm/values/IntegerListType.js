import { inherits as _inherits, createClass as _createClass, defineProperty as _defineProperty, classPrivateFieldGet2 as _classPrivateFieldGet2, classCallCheck as _classCallCheck, callSuper as _callSuper, classPrivateMethodInitSpec as _classPrivateMethodInitSpec, classPrivateFieldInitSpec as _classPrivateFieldInitSpec, assertClassBrand as _assertClassBrand, classPrivateFieldSet2 as _classPrivateFieldSet2, createForOfIteratorHelper as _createForOfIteratorHelper } from '../_virtual/_rollupPluginBabelHelpers.js';
import { BaseValue } from './BaseValue.js';
import { MissingArgument } from '../errors/MissingArgument.js';

var _integerlist = /*#__PURE__*/new WeakMap();
var _IntegerListType_brand = /*#__PURE__*/new WeakSet();
var IntegerListType = /*#__PURE__*/function (_BaseValue) {
  function IntegerListType(_integerlist2) {
    var _this;
    _classCallCheck(this, IntegerListType);
    _this = _callSuper(this, IntegerListType);
    _classPrivateMethodInitSpec(_this, _IntegerListType_brand);
    _classPrivateFieldInitSpec(_this, _integerlist, void 0);
    _assertClassBrand(_IntegerListType_brand, _this, _validate).call(_this, _integerlist2);
    _classPrivateFieldSet2(_integerlist, _this, _integerlist2);
    _this.checkAbstractPropertiesAndMethods();
    Object.freeze(_this);
    return _this;
  }
  _inherits(IntegerListType, _BaseValue);
  return _createClass(IntegerListType, [{
    key: "value",
    get: function get() {
      return _classPrivateFieldGet2(_integerlist, this).reduce(function (accumulatedIntegerTypes, currentIntegerType) {
        accumulatedIntegerTypes.push(currentIntegerType.repr());
        return accumulatedIntegerTypes;
      }, []).join(",");
    }
  }, {
    key: "valueXML",
    get: function get() {
      return _classPrivateFieldGet2(_integerlist, this).reduce(function (accumulatedIntegerTypes, currentIntegerType) {
        return accumulatedIntegerTypes + currentIntegerType.reprXML();
      }, "");
    }
  }, {
    key: "valueJSON",
    get: function get() {
      var value = _classPrivateFieldGet2(_integerlist, this).reduce(function (accumulatedIntegerTypes, currentIntegerType) {
        accumulatedIntegerTypes.push(currentIntegerType.reprJSON().pop());
        return accumulatedIntegerTypes;
      }, []);
      value.unshift(this.constructor.type.toLowerCase());
      return value;
    }
  }]);
}(BaseValue);
function _validate(integerlist) {
  if (typeof integerlist === "undefined") throw new MissingArgument("Value for IntegerListType must be supplied");else if (!Array.isArray(integerlist)) throw new TypeError("Value for IntegerListType must be passed in an array");
  var _iterator = _createForOfIteratorHelper(integerlist),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var integer = _step.value;
      if (integer.constructor.identifier !== "IntegerType") throw new TypeError("Invalid type for value of IntegerListType. It should be an array of IntegerTypes");
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
_defineProperty(IntegerListType, "type", "INTEGER");
_defineProperty(IntegerListType, "identifier", "IntegerListType");
Object.freeze(IntegerListType);

export { IntegerListType };
//# sourceMappingURL=IntegerListType.js.map
