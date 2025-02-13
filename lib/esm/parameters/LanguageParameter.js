import { inherits as _inherits, createClass as _createClass, defineProperty as _defineProperty, classPrivateFieldGet2 as _classPrivateFieldGet2, classCallCheck as _classCallCheck, callSuper as _callSuper, classPrivateMethodInitSpec as _classPrivateMethodInitSpec, classPrivateFieldInitSpec as _classPrivateFieldInitSpec, assertClassBrand as _assertClassBrand, classPrivateFieldSet2 as _classPrivateFieldSet2 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { BaseParameter } from './BaseParameter.js';
import { MissingArgument } from '../errors/MissingArgument.js';

var _langTag = /*#__PURE__*/new WeakMap();
var _LanguageParameter_brand = /*#__PURE__*/new WeakSet();
var LanguageParameter = /*#__PURE__*/function (_BaseParameter) {
  function LanguageParameter(_langTag2) {
    var _this;
    _classCallCheck(this, LanguageParameter);
    _this = _callSuper(this, LanguageParameter);
    _classPrivateMethodInitSpec(_this, _LanguageParameter_brand);
    _classPrivateFieldInitSpec(_this, _langTag, void 0);
    _assertClassBrand(_LanguageParameter_brand, _this, _validate).call(_this, _langTag2);
    _classPrivateFieldSet2(_langTag, _this, _langTag2);
    _this.checkAbstractPropertiesAndMethods();
    Object.freeze(_this);
    return _this;
  }
  _inherits(LanguageParameter, _BaseParameter);
  return _createClass(LanguageParameter, [{
    key: "value",
    get: function get() {
      return _classPrivateFieldGet2(_langTag, this).repr();
    }
  }, {
    key: "valueXML",
    get: function get() {
      return _classPrivateFieldGet2(_langTag, this).reprXML();
    }
  }, {
    key: "valueJSON",
    get: function get() {
      return _classPrivateFieldGet2(_langTag, this).reprJSON();
    }
  }]);
}(BaseParameter);
function _validate(langTag) {
  if (typeof langTag === "undefined") throw new MissingArgument("Language Tag for LanguageParameter must be supplied");else if (langTag.constructor.identifier !== "LanguageTagType") throw new TypeError("The value of the LANGUAGE property parameter should be of type LanguageTagType");
}
_defineProperty(LanguageParameter, "param", "LANGUAGE");
_defineProperty(LanguageParameter, "identifier", "LanguageParameter");
Object.freeze(LanguageParameter);

export { LanguageParameter };
//# sourceMappingURL=LanguageParameter.js.map
