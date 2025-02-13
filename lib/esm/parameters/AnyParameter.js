import { inherits as _inherits, createClass as _createClass, defineProperty as _defineProperty, classPrivateFieldGet2 as _classPrivateFieldGet2, classCallCheck as _classCallCheck, callSuper as _callSuper, classPrivateMethodInitSpec as _classPrivateMethodInitSpec, classPrivateFieldInitSpec as _classPrivateFieldInitSpec, assertClassBrand as _assertClassBrand, classPrivateFieldSet2 as _classPrivateFieldSet2 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { BaseParameter } from './BaseParameter.js';
import { MissingArgument } from '../errors/MissingArgument.js';
import { InvalidArgument } from '../errors/InvalidArgument.js';

var _value = /*#__PURE__*/new WeakMap();
var _param = /*#__PURE__*/new WeakMap();
var _paramRegExp = /*#__PURE__*/new WeakMap();
var _AnyParameter_brand = /*#__PURE__*/new WeakSet();
var AnyParameter = /*#__PURE__*/function (_BaseParameter) {
  function AnyParameter(_param2, _value2) {
    var _this;
    _classCallCheck(this, AnyParameter);
    _this = _callSuper(this, AnyParameter);
    _classPrivateMethodInitSpec(_this, _AnyParameter_brand);
    _classPrivateFieldInitSpec(_this, _value, void 0);
    _classPrivateFieldInitSpec(_this, _param, void 0);
    _classPrivateFieldInitSpec(_this, _paramRegExp, /^x-[a-z0-9-]+$/i);
    _assertClassBrand(_AnyParameter_brand, _this, _validate).call(_this, _param2, _value2);
    _classPrivateFieldSet2(_param, _this, _param2);
    _classPrivateFieldSet2(_value, _this, _value2);
    _this.checkAbstractPropertiesAndMethods();
    Object.freeze(_this);
    return _this;
  }
  _inherits(AnyParameter, _BaseParameter);
  return _createClass(AnyParameter, [{
    key: "param",
    get: function get() {
      return "".concat(_classPrivateFieldGet2(_param, this));
    }
  }, {
    key: "value",
    get: function get() {
      return _classPrivateFieldGet2(_value, this).repr();
    }
  }, {
    key: "valueXML",
    get: function get() {
      return _classPrivateFieldGet2(_value, this).reprXML();
    }
  }, {
    key: "valueJSON",
    get: function get() {
      return _classPrivateFieldGet2(_value, this).reprJSON();
    }
  }]);
}(BaseParameter);
function _validate(param, value) {
  if (typeof param === "undefined" || typeof value === "undefined") throw new MissingArgument("Parameter name and value for AnyParameter must be supplied");else if (!_classPrivateFieldGet2(_paramRegExp, this).test(param)) throw new InvalidArgument("Invalid parameter name for AnyParameter");else if (value.constructor.identifier !== "ParameterValueType") throw new InvalidArgument("Invalid value for AnyParameter");
}
_defineProperty(AnyParameter, "identifier", "AnyParameter");
Object.freeze(AnyParameter);

export { AnyParameter };
//# sourceMappingURL=AnyParameter.js.map
