import { inherits as _inherits, createSuper as _createSuper, createClass as _createClass, defineProperty as _defineProperty, classCallCheck as _classCallCheck, classPrivateMethodInitSpec as _classPrivateMethodInitSpec, assertThisInitialized as _assertThisInitialized, classPrivateFieldInitSpec as _classPrivateFieldInitSpec, classPrivateMethodGet as _classPrivateMethodGet, classPrivateFieldSet as _classPrivateFieldSet, classPrivateFieldGet as _classPrivateFieldGet } from '../_virtual/_rollupPluginBabelHelpers.js';
import { BaseValue } from './BaseValue.js';
import { MissingArgument } from '../errors/MissingArgument.js';

var _textValue = /*#__PURE__*/new WeakMap();

var _validate = /*#__PURE__*/new WeakSet();

var _cleanUp = /*#__PURE__*/new WeakSet();

var _cleanUpXML = /*#__PURE__*/new WeakSet();

var TextType = /*#__PURE__*/function (_BaseValue) {
  _inherits(TextType, _BaseValue);

  var _super = _createSuper(TextType);

  function TextType(_textValue2) {
    var _this;

    _classCallCheck(this, TextType);

    _this = _super.call(this);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _cleanUpXML);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _cleanUp);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _textValue, {
      writable: true,
      value: void 0
    });

    _classPrivateMethodGet(_assertThisInitialized(_this), _validate, _validate2).call(_assertThisInitialized(_this), _textValue2);

    _classPrivateFieldSet(_assertThisInitialized(_this), _textValue, _textValue2);

    _this.checkAbstractPropertiesAndMethods();

    Object.freeze(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(TextType, [{
    key: "value",
    get: function get() {
      return _classPrivateMethodGet(this, _cleanUp, _cleanUp2).call(this, _classPrivateFieldGet(this, _textValue));
    }
  }, {
    key: "valueXML",
    get: function get() {
      return "<".concat(this.constructor.type.toLowerCase(), ">").concat(_classPrivateMethodGet(this, _cleanUpXML, _cleanUpXML2).call(this, _classPrivateFieldGet(this, _textValue)), "</").concat(this.constructor.type.toLowerCase(), ">");
    }
  }, {
    key: "valueJSON",
    get: function get() {
      return [this.constructor.type.toLowerCase(), _classPrivateFieldGet(this, _textValue)];
    }
  }, {
    key: "_unsafe_raw_value",
    get: function get() {
      return _classPrivateFieldGet(this, _textValue);
    }
  }]);

  return TextType;
}(BaseValue);

function _validate2(textValue) {
  if (typeof textValue === "undefined") throw new MissingArgument("Value for TextType must be supplied");else if (typeof textValue !== "string") throw new TypeError("Only type string allowed for TextType value");
}

function _cleanUp2(textValue) {
  return textValue.replaceAll("\\", "\\\\").replaceAll(",", "\\,").replaceAll(":", "\\:").replaceAll(";", "\\;").replaceAll("\n", "\\n");
}

function _cleanUpXML2(textValue) {
  return textValue.replaceAll("&", "&amp;").replaceAll(">", "&gt;").replaceAll("<", "&lt;").replaceAll('"', "&quot;").replaceAll("'", "&apos;");
}

_defineProperty(TextType, "type", "TEXT");

_defineProperty(TextType, "identifier", "TextType");

Object.freeze(TextType);

export { TextType };
//# sourceMappingURL=TextType.js.map
