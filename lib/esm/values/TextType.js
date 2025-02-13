import { inherits as _inherits, createClass as _createClass, defineProperty as _defineProperty, assertClassBrand as _assertClassBrand, classPrivateFieldGet2 as _classPrivateFieldGet2, classCallCheck as _classCallCheck, callSuper as _callSuper, classPrivateMethodInitSpec as _classPrivateMethodInitSpec, classPrivateFieldInitSpec as _classPrivateFieldInitSpec, classPrivateFieldSet2 as _classPrivateFieldSet2 } from '../_virtual/_rollupPluginBabelHelpers.js';
import { BaseValue } from './BaseValue.js';
import { MissingArgument } from '../errors/MissingArgument.js';

var _textValue = /*#__PURE__*/new WeakMap();
var _TextType_brand = /*#__PURE__*/new WeakSet();
var TextType = /*#__PURE__*/function (_BaseValue) {
  function TextType(_textValue2) {
    var _this;
    _classCallCheck(this, TextType);
    _this = _callSuper(this, TextType);
    _classPrivateMethodInitSpec(_this, _TextType_brand);
    _classPrivateFieldInitSpec(_this, _textValue, void 0);
    _assertClassBrand(_TextType_brand, _this, _validate).call(_this, _textValue2);
    _classPrivateFieldSet2(_textValue, _this, _textValue2);
    _this.checkAbstractPropertiesAndMethods();
    Object.freeze(_this);
    return _this;
  }
  _inherits(TextType, _BaseValue);
  return _createClass(TextType, [{
    key: "value",
    get: function get() {
      return _assertClassBrand(_TextType_brand, this, _cleanUp).call(this, _classPrivateFieldGet2(_textValue, this));
    }
  }, {
    key: "valueXML",
    get: function get() {
      return "<".concat(this.constructor.type.toLowerCase(), ">").concat(_assertClassBrand(_TextType_brand, this, _cleanUpXML).call(this, _classPrivateFieldGet2(_textValue, this)), "</").concat(this.constructor.type.toLowerCase(), ">");
    }
  }, {
    key: "valueJSON",
    get: function get() {
      return [this.constructor.type.toLowerCase(), _classPrivateFieldGet2(_textValue, this)];
    }
  }, {
    key: "_unsafe_raw_value",
    get: function get() {
      return _classPrivateFieldGet2(_textValue, this);
    }
  }]);
}(BaseValue);
function _validate(textValue) {
  if (typeof textValue === "undefined" || textValue === "") throw new MissingArgument("Value for TextType must be supplied");else if (typeof textValue !== "string") throw new TypeError("Only type string allowed for TextType value");
}
function _cleanUp(textValue) {
  return textValue.replaceAll("\\", "\\\\").replaceAll(",", "\\,").replaceAll(":", "\\:").replaceAll(";", "\\;").replaceAll("\n", "\\n");
}
function _cleanUpXML(textValue) {
  return textValue.replaceAll("&", "&amp;").replaceAll(">", "&gt;").replaceAll("<", "&lt;").replaceAll('"', "&quot;").replaceAll("'", "&apos;");
}
_defineProperty(TextType, "type", "TEXT");
_defineProperty(TextType, "identifier", "TextType");
Object.freeze(TextType);

export { TextType };
//# sourceMappingURL=TextType.js.map
