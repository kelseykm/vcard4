import { inherits as _inherits, createClass as _createClass, defineProperty as _defineProperty, classPrivateFieldGet2 as _classPrivateFieldGet2, classCallCheck as _classCallCheck, callSuper as _callSuper, classPrivateMethodInitSpec as _classPrivateMethodInitSpec, classPrivateFieldInitSpec as _classPrivateFieldInitSpec, assertClassBrand as _assertClassBrand, classPrivateFieldSet2 as _classPrivateFieldSet2 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { BaseValue } from './BaseValue.js';
import { MissingArgument } from '../errors/MissingArgument.js';
import { InvalidArgument } from '../errors/InvalidArgument.js';

var _sexRegExp = /*#__PURE__*/new WeakMap();
var _sexValue = /*#__PURE__*/new WeakMap();
var _SexType_brand = /*#__PURE__*/new WeakSet();
var SexType = /*#__PURE__*/function (_BaseValue) {
  function SexType(_sexValue2) {
    var _this;
    _classCallCheck(this, SexType);
    _this = _callSuper(this, SexType);
    _classPrivateMethodInitSpec(_this, _SexType_brand);
    _classPrivateFieldInitSpec(_this, _sexRegExp, /^[MFONU]$/);
    _classPrivateFieldInitSpec(_this, _sexValue, void 0);
    _assertClassBrand(_SexType_brand, _this, _validate).call(_this, _sexValue2);
    _classPrivateFieldSet2(_sexValue, _this, _sexValue2);
    _this.checkAbstractPropertiesAndMethods();
    Object.freeze(_this);
    return _this;
  }
  _inherits(SexType, _BaseValue);
  return _createClass(SexType, [{
    key: "value",
    get: function get() {
      return _classPrivateFieldGet2(_sexValue, this);
    }
  }, {
    key: "valueXML",
    get: function get() {
      return "<sex>".concat(_classPrivateFieldGet2(_sexValue, this), "</sex>");
    }
  }, {
    key: "valueJSON",
    get: function get() {
      return [this.constructor.type.toLowerCase(), _classPrivateFieldGet2(_sexValue, this)];
    }
  }]);
}(BaseValue);
function _validate(sexValue) {
  if (typeof sexValue === "undefined") throw new MissingArgument("Value for SexType must be supplied");else if (!_classPrivateFieldGet2(_sexRegExp, this).test(sexValue)) throw new InvalidArgument("Invalid sex");
}
_defineProperty(SexType, "type", "TEXT");
_defineProperty(SexType, "identifier", "SexType");
Object.freeze(SexType);

export { SexType };
//# sourceMappingURL=SexType.js.map
