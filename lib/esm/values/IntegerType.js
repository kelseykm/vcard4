import { inherits as _inherits, createClass as _createClass, defineProperty as _defineProperty, classPrivateFieldGet2 as _classPrivateFieldGet2, classCallCheck as _classCallCheck, callSuper as _callSuper, classPrivateMethodInitSpec as _classPrivateMethodInitSpec, classPrivateFieldInitSpec as _classPrivateFieldInitSpec, assertClassBrand as _assertClassBrand, classPrivateFieldSet2 as _classPrivateFieldSet2 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { BaseValue } from './BaseValue.js';
import { MissingArgument } from '../errors/MissingArgument.js';
import { InvalidArgument } from '../errors/InvalidArgument.js';

var _intValue = /*#__PURE__*/new WeakMap();
var _IntegerType_brand = /*#__PURE__*/new WeakSet();
var IntegerType = /*#__PURE__*/function (_BaseValue) {
  function IntegerType(_intValue2) {
    var _this;
    _classCallCheck(this, IntegerType);
    _this = _callSuper(this, IntegerType);
    _classPrivateMethodInitSpec(_this, _IntegerType_brand);
    _classPrivateFieldInitSpec(_this, _intValue, void 0);
    _assertClassBrand(_IntegerType_brand, _this, _validate).call(_this, _intValue2);
    _classPrivateFieldSet2(_intValue, _this, _intValue2);
    _this.checkAbstractPropertiesAndMethods();
    Object.freeze(_this);
    return _this;
  }
  _inherits(IntegerType, _BaseValue);
  return _createClass(IntegerType, [{
    key: "value",
    get: function get() {
      return "".concat(_classPrivateFieldGet2(_intValue, this));
    }
  }, {
    key: "valueXML",
    get: function get() {
      return "<".concat(this.constructor.type.toLowerCase(), ">").concat(_classPrivateFieldGet2(_intValue, this), "</").concat(this.constructor.type.toLowerCase(), ">");
    }
  }, {
    key: "valueJSON",
    get: function get() {
      return [this.constructor.type.toLowerCase(), _classPrivateFieldGet2(_intValue, this)];
    }
  }]);
}(BaseValue);
function _validate(intValue) {
  if (typeof intValue === "undefined") throw new MissingArgument("Value for IntegerType must be supplied");else if (typeof intValue !== "number" && typeof intValue !== "bigint") throw new TypeError("Value for IntegerType must be of type number or bigint");else if (/\./.test(intValue.toString())) throw new InvalidArgument("Invalid value for IntegerType");else if (typeof intValue === "number" && !(-Number.MAX_SAFE_INTEGER < intValue && intValue < Number.MAX_SAFE_INTEGER)) throw new InvalidArgument("The maximum value is ".concat(Number.MAX_SAFE_INTEGER, ", and the minimum value is ").concat(Number.MIN_SAFE_INTEGER, " for number IntegerType"));else if (typeof intValue === "bigint" && !(-9223372036854775809n < intValue && intValue < 9223372036854775808n)) throw new InvalidArgument("The maximum value is 9223372036854775807n, and the minimum value is -9223372036854775808n for bigint IntegerType");
}
_defineProperty(IntegerType, "type", "INTEGER");
_defineProperty(IntegerType, "identifier", "IntegerType");
Object.freeze(IntegerType);

export { IntegerType };
//# sourceMappingURL=IntegerType.js.map
