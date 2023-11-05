import { inherits as _inherits, createSuper as _createSuper, createClass as _createClass, defineProperty as _defineProperty, classCallCheck as _classCallCheck, classPrivateMethodInitSpec as _classPrivateMethodInitSpec, assertThisInitialized as _assertThisInitialized, classPrivateFieldInitSpec as _classPrivateFieldInitSpec, classPrivateMethodGet as _classPrivateMethodGet, classPrivateFieldSet as _classPrivateFieldSet, classPrivateFieldGet as _classPrivateFieldGet } from '../_virtual/_rollupPluginBabelHelpers.js';
import { BaseParameter } from './BaseParameter.js';
import { MissingArgument } from '../errors/MissingArgument.js';
import { InvalidArgument } from '../errors/InvalidArgument.js';

var _value = /*#__PURE__*/new WeakMap();
var _param = /*#__PURE__*/new WeakMap();
var _paramRegExp = /*#__PURE__*/new WeakMap();
var _validate = /*#__PURE__*/new WeakSet();
var AnyParameter = /*#__PURE__*/function (_BaseParameter) {
  _inherits(AnyParameter, _BaseParameter);
  var _super = _createSuper(AnyParameter);
  function AnyParameter(_param2, _value2) {
    var _this;
    _classCallCheck(this, AnyParameter);
    _this = _super.call(this);
    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate);
    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _value, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _param, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _paramRegExp, {
      writable: true,
      value: /^x-[a-z0-9-]+$/i
    });
    _classPrivateMethodGet(_assertThisInitialized(_this), _validate, _validate2).call(_assertThisInitialized(_this), _param2, _value2);
    _classPrivateFieldSet(_assertThisInitialized(_this), _param, _param2);
    _classPrivateFieldSet(_assertThisInitialized(_this), _value, _value2);
    _this.checkAbstractPropertiesAndMethods();
    Object.freeze(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(AnyParameter, [{
    key: "param",
    get: function get() {
      return "".concat(_classPrivateFieldGet(this, _param));
    }
  }, {
    key: "value",
    get: function get() {
      return _classPrivateFieldGet(this, _value).repr();
    }
  }, {
    key: "valueXML",
    get: function get() {
      return _classPrivateFieldGet(this, _value).reprXML();
    }
  }, {
    key: "valueJSON",
    get: function get() {
      return _classPrivateFieldGet(this, _value).reprJSON();
    }
  }]);
  return AnyParameter;
}(BaseParameter);
function _validate2(param, value) {
  if (typeof param === "undefined" || typeof value === "undefined") throw new MissingArgument("Parameter name and value for AnyParameter must be supplied");else if (!_classPrivateFieldGet(this, _paramRegExp).test(param)) throw new InvalidArgument("Invalid parameter name for AnyParameter");else if (value.constructor.identifier !== "ParameterValueType") throw new InvalidArgument("Invalid value for AnyParameter");
}
_defineProperty(AnyParameter, "identifier", "AnyParameter");
Object.freeze(AnyParameter);

export { AnyParameter };
//# sourceMappingURL=AnyParameter.js.map
