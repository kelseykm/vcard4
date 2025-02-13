import { inherits as _inherits, createClass as _createClass, defineProperty as _defineProperty, classPrivateFieldGet2 as _classPrivateFieldGet2, classCallCheck as _classCallCheck, callSuper as _callSuper, classPrivateMethodInitSpec as _classPrivateMethodInitSpec, classPrivateFieldInitSpec as _classPrivateFieldInitSpec, assertClassBrand as _assertClassBrand, classPrivateFieldSet2 as _classPrivateFieldSet2 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { BaseValue } from './BaseValue.js';
import { MissingArgument } from '../errors/MissingArgument.js';
import { InvalidArgument } from '../errors/InvalidArgument.js';

var _langTagValue = /*#__PURE__*/new WeakMap();
var _langTagRegexp = /*#__PURE__*/new WeakMap();
var _LanguageTagType_brand = /*#__PURE__*/new WeakSet();
var LanguageTagType = /*#__PURE__*/function (_BaseValue) {
  function LanguageTagType(_langTagValue2) {
    var _this;
    _classCallCheck(this, LanguageTagType);
    _this = _callSuper(this, LanguageTagType);
    _classPrivateMethodInitSpec(_this, _LanguageTagType_brand);
    _classPrivateFieldInitSpec(_this, _langTagValue, void 0);
    _classPrivateFieldInitSpec(_this, _langTagRegexp, /^(?:[a-zA-Z]{2,3}(-[a-zA-Z]{3}){0,3})(-[0-9A-Za-z]+){0,3}(-x(-[0-9A-Za-z]{1,8})+)?(-[0-9A-WY-Za-wy-z]+)?(-[0-9A-Za-z]+)?$/);
    _assertClassBrand(_LanguageTagType_brand, _this, _validate).call(_this, _langTagValue2);
    _classPrivateFieldSet2(_langTagValue, _this, _langTagValue2);
    _this.checkAbstractPropertiesAndMethods();
    Object.freeze(_this);
    return _this;
  }
  _inherits(LanguageTagType, _BaseValue);
  return _createClass(LanguageTagType, [{
    key: "value",
    get: function get() {
      return _classPrivateFieldGet2(_langTagValue, this);
    }
  }, {
    key: "valueXML",
    get: function get() {
      return "<".concat(this.constructor.type.toLowerCase(), ">").concat(_classPrivateFieldGet2(_langTagValue, this), "</").concat(this.constructor.type.toLowerCase(), ">");
    }
  }, {
    key: "valueJSON",
    get: function get() {
      return [this.constructor.type.toLowerCase(), _classPrivateFieldGet2(_langTagValue, this)];
    }
  }]);
}(BaseValue);
function _validate(langTagValue) {
  if (typeof langTagValue === "undefined") throw new MissingArgument("Value for LanguageTagType must be supplied");else if (typeof langTagValue !== "string") throw new TypeError("Value for LanguageTagType should be of type string");else if (!_classPrivateFieldGet2(_langTagRegexp, this).test(langTagValue)) throw new InvalidArgument("Invalid language tag");
}
_defineProperty(LanguageTagType, "type", "LANGUAGE-TAG");
_defineProperty(LanguageTagType, "identifier", "LanguageTagType");
Object.freeze(LanguageTagType);

export { LanguageTagType };
//# sourceMappingURL=LanguageTagType.js.map
