import { inherits as _inherits, createSuper as _createSuper, createClass as _createClass, defineProperty as _defineProperty, classCallCheck as _classCallCheck, classPrivateMethodInitSpec as _classPrivateMethodInitSpec, assertThisInitialized as _assertThisInitialized, classPrivateFieldInitSpec as _classPrivateFieldInitSpec, classPrivateMethodGet as _classPrivateMethodGet, classPrivateFieldSet as _classPrivateFieldSet, classPrivateFieldGet as _classPrivateFieldGet } from '../_virtual/_rollupPluginBabelHelpers.js';
import { BaseParameter } from './BaseParameter.js';
import { MissingArgument } from '../errors/MissingArgument.js';

var _langTag = /*#__PURE__*/new WeakMap();

var _validate = /*#__PURE__*/new WeakSet();

var LanguageParameter = /*#__PURE__*/function (_BaseParameter) {
  _inherits(LanguageParameter, _BaseParameter);

  var _super = _createSuper(LanguageParameter);

  function LanguageParameter(_langTag2) {
    var _this;

    _classCallCheck(this, LanguageParameter);

    _this = _super.call(this);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _langTag, {
      writable: true,
      value: void 0
    });

    _classPrivateMethodGet(_assertThisInitialized(_this), _validate, _validate2).call(_assertThisInitialized(_this), _langTag2);

    _classPrivateFieldSet(_assertThisInitialized(_this), _langTag, _langTag2);

    _this.checkAbstractPropertiesAndMethods();

    Object.freeze(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(LanguageParameter, [{
    key: "value",
    get: function get() {
      return _classPrivateFieldGet(this, _langTag).repr();
    }
  }, {
    key: "valueXML",
    get: function get() {
      return _classPrivateFieldGet(this, _langTag).reprXML();
    }
  }, {
    key: "valueJSON",
    get: function get() {
      return _classPrivateFieldGet(this, _langTag).reprJSON();
    }
  }]);

  return LanguageParameter;
}(BaseParameter);

function _validate2(langTag) {
  if (typeof langTag === "undefined") throw new MissingArgument("Language Tag for LanguageParameter must be supplied");else if (langTag.constructor.identifier !== "LanguageTagType") throw new TypeError("The value of the LANGUAGE property parameter should be of type LanguageTagType");
}

_defineProperty(LanguageParameter, "param", "LANGUAGE");

_defineProperty(LanguageParameter, "identifier", "LanguageParameter");

Object.freeze(LanguageParameter);

export { LanguageParameter };
//# sourceMappingURL=LanguageParameter.js.map
