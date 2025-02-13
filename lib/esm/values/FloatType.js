import { inherits as _inherits, createClass as _createClass, defineProperty as _defineProperty, classPrivateFieldGet2 as _classPrivateFieldGet2, classCallCheck as _classCallCheck, callSuper as _callSuper, classPrivateMethodInitSpec as _classPrivateMethodInitSpec, classPrivateFieldInitSpec as _classPrivateFieldInitSpec, assertClassBrand as _assertClassBrand, classPrivateFieldSet2 as _classPrivateFieldSet2 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { BaseValue } from './BaseValue.js';
import { MissingArgument } from '../errors/MissingArgument.js';

var _floatValue = /*#__PURE__*/new WeakMap();
var _FloatType_brand = /*#__PURE__*/new WeakSet();
var FloatType = /*#__PURE__*/function (_BaseValue) {
  function FloatType(_floatValue2) {
    var _this;
    _classCallCheck(this, FloatType);
    _this = _callSuper(this, FloatType);
    _classPrivateMethodInitSpec(_this, _FloatType_brand);
    _classPrivateFieldInitSpec(_this, _floatValue, void 0);
    _assertClassBrand(_FloatType_brand, _this, _validate).call(_this, _floatValue2);
    _classPrivateFieldSet2(_floatValue, _this, _floatValue2);
    _this.checkAbstractPropertiesAndMethods();
    Object.freeze(_this);
    return _this;
  }
  _inherits(FloatType, _BaseValue);
  return _createClass(FloatType, [{
    key: "value",
    get: function get() {
      return "".concat(_classPrivateFieldGet2(_floatValue, this));
    }
  }, {
    key: "valueXML",
    get: function get() {
      return "<".concat(this.constructor.type.toLowerCase(), ">").concat(_classPrivateFieldGet2(_floatValue, this), "</").concat(this.constructor.type.toLowerCase(), ">");
    }
  }, {
    key: "valueJSON",
    get: function get() {
      return [this.constructor.type.toLowerCase(), _classPrivateFieldGet2(_floatValue, this)];
    }
  }]);
}(BaseValue);
function _validate(floatValue) {
  if (typeof floatValue === "undefined") throw new MissingArgument("Value for FloatType must be supplied");
  if (!(typeof floatValue === "number") && !/\./.test(floatValue) || !/^[-+]?\d+\.\d+$/.test(floatValue)) throw new TypeError("Invalid value for FloatType");
}
_defineProperty(FloatType, "type", "FLOAT");
_defineProperty(FloatType, "identifier", "FloatType");
Object.freeze(FloatType);

export { FloatType };
//# sourceMappingURL=FloatType.js.map
