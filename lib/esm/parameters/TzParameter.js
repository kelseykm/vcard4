import { inherits as _inherits, createClass as _createClass, defineProperty as _defineProperty, classPrivateFieldGet2 as _classPrivateFieldGet2, classCallCheck as _classCallCheck, callSuper as _callSuper, classPrivateMethodInitSpec as _classPrivateMethodInitSpec, classPrivateFieldInitSpec as _classPrivateFieldInitSpec, assertClassBrand as _assertClassBrand, classPrivateFieldSet2 as _classPrivateFieldSet2 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { BaseParameter } from './BaseParameter.js';
import { MissingArgument } from '../errors/MissingArgument.js';

var _tzValue = /*#__PURE__*/new WeakMap();
var _TzParameter_brand = /*#__PURE__*/new WeakSet();
var TzParameter = /*#__PURE__*/function (_BaseParameter) {
  function TzParameter(_tzValue2) {
    var _this;
    _classCallCheck(this, TzParameter);
    _this = _callSuper(this, TzParameter);
    _classPrivateMethodInitSpec(_this, _TzParameter_brand);
    _classPrivateFieldInitSpec(_this, _tzValue, void 0);
    _assertClassBrand(_TzParameter_brand, _this, _validate).call(_this, _tzValue2);
    _classPrivateFieldSet2(_tzValue, _this, _tzValue2);
    _this.checkAbstractPropertiesAndMethods();
    Object.freeze(_this);
    return _this;
  }
  _inherits(TzParameter, _BaseParameter);
  return _createClass(TzParameter, [{
    key: "value",
    get: function get() {
      return _classPrivateFieldGet2(_tzValue, this).constructor.identifier === "URIType" ? "\"".concat(_classPrivateFieldGet2(_tzValue, this).repr(), "\"") : _classPrivateFieldGet2(_tzValue, this).repr();
    }
  }, {
    key: "valueXML",
    get: function get() {
      return _classPrivateFieldGet2(_tzValue, this).reprXML();
    }
  }, {
    key: "valueJSON",
    get: function get() {
      return _classPrivateFieldGet2(_tzValue, this).reprJSON();
    }
  }]);
}(BaseParameter);
function _validate(tzValue) {
  if (typeof tzValue === "undefined") throw new MissingArgument("Value for TzParameter must be supplied");
  if (tzValue.constructor.identifier !== "ParameterValueType" && tzValue.constructor.identifier !== "URIType" && !(tzValue.constructor.identifier === "DateTimeType" && tzValue.type === "UTC-OFFSET")) throw new TypeError("Invalid type for value for TzParameter");
}
_defineProperty(TzParameter, "param", "TZ");
_defineProperty(TzParameter, "identifier", "TzParameter");
Object.freeze(TzParameter);

export { TzParameter };
//# sourceMappingURL=TzParameter.js.map
