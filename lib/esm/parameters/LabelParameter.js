import { inherits as _inherits, createSuper as _createSuper, createClass as _createClass, defineProperty as _defineProperty, classCallCheck as _classCallCheck, classPrivateMethodInitSpec as _classPrivateMethodInitSpec, assertThisInitialized as _assertThisInitialized, classPrivateFieldInitSpec as _classPrivateFieldInitSpec, classPrivateMethodGet as _classPrivateMethodGet, classPrivateFieldSet as _classPrivateFieldSet, classPrivateFieldGet as _classPrivateFieldGet } from '../_virtual/_rollupPluginBabelHelpers.js';
import { BaseParameter } from './BaseParameter.js';
import { MissingArgument } from '../errors/MissingArgument.js';

var _labelValue = /*#__PURE__*/new WeakMap();

var _validate = /*#__PURE__*/new WeakSet();

var _cleanUp = /*#__PURE__*/new WeakSet();

var LabelParameter = /*#__PURE__*/function (_BaseParameter) {
  _inherits(LabelParameter, _BaseParameter);

  var _super = _createSuper(LabelParameter);

  function LabelParameter(_labelValue2) {
    var _this;

    _classCallCheck(this, LabelParameter);

    _this = _super.call(this);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _cleanUp);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _labelValue, {
      writable: true,
      value: void 0
    });

    _classPrivateMethodGet(_assertThisInitialized(_this), _validate, _validate2).call(_assertThisInitialized(_this), _labelValue2);

    _classPrivateFieldSet(_assertThisInitialized(_this), _labelValue, _labelValue2);

    _this.checkAbstractPropertiesAndMethods();

    Object.freeze(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(LabelParameter, [{
    key: "value",
    get: function get() {
      return "\"".concat(_classPrivateMethodGet(this, _cleanUp, _cleanUp2).call(this, _classPrivateFieldGet(this, _labelValue)._unsafe_raw_value), "\"");
    }
  }, {
    key: "valueXML",
    get: function get() {
      return _classPrivateFieldGet(this, _labelValue).reprXML();
    }
  }, {
    key: "valueJSON",
    get: function get() {
      return ["text", _classPrivateFieldGet(this, _labelValue)._unsafe_raw_value];
    }
  }]);

  return LabelParameter;
}(BaseParameter);

function _validate2(labelValue) {
  if (typeof labelValue === "undefined") throw new MissingArgument("Value for LabelParameter must be supplied");else if (labelValue.constructor.identifier !== "TextType") throw new TypeError("Value for LabelParameter should be of type TextType");
}

function _cleanUp2(labelValue) {
  return labelValue.replaceAll("^", "^^").replaceAll("\n", "^n").replaceAll('"', "^’");
}

_defineProperty(LabelParameter, "param", "LABEL");

_defineProperty(LabelParameter, "identifier", "LabelParameter");

Object.freeze(LabelParameter);

export { LabelParameter };
//# sourceMappingURL=LabelParameter.js.map
