import { inherits as _inherits, createSuper as _createSuper, createClass as _createClass, defineProperty as _defineProperty, classCallCheck as _classCallCheck, classPrivateMethodInitSpec as _classPrivateMethodInitSpec, assertThisInitialized as _assertThisInitialized, classPrivateFieldInitSpec as _classPrivateFieldInitSpec, classPrivateMethodGet as _classPrivateMethodGet, classPrivateFieldSet as _classPrivateFieldSet, classPrivateFieldGet as _classPrivateFieldGet } from '../_virtual/_rollupPluginBabelHelpers.js';
import { BaseValue } from './BaseValue.js';
import { MissingArgument } from '../errors/MissingArgument.js';

var _langTagValue = /*#__PURE__*/new WeakMap();

var _validate = /*#__PURE__*/new WeakSet();

var LanguageTagType = /*#__PURE__*/function (_BaseValue) {
  _inherits(LanguageTagType, _BaseValue);

  var _super = _createSuper(LanguageTagType);

  function LanguageTagType(_langTagValue2) {
    var _this;

    _classCallCheck(this, LanguageTagType);

    _this = _super.call(this);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _langTagValue, {
      writable: true,
      value: void 0
    });

    _classPrivateMethodGet(_assertThisInitialized(_this), _validate, _validate2).call(_assertThisInitialized(_this), _langTagValue2);

    _classPrivateFieldSet(_assertThisInitialized(_this), _langTagValue, _langTagValue2);

    _this.checkAbstractPropertiesAndMethods();

    Object.freeze(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(LanguageTagType, [{
    key: "value",
    get: function get() {
      return _classPrivateFieldGet(this, _langTagValue);
    }
  }, {
    key: "valueXML",
    get: function get() {
      return "<".concat(this.constructor.type.toLowerCase(), ">").concat(_classPrivateFieldGet(this, _langTagValue), "</").concat(this.constructor.type.toLowerCase(), ">");
    }
  }, {
    key: "valueJSON",
    get: function get() {
      return [this.constructor.type.toLowerCase(), _classPrivateFieldGet(this, _langTagValue)];
    }
  }]);

  return LanguageTagType;
}(BaseValue);

function _validate2(langTagValue) {
  if (typeof langTagValue === "undefined") throw new MissingArgument("Value for LanguageTagType must be supplied");else if (typeof langTagValue !== "string") throw new TypeError("Value for LanguageTagType should be of type string");
}

_defineProperty(LanguageTagType, "type", "LANGUAGE-TAG");

_defineProperty(LanguageTagType, "identifier", "LanguageTagType");

Object.freeze(LanguageTagType);

export { LanguageTagType };
//# sourceMappingURL=LanguageTagType.js.map
