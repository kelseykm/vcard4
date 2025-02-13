import { inherits as _inherits, createClass as _createClass, defineProperty as _defineProperty, classPrivateFieldGet2 as _classPrivateFieldGet2, classCallCheck as _classCallCheck, callSuper as _callSuper, classPrivateMethodInitSpec as _classPrivateMethodInitSpec, classPrivateFieldInitSpec as _classPrivateFieldInitSpec, assertClassBrand as _assertClassBrand, classPrivateFieldSet2 as _classPrivateFieldSet2 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { BaseParameter } from './BaseParameter.js';
import { MissingArgument } from '../errors/MissingArgument.js';
import { InvalidArgument } from '../errors/InvalidArgument.js';

var _calscaleValue = /*#__PURE__*/new WeakMap();
var _calscaleRegExp = /*#__PURE__*/new WeakMap();
var _CalscaleParameter_brand = /*#__PURE__*/new WeakSet();
var CalscaleParameter = /*#__PURE__*/function (_BaseParameter) {
  function CalscaleParameter(_calscaleValue2) {
    var _this;
    _classCallCheck(this, CalscaleParameter);
    _this = _callSuper(this, CalscaleParameter);
    _classPrivateMethodInitSpec(_this, _CalscaleParameter_brand);
    _classPrivateFieldInitSpec(_this, _calscaleValue, void 0);
    _classPrivateFieldInitSpec(_this, _calscaleRegExp, /^(?:gregorian|[Xx]-[A-Za-z0-9-]+)$/);
    _assertClassBrand(_CalscaleParameter_brand, _this, _validate).call(_this, _calscaleValue2);
    _classPrivateFieldSet2(_calscaleValue, _this, _calscaleValue2);
    _this.checkAbstractPropertiesAndMethods();
    Object.freeze(_this);
    return _this;
  }
  _inherits(CalscaleParameter, _BaseParameter);
  return _createClass(CalscaleParameter, [{
    key: "value",
    get: function get() {
      return _classPrivateFieldGet2(_calscaleValue, this).repr();
    }
  }, {
    key: "valueXML",
    get: function get() {
      return _classPrivateFieldGet2(_calscaleValue, this).reprXML();
    }
  }, {
    key: "valueJSON",
    get: function get() {
      return _classPrivateFieldGet2(_calscaleValue, this).reprJSON();
    }
  }]);
}(BaseParameter);
function _validate(calscaleValue) {
  if (typeof calscaleValue === "undefined") throw new MissingArgument("Value for CalscaleParameter must be supplied");else if (calscaleValue.constructor.identifier !== "ParameterValueType") throw new MissingArgument("Value for CalscaleParameter must of type ParameterValueType");else if (!_classPrivateFieldGet2(_calscaleRegExp, this).test(calscaleValue.repr())) throw new InvalidArgument("Invalid calscale value");
}
_defineProperty(CalscaleParameter, "param", "CALSCALE");
_defineProperty(CalscaleParameter, "identifier", "CalscaleParameter");
Object.freeze(CalscaleParameter);

export { CalscaleParameter };
//# sourceMappingURL=CalscaleParameter.js.map
