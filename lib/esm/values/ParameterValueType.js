import { inherits as _inherits, createClass as _createClass, defineProperty as _defineProperty, assertClassBrand as _assertClassBrand, classPrivateFieldGet2 as _classPrivateFieldGet2, classCallCheck as _classCallCheck, callSuper as _callSuper, classPrivateMethodInitSpec as _classPrivateMethodInitSpec, classPrivateFieldInitSpec as _classPrivateFieldInitSpec, classPrivateFieldSet2 as _classPrivateFieldSet2 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { BaseValue } from './BaseValue.js';
import { MissingArgument } from '../errors/MissingArgument.js';
import { InvalidArgument } from '../errors/InvalidArgument.js';

var _parameterValue = /*#__PURE__*/new WeakMap();
var _ParameterValueType_brand = /*#__PURE__*/new WeakSet();
var ParameterValueType = /*#__PURE__*/function (_BaseValue) {
  function ParameterValueType(_parameterValue2) {
    var _this;
    _classCallCheck(this, ParameterValueType);
    _this = _callSuper(this, ParameterValueType);
    _classPrivateMethodInitSpec(_this, _ParameterValueType_brand);
    _classPrivateFieldInitSpec(_this, _parameterValue, void 0);
    _assertClassBrand(_ParameterValueType_brand, _this, _validate).call(_this, _parameterValue2);
    _classPrivateFieldSet2(_parameterValue, _this, _parameterValue2);
    _this.checkAbstractPropertiesAndMethods();
    Object.freeze(_this);
    return _this;
  }
  _inherits(ParameterValueType, _BaseValue);
  return _createClass(ParameterValueType, [{
    key: "value",
    get: function get() {
      var cleanVal = _assertClassBrand(_ParameterValueType_brand, this, _cleanUp).call(this, _classPrivateFieldGet2(_parameterValue, this));
      return /[:;]/.test(cleanVal) ? "\"".concat(cleanVal, "\"") : cleanVal;
    }
  }, {
    key: "valueXML",
    get: function get() {
      return "<".concat(this.constructor.type.toLowerCase(), ">").concat(_assertClassBrand(_ParameterValueType_brand, this, _cleanUpXML).call(this, _classPrivateFieldGet2(_parameterValue, this)), "</").concat(this.constructor.type.toLowerCase(), ">");
    }
  }, {
    key: "valueJSON",
    get: function get() {
      return [this.constructor.type.toLowerCase(), _classPrivateFieldGet2(_parameterValue, this)];
    }
  }, {
    key: "_unsafe_raw_value",
    get: function get() {
      return _classPrivateFieldGet2(_parameterValue, this);
    }
  }]);
}(BaseValue);
function _validate(parameterValue) {
  if (typeof parameterValue === "undefined" || parameterValue === "") throw new MissingArgument("Value for ParameterValueType must be supplied");else if (typeof parameterValue !== "string") throw new TypeError("Only type string allowed for ParameterValueType value");else if (/[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]/.test(parameterValue)) {
    throw new InvalidArgument("Value includes forbidden characters");
  }
}
function _cleanUp(parameterValue) {
  return parameterValue.replaceAll("^", "^^").replaceAll("\n", "^n").replaceAll('"', "^’");
}
function _cleanUpXML(parameterValue) {
  return parameterValue.replaceAll("&", "&amp;").replaceAll(">", "&gt;").replaceAll("<", "&lt;").replaceAll('"', "&quot;").replaceAll("'", "&apos;");
}
_defineProperty(ParameterValueType, "type", "TEXT");
_defineProperty(ParameterValueType, "identifier", "ParameterValueType");
Object.freeze(ParameterValueType);

export { ParameterValueType };
//# sourceMappingURL=ParameterValueType.js.map
