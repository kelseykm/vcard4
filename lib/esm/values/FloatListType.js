import { inherits as _inherits, createClass as _createClass, defineProperty as _defineProperty, classPrivateFieldGet2 as _classPrivateFieldGet2, classCallCheck as _classCallCheck, callSuper as _callSuper, classPrivateMethodInitSpec as _classPrivateMethodInitSpec, classPrivateFieldInitSpec as _classPrivateFieldInitSpec, assertClassBrand as _assertClassBrand, classPrivateFieldSet2 as _classPrivateFieldSet2, createForOfIteratorHelper as _createForOfIteratorHelper } from '../_virtual/_rollupPluginBabelHelpers.js';
import { BaseValue } from './BaseValue.js';
import { MissingArgument } from '../errors/MissingArgument.js';

var _floatlist = /*#__PURE__*/new WeakMap();
var _FloatListType_brand = /*#__PURE__*/new WeakSet();
var FloatListType = /*#__PURE__*/function (_BaseValue) {
  function FloatListType(_floatlist2) {
    var _this;
    _classCallCheck(this, FloatListType);
    _this = _callSuper(this, FloatListType);
    _classPrivateMethodInitSpec(_this, _FloatListType_brand);
    _classPrivateFieldInitSpec(_this, _floatlist, void 0);
    _assertClassBrand(_FloatListType_brand, _this, _validate).call(_this, _floatlist2);
    _classPrivateFieldSet2(_floatlist, _this, _floatlist2);
    _this.checkAbstractPropertiesAndMethods();
    Object.freeze(_this);
    return _this;
  }
  _inherits(FloatListType, _BaseValue);
  return _createClass(FloatListType, [{
    key: "value",
    get: function get() {
      return _classPrivateFieldGet2(_floatlist, this).reduce(function (accumulatedFloatTypes, currentFloatType) {
        accumulatedFloatTypes.push(currentFloatType.repr());
        return accumulatedFloatTypes;
      }, []).join(",");
    }
  }, {
    key: "valueXML",
    get: function get() {
      return _classPrivateFieldGet2(_floatlist, this).reduce(function (accumulatedFloatTypes, currentFloatType) {
        return accumulatedFloatTypes + currentFloatType.reprXML();
      }, "");
    }
  }, {
    key: "valueJSON",
    get: function get() {
      var value = _classPrivateFieldGet2(_floatlist, this).reduce(function (accumulatedFloatTypes, currentFloatType) {
        accumulatedFloatTypes.push(currentFloatType.reprJSON().pop());
        return accumulatedFloatTypes;
      }, []);
      value.unshift(this.constructor.type.toLowerCase());
      return value;
    }
  }]);
}(BaseValue);
function _validate(floatlist) {
  if (typeof floatlist === "undefined") throw new MissingArgument("Value for FloatListType must be supplied");else if (!Array.isArray(floatlist)) throw new TypeError("Value of FloatListType should be passed in an array");
  var _iterator = _createForOfIteratorHelper(floatlist),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _float = _step.value;
      if (_float.constructor.identifier !== "FloatType") throw new TypeError("Value of FloatListType should be an array of FloatTypes");
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
_defineProperty(FloatListType, "type", "FLOAT");
_defineProperty(FloatListType, "identifier", "FloatListType");
Object.freeze(FloatListType);

export { FloatListType };
//# sourceMappingURL=FloatListType.js.map
